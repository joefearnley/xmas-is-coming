
input = open('input.txt', 'r')

reports = input.readlines()

for report in reports:
    levels = report.split('   ')

    print(levels)