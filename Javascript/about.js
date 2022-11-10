function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}


//here is where the phrases are put
const phrases = ["coding","playing the piano","pragramming","music","designing","drawing","cycling"]

const el = document.getElementById("typewriter") 

let sleepTime = 100;
let curPhraseIndex = 0;

const writeloop = async () =>{
    while(true){
        let curWord = phrases[curPhraseIndex];
        for (let i = 0; i < curWord.length; i++){
            el.innerText = curWord.substring(0,i+1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime*15);

        for(let i = curWord.length;i < 0;i-1){
            el.innerText = curWord.substring(0,i - 1);
            await sleep(sleepTime);
        }

        await sleep(sleepTime*5);

        if (curPhraseIndex === phrases.length -1 ) {
            curPhraseIndex = 0;
        } else {
            curPhraseIndex++;
        }
    }
};

writeloop();