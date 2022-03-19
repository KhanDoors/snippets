import random


# 1. I didn't undersatand what random.randint did. it is a number between a, b. read the documentation
# 2. indentation is important.


# we guess the computers randon number
def guess(x):
    random_num = random.randint(1, x)
    guess = 0
    while guess != random_num:
        guess = int(input(f"Guess a number between 1 and {x}: "))
        if guess < random_num:
            print("Too low!")
        elif guess > random_num:
            print("Too high!")

    print("You guessed it!")


guess(10)

# the computer guesses our number


def computer_guess(x):
    low = 1
    high = x
    feedback = ""
    while feedback != "c":
        if low != high:
            guess = random.randint(low, high)
        else:
            guess = low
        feedback = input(
            f"Is your number {guess}? (h)igher, (l)ower, (c)orrect: ")
        if feedback == "h":
            low = guess + 1
        elif feedback == "l":
            high = guess - 1
        elif feedback == "c":
            print("I guessed it!")
        else:
            print("Invalid input!")


computer_guess(10)
