// 1. Deposit some money
// 2. Deteermine number of lines to bet on 
// 3. Collect a bet amount 
// 4. Spin the slot machine
// 5. Check if the user won 
// 6. Give the user thier winnings
// 7. Play again 

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const symbol_count = {
    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8 
}

const symbol_values = {
    "A" : 5,
    "B" : 4,
    "C" : 3,
    "D" : 2
}


const deposit = () => {

    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        }else {
            return numberDepositAmount;
        }
    }
};


const getNumberofLines = () => {

    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberofLines = parseInt(lines);

        if (isNaN(numberofLines) || numberofLines <= 0 || numberofLines > 3) {
            console.log("Invalid number of lines, try again.");
        }else {
            return numberofLines;
        }
    }
};


const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseInt(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.");
        }else {
            return numberBet;
        }
    }
};

const Spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(symbol_count)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }

    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
            const reelSymbols = [...symbols]; 
                for (let j = 0; j < ROWS; j++) {
                    const randomIndex = Math.floor(Math.random() * reelSymbols.length);
                    const selectedSymbol = reelSymbols[randomIndex];
                    reels[i].push(selectedSymbol);
                    reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels
};

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for(let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
}

const printRows = (rows) => {
    for (const row of rows) {
        let rowString = "";
        for (const [i, symbol] of rows.entries()) {
            rowString += symbol
            if (i != rows.length - 1) {
                rowString += " | "
            }  
        }
        console.log(rowString)
    }
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            }
        }

        if (allSame) {
            winnings += bet * symbol_values[symbols[0]];
        }
    }
    return winnings;
};

const game = () => {
    let balance = deposit();

    while (true) {
        console.log("You have a balance of $" + balance)
        const numberofLines = getNumberofLines();
        const bet = getBet(balance, numberofLines);
        balance -= bet * numberofLines; 
        const reels = Spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberofLines);
        balance += winnings;
        console.log("You Won, $" + winnings.toString());

        if (balance <= 0) {
            console.log("you ran out of money!")
            break;
        }

        const playAgain = prompt("Do you want to play again (y/n)?");

        if (playAgain != "y") break;
    }
};

game();