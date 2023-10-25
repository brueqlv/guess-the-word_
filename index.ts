const prompts = require('prompts');

(async () => {
    const words: string[] = [
        'code',
        'coding',
        'programming',
        'typescript'
    ];
    const word: string =  words[(Math.random() * words.length) | 0];
    const wordParts: string[] = word.split("");
    let targetWord: string[] = '_'.repeat(word.length).split('');
    let guesses: number = 0;
    const maxGuesses: number = word.length + 3;

    console.log(targetWord.join(" "));
    while(guesses < maxGuesses)
    {
        const response = await prompts({
            type: 'text',
            name: 'letter',
            message: 'Enter letter:'
        });

        let letterPosition = wordParts.indexOf(response.letter);

        if (letterPosition > -1){
            targetWord[letterPosition] = response.letter;
            wordParts[letterPosition] = '-';

            if(word == targetWord.join("")){
                console.log("Correct! The word was: " + word);
                console.log(targetWord.join(" "));

                break;
            } 
        }
        console.log(targetWord.join(" "));
        guesses++;
    }

    if(word != targetWord.join("")){
        console.log("Wrong! The word was: " + word);
    }
})();