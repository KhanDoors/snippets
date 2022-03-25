import random


def play():
    user = input("'r' for Rock, 'p' for Paper, 's' for Scissors")
    computer = random.choice(['r', 'p', 's'])

    if user == computer:
        return "It\'s a tie!"

    if is_win(user, computer):
        return "You win!"

    return "You lose!"


def is_win(player, opponent):
    if (player == 'r' and opponent == 's') or (player == 'p' and opponent == 'r') or (player == 's' and opponent == 'p'):
        return True


print(play())
