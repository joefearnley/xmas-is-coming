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

func main() {

	input, err := os.Open("input")
	check(err)

	scanner := bufio.NewScanner(input)

	currentDial := 50
	password := 0

	for scanner.Scan() {
		line := scanner.Text()

		// split line into array of strings
		// check if first character is an "R or L"
		rightOrLeft := line[0]
		distance, err := strconv.Atoi(line[1:])
		check(err)

		if rightOrLeft == 'L' {
			difference := currentDial - distance

			if difference < 0 {
				dial = 99 - difference
			} else {
				dial = dial + clicks
			}
		} else {
			difference := dial + clicks

			if difference < 0 {
				dial = 99 - difference
			} else {
				dial = dial + clicks
			}
		}

		if dial == 0 {
			password++
		}
	}
}
