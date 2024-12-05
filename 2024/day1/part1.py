
input = open('input.txt', 'r')
location_id_pairs = input.readlines()
left_list = []
right_list = []
total = 0

for pair in location_id_pairs:
    location_ids = pair.split('   ')
    left_list.append(int(location_ids[0]))
    right_list.append(int(location_ids[1]))

left_list.sort()
right_list.sort()

for index in range(len(location_id_pairs)):
    difference = abs(left_list[index] - right_list[index])
    total = total + difference

print(total)
