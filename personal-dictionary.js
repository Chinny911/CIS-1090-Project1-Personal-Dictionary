//declare an empty array named words
let words = [];

//define functions addWord and search
//using newWord as the single parameter
function addWord(newWord){
    words.push(newWord);
}

function search(newWord){
    if (words.includes(newWord)){
        return true;
    }
    else {
        return false;
    }
}



export {addWord, search}
