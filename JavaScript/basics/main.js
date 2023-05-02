// var num = 10;
console.time('code took')
var nums = [10,20,30];
let word = "Heyyyy";
let singlequoteword = 'Yo ';
let shiitty = `Shitty righttt`;
let string_arr = ["Word 1", "Word 2", "Word 3"];
var user_name = document.getElementById("name").value;

const button1 = document.querySelector('#button1');
// const button2 = document.querySelector('#button2');
// const button3 = document.querySelector('#button3');




function srh(){
    var printelem = document.getElementById("printelem")
    printelem.innerHTML = "Welcome " + document.getElementById("name").value + ". You are an SRH fan"
    console.log("Welcome "+ user_name +"are an SRH fan!");
    //button1.innerText = "SRH";
}

