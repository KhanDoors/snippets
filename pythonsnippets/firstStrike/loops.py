# https://www.youtube.com/watch?v=t8pPdKYpowI
from helper import validate_days
import os

print(os.name)


user_input = ''
while user_input != "quit":
    user_input = input("Enter a number of days and unit: ")
    num_of_days_elem = user_input.split(":")
    print(num_of_days_elem)
    days_and_unit_dict = {
        "days": num_of_days_elem[0], "units": num_of_days_elem[1]}
    print(days_and_unit_dict)
    validate_days(days_and_unit_dict)
