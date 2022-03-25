

def days_to_units(days, conversion_unit):
    if conversion_unit == "hours":
        return f"this is getting some {days * 24} hours"
    elif conversion_unit == "minutes":
        return f"this is getting some {days * 24 * 60} hours"
    else:
        return "unsupported unit"


def validate_days(days_and_unit_dict):
    try:
        user_input_num = int(days_and_unit_dict["days"])
        if user_input_num > 0:
            calc_days = days_to_units(
                user_input_num, days_and_unit_dict["units"])
            print(calc_days)
        elif user_input_num == 0:
            print(f"this is getting some 0")
        else:
            print("please enter a positive number")
    except ValueError:
        print("Please enter a number")
