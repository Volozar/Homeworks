//=====ЗАДАЧА НА ПАЛИНДРОМ=======
function isPalindrom(a) {
        a.split('').reverse().join('') == a ?
        document.writeln("Это палиндром") :
        document.writeln("Это не палиндром");
    
}

var text = prompt("Напишите слово");

/* let text = document.getElementById("polindrom").value;
console.log(typeof(text));
console.log(text);
document.writeln(text); */
isPalindrom(text);


//=====ЗАДАЧА НА АРХИВ========

arrTask2 = ["a", "a", "a", 'b', "b", "c", "c", "c", "a", "a", "d"];
let arrArchive = [];
let count = 1;
let indexArchive = 0;

for(let i = 0; i < arrTask2.length; i++) {
    if(arrTask2[i] === arrTask2[i + 1]){
        count++;        
    } else {
        arrArchive[indexArchive] = [arrTask2[i], count];
        indexArchive++;
        count = 1;
    }
}
console.log(arrArchive);
