
input = open('input.txt', 'r')
location_id_pairs = input.readlines()
left_list = []
right_list = []
total = 0

for location_id_pair in location_id_pairs:
    location_ids = location_id_pair.split('   ')
    left_list.append(int(location_ids[0]))
    right_list.append(int(location_ids[1]))

for left_list_location_id in left_list:
    times_appears = 0
    for right_list_location_id in right_list:
        if left_list_location_id == right_list_location_id:
            times_appears = times_appears + 1

    total = total + (left_list_location_id * times_appears)

print(total)