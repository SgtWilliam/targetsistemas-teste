//Insira o valor na string abaixo.
const StringInput = "123456789A";


let result = ""

function reverseString(string){

    const stringsObjects = string.split('');

    for(let i = stringsObjects.length - 1; i >= 0; i--){
        result += stringsObjects[i]
    }
    console.log(result)
}


reverseString(StringInput);