{//////////////////////////////////
///// My Solution //////////
 /*function validAnagram(str1, str2){
    let strArr1 = [...str1];
    let strArr2 = [...str2];
    if(strArr1.length !==strArr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let i of strArr1){
        frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1
    }
    for (let i of strArr2){
        frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1
    }
    
    for (let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            console.log(frequencyCounter1);
            console.log(frequencyCounter2);
            return false
        }
    }   
    
    return true
}
 */

 /////////////////
 ///// Colt Steele's Solution  /////

function validAnagram(first, second) {
    if (first.length !== second.length){
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup);
    
    for (let i = 0; i < second.length; i++) {
        let} letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

validAnagram('', ''); //true
validAnagram('aaz', 'zza'); //false
validAnagram('anagram', 'nagaram'); //true
validAnagram('rat', 'car'); //false
validAnagram('awesome', 'awesom') //false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') //false
validAnagram('qwerty', 'qeywrt') //true
validAnagram('texttwisttime', 'timetwisttext') //true
