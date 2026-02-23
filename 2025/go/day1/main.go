package main

import (
	"bufio"
	"os"
	"strconv"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func AbsInt(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func main() {

	input, err := os.Open("input.txt")
	check(err)

	scanner := bufio.NewScanner(input)

	currentDial := 50
	password := 0
	lineNumber := 0

	for scanner.Scan() {
		line := string(scanner.Text())

		rightOrLeft := string(line[0])
		distance, err := strconv.Atoi(line[1:])
		check(err)

		if rightOrLeft == "L" {

			for value := range distance {
				currentDial = currentDial - int(value)

				if currentDial == -1 {
					currentDial = 99
				}
			}
		} else {
			for value := range distance {
				currentDial = currentDial + int(value)

				if currentDial > 100 {
					currentDial = currentDial - 100
				}
			}
		}

		if currentDial == 0 {
			password++
		}

		if currentDial > 100 {

			println("\n\n----------------------")
			println("current dial: " + strconv.Itoa(currentDial))
			println("distance: " + strconv.Itoa(distance))
			println("rightOrLeft: " + rightOrLeft)
			println("line: " + line)
			println("line number: " + strconv.Itoa(lineNumber))
			println("----------------------\n\n")

			os.Exit(1)
		}

		println("current dial: " + strconv.Itoa(currentDial))

		lineNumber++
	}

	println("password: " + strconv.Itoa(password))
	print("")

	input.Close()
}
