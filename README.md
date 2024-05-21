# Slot Machine Game

A simple slot machine game implemented in JavaScript. This command-line game allows users to deposit money, place bets, spin the reels, and win or lose based on the symbols that appear.

## Features

1. **Deposit Money:** Users can start by depositing money into their balance.
2. **Bet on Lines:** Users can choose to bet on 1 to 3 lines.
3. **Place Bets:** Users specify a bet amount per line.
4. **Spin the Slot Machine:** The game spins the reels and displays the outcome.
5. **Check Winnings:** The game checks if the user has won based on the symbols that appear in the bet lines.
6. **Update Balance:** The game updates the user's balance based on the winnings.
7. **Play Again Option:** Users can choose to play another round as long as they have a positive balance.
## How to Run

1. **Install Node.js**: Make sure you have Node.js installed on your machine. You can download it from [Node.js](https://nodejs.org/).
    
2. **Install `prompt-sync`**:
```
    `npm install prompt-sync`
```
    
3. **Run the Game**:
```
    `node slot-machine.js`
```
## Code Explanation

### Constants

- `ROWS` and `COLS`: Define the dimensions of the slot machine (3x3 grid).
- `symbol_count`: Specifies the number of each type of symbol that appears on the reels.
- `symbol_values`: Specifies the payout value for each symbol.

### Functions

- **`deposit`**: Prompts the user to enter a deposit amount and validates the input.
- **`getNumberofLines`**: Prompts the user to enter the number of lines to bet on and validates the input.
- **`getBet`**: Prompts the user to enter the bet amount per line and validates the input.
- **`Spin`**: Generates the reels with random symbols based on the predefined counts.
- **`transpose`**: Transposes the reels to get rows for easier evaluation of wins.
- **`printRows`**: Prints the rows of the slot machine in a readable format.
- **`getWinnings`**: Calculates the winnings based on the bet and the symbols that appear in the lines.
- **`game`**: The main game loop where all the functions are called in sequence.

### Game Flow

1. **Deposit Money**: The user is prompted to deposit money.
2. **Place Bet**: The user chooses the number of lines to bet on and the bet amount per line.
3. **Spin Reels**: The reels are spun, and the result is displayed.
4. **Check Winnings**: The game checks if the user has won based on the symbols in the rows and updates the balance.
5. **Play Again**: The user is asked if they want to play again as long as they have a positive balance.

## License

This project is licensed under the MIT License - see the LICENSE file for details.