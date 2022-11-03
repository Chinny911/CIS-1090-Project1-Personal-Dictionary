//declare an array named words
let personalDict = [];

//define functions addWord and search

function addWord(newWord){
    personalDict.push(newWord);
}

function search(newWord){
    if (personalDict.includes(newWord)){
        return true;
    }
    else {
        return false;
    }
}



export {search, addWord}
