import random
from words import words
import string


def get_valid_word(words):
    word = random.choice(words)
    while '-' in word or ' ' in word:
        word = random.choice(words)
    return word.upper()


def hangman():
    word = get_valid_word(words)
    word_letters = set(word)
    alphabet = set(string.ascii_uppercase)
    used_letters = set()

    while len(word_letters) > 0:
        print('You have used the following letters:', ' ' .join(used_letters))
        word_list = [
            letter if letter in used_letters else '-' for letter in word]
        print('The word now looks like this:', ' '.join(word_list))
        user_letter = input("Enter a letter: ").upper()
        if user_letter in alphabet - used_letters:
            used_letters.add(user_letter)
            if user_letter in word_letters:
                word_letters.remove(user_letter)
                print('')

        elif user_letter in used_letters:
            print("You already used that letter")

        else:
            print("That letter is not in the alphabet")


hangman()
