import WordleGuess from "./WordleGuess";

class WordleBoard{
    board: string[][];
    
    cellColor: string[][];
    keyColors: {[key: string] : string};
    
    answer: WordleGuess;
    currentRow: number;
    currentCol: number;

    constructor(word: string){
        this.answer = new WordleGuess(word);

        this.board = Array.from({length: 6}, () => Array(word.length).fill(""));

        this.cellColor = Array.from({length: 6}, () => Array(word.length).fill("white"));
        this.keyColors = {};

        this.currentRow = 0;
        this.currentCol = 0;

        for (let i = 0; i < word.length; i++){
            if([" ", "-", "'", "."].includes(word[i])){
                for(let j = 0; j < 6; j++){
                    this.board[j][i] = word[i];
                    this.cellColor[j][i] = "special";
                }
            }
        }
    }

    addLetter(letter: string){
        while (this.currentCol < this.answer.word.length && [" ", "-", "'", "."].includes(this.answer.word[this.currentCol])){
            this.currentCol++;
        }

        if(this.currentCol < this.answer.word.length){
            this.board[this.currentRow][this.currentCol] = letter;
            this.currentCol++;
        }
    }

    removeLetter(){
        // abcde'f
        // abc'
        // ab__
        

        if(this.currentCol > 0){
            // let hasSpecial = false;

            while(this.currentCol > 0 && [" ", "-", "'", "."].includes(this.answer.word[this.currentCol-1])){
                this.currentCol--;
                // hasSpecial = true;
            }

            // if(!hasSpecial)
                this.currentCol--;
            this.board[this.currentRow][this.currentCol] = "";
        }
    }

    submitWord(){
        if(this.currentCol == this.answer.word.length){
            //The guess of the user
            const guess = new WordleGuess(this.board[this.currentRow].join(""));

            
            for(const letter in this.answer.positions){
                if(letter in guess.positions){
                    let yellowBoxes = this.answer.positions[letter].length;
                    
                    for(let i = 0; i < this.answer.positions[letter].length; i++){
                        let indexAnswer = this.answer.positions[letter][i];

                        if(guess.positions[letter].includes(indexAnswer)){
                            let indexGuess = guess.positions[letter].indexOf(indexAnswer);

                            this.cellColor[this.currentRow][indexAnswer] = "green";
                            this.keyColors[letter] = "green";
                            
                            guess.positions[letter].splice(indexGuess, 1);
                            yellowBoxes--;
                        }
                    }

                    for(let i = 0; i < guess.positions[letter].length; i++){
                        let indexGuess = guess.positions[letter][i];
                        if(yellowBoxes > 0){
                            yellowBoxes--;

                            this.cellColor[this.currentRow][indexGuess] = "yellow";
                            if(this.keyColors[letter] != "green")
                                this.keyColors[letter] = "yellow";
                        }
                        else{
                            this.cellColor[this.currentRow][indexGuess] = "grey"
                            if(this.keyColors[letter] != "green" && this.keyColors[letter] != "yellow")
                                this.keyColors[letter] = "grey";
                        }
                    }
                }
            }

            for(const letter in guess.positions){
                if(!(letter in this.answer.positions)){
                    
                    for(let i = 0; i < guess.positions[letter].length; i++){
                        let indexGuess = guess.positions[letter][i];

                        this.cellColor[this.currentRow][indexGuess] = "grey"
                        if(this.keyColors[letter] != "green" && this.keyColors[letter] != "yellow")
                            this.keyColors[letter] = "grey";
                    }
                }
            }
            
            this.currentRow++;
            this.currentCol = 0;
        }
    }
}


export default WordleBoard;
