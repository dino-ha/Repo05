function main(){

    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";
    var space = " ";
    var wordBlanks = myAdjective + space + myNoun + space + myVerb + space + myAdverb + ".";
    return wordBlanks;


}

console.log(main());
module.exports = main;
