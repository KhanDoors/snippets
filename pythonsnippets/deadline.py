import datetime

user_input = input("Enter your goal dealine seperated by :")
input_list = user_input.split(":")


goal = input_list[0]
deadline = input_list[1]
deadline_date = datetime.datetime.strptime(deadline, "%d.%m.%Y")
today_date = datetime.datetime.today()

date_diff = deadline_date - today_date
print(f"time remaining to your goal is: {date_diff.days} days")
