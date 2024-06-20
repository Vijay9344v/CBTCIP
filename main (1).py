import random

def generate_secret_code(length):
    return [random.randint(1, 6) for _ in range(length)]

def evaluate_guess(secret_code, guess):
    correct_position = 0
    correct_digit = 0
    secret_code_copy = secret_code[:]
    guess_copy = guess[:]

    for i in range(len(secret_code)):
        if secret_code_copy[i] == guess_copy[i]:
            correct_position += 1
            secret_code_copy[i] = None
            guess_copy[i] = None

    for i in range(len(secret_code)):
        if guess_copy[i] is not None and guess_copy[i] in secret_code_copy:
            correct_digit += 1
            secret_code_copy[secret_code_copy.index(guess_copy[i])] = None

    return correct_position, correct_digit

def play_mastermind():
    print("Welcome to Mastermind!")
    print("Try to guess the 4-digit code. The digits range from 1 to 6.")

    secret_code = generate_secret_code(4)
    num_turns = 0
    max_turns = 10

    while num_turns < max_turns:
        guess = []

        while len(guess) != 4:
            guess = input(f"Guess the 4-digit code (you have {max_turns - num_turns} turns left): ").strip()
            if len(guess) != 4 or not guess.isdigit():
                print("Please enter exactly 4 digits.")
                guess = []
            else:
                guess = [int(digit) for digit in guess]

        num_turns += 1

        correct_position, correct_digit = evaluate_guess(secret_code, guess)

        print(f"Result: {correct_position} digits in correct position, {correct_digit} correct digits in wrong position.")

        if correct_position == 4:
            print("Congratulations! You guessed the correct code.")
            break
    else:
        print(f"Game over! The secret code was: {secret_code}")

if __name__ == "__main__":
    play_mastermind()