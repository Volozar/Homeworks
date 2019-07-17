//=====ЗАДАЧА НА ПАЛИНДРОМ=======
function isPalindrom() {
    text.split('').reverse().join('') == text ?
        document.write("Это палиндром") :
        document.write("Это не палиндром");
}

// var text = prompt("Напишите слово");
// isPalindrom(text);


//=====ЗАДАЧА НА АРХИВ========

arrTask2 = ["a", "a", "a", 'b', "b", "c", "c", "c", "a", "a", "d"];
let arrArchive = [];
let b = 1;
let a = 0;

for(let i = 0; i < arrTask2.length; i++) {
    if(arrTask2[i] === arrTask2[i + 1]){
        b++;        
    } else {
        arrArchive[a] = [arrTask2[i], b];
        a++;
        b = 1;
    }
    
        
}

console.log(arrArchive);
