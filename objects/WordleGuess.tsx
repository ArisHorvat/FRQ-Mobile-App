

export default class WordleGuess{
    word: string;
    positions: { [character: string]: number[]};


    constructor(word: string){
        this.word = word;
        this.positions = {};

        for(let i = 0; i < word.length; i++){
            const currentChar = word[i];

            if(![" ", "-", "'", "."].includes(currentChar)){
                if(this.positions[currentChar]){
                    this.positions[currentChar].push(i);
                }
                else{
                    this.positions[currentChar] = [i];
                }
            }
        }
    }
}
