// Deep JavaScript Foundation

/* let v = function(){}
  console.log(typeof v);
  
  let x = null;
  console.log(typeof x);
  
  let y;
  console.log(typeof y);
  
  let a = Number('0o46');
  console.log(a);
  
  let  b = Number('n/2')
  console.log(b);
  
  let c = 0 / 0;
  console.log(isNaN(c));
  console.log(c == NaN);
  console.log(c === NaN);
  // NaN is a special value in javascript that represents a undefines and unpredectibility mathematical operation.
  
  
  console.log(Object.is(NaN, NaN));  
  
  // toString()
  let a = 10;
  let str = a.toString()
  console.log(typeof str);
  
  
  // parseInt()
  let str1 = '100';
  let p = parseInt(str1)
  console.log(p);
  console.log(typeof p);
  
  // Boolean()
  let bool = 10;
  let convert = Boolean(bool)
  console.log(convert); 
  
  // == & ===
  let studen1 = 'suhail';
  let student2 = `${studen1}`
  console.log(studen1 == student2);
  console.log(studen1 === student2); 
  
  let student1 = {
    name: "suhail",
  };
  
  let student2 = {
    name: "suhail",
  };
  
  console.log(student1 == student2);
  console.log(student1 === student2); 
  
  // In JavaScript, objects are compared by reference, not by value. This means that two objects are considered equal only if they point to the same location in memory.
  
  console.log(null === undefined);
  console.log(null == undefined); // because the == operator performs type coercion to convert null to undefined before comparing them.


  // "use strict " It is used to catch the coomon mistakes in code

 "use strict";
 function myFunction(){
  x = 10
 }
 console.log(myFunction());  


 // IIFE

 (function (){
  let msg = 'hey suhail'
  console.log(msg);
 })();
 console.log(msg); 

 // Module pattern

 let myModule = (function(){
  let PrivateVariable = 'I am on private mission ';
  
  function privateFunction(){
    console.log(PrivateVariable);
  }

  return {
    publicMethod: function(){
      privateFunction()
    },
    publicVariable: 'I am public'
  }
 })();

 console.log(myModule.publicVariable);
 console.log(myModule.publicMethod());
 console.log(PrivateVariable); 

 // this keyword

 let person = {
  name: 'suhail',
  
  greet : function(){
    let innerFunc = () => {
      console.log(this.name);
    }
    innerFunc();
  }

 }

 console.log(person.greet()); 

 let person = {
  name: 'suhail',
  age: 22,

  greet: function(){
    console.log(this.age);
  }
 }
 console.log(person.greet()); 

 // call 

 function greet(greeting){
  console.log(greeting + ' ,' +  this.name);
 }

 let person = {
  name: 'suhail'
 };
 
 console.log(greet.call(person, 'hello')); 

 function person(name, age){
  this.name = name;
  this.age = age;
 }

 const a = new person('suhail', 22)
 console.log(a.name);
 console.log(a.age); */

                                /*     // Important questions

// reverse a string without inbuilt method
function reversedString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reversedString("suhail"));

// reverse a string with inbuilt method
function reversedString(str) {
  return str.split("").reverse().join("");
}
console.log(reversedString("hello"));  

// Check string pallindrome or not
function checkPallindrome(str){
  let reversed = '';
 let  processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  for(let i = processedStr.length - 1; i >= 0; i--){
    reversed += processedStr[i]
  }
  if(processedStr === reversed){
    return true
  }else{
    return false
  }
}

console.log(checkPallindrome("a man, a plan, a canal, Panama"));
console.log(checkPallindrome("race a car"));  

// find a longest word in string

function findLongestWord(str){
  let words = str.split(' ');
  let longestWord = '';

  for(let word of words){
    if(longestWord.length < word.length){
      longestWord = word
    }
  }
  return longestWord
}
console.log(findLongestWord('i am suhail ahmedquazi')); 

// using reduce method
function longestwordStr(str){
  return str.split(' ').reduce((current, longest) => current.length > longest.length ? current : longest, '');
}
console.log(longestwordStr('i am suhail')); 

// find min and max and their sum from array
function minMax(arr){
  let min = arr[0]
  let max = arr[0]
  let sum = 0

  for(let i = 0; i<=arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
    }
    if(arr[i] > max){
      max = arr[i]
    }
  }
  for(let i = min; i<=max; i++){
    sum += i
  }
  return [min, max, sum]
}

console.log(minMax([1,2,3,4,5,6,7,8])); 

function sum(arr){
  const [num1 , num2] = arr.sort((a,b) => a-b);
  let sum = 0;
  for(let i = num1 ; i<= num2; i++){
    sum  += i
  }
  return sum
}

console.log(sum([1,5]));

function factorial(n){
  let fact = 1
  for(let i = 2; i<=n; i++){
    fact *= i
  }
  return fact
}
console.log(factorial(5));


function endingCheck(str, target){
  return str.endsWith(target)
}
console.log(endingCheck('suhail', 'os')); 

function edingCheck(str, target){
  return str.slice(-target.length) === target
}
console.log(edingCheck('suhail', 'il'));  


function table(n){
  let tab = '';
  for(let i = n; i <= n * 10; i+=n){
    tab += `${i} \n`
  }
  return tab
}
console.log(table(5)); 


function repeatStr(str, num){
  if(num <= 0){
    return '';
  }
  let repeat = '';
  for(let i = 1; i<=num; i++){
    repeat += `${str} \n`
  }
  return repeat
}
console.log(repeatStr('suhail', 0)); 


function repeatStr(str, n){
return str.repeat(n)
}
console.log(repeatStr('hello' , 5));  

// check str1 is present in str2 or not
function checkString(str1, str2){
  for(let i = 0; i<= str1.length; i++){
    if(str1[i] === str2){
      return true
    }
  }
    return false
}
console.log(checkString('suhail', 'l')); 


function checkStr(str1, str2){
  return str1.includes(str2)
}
console.log(checkStr('suhail', 'q')); 


function removeFalsyValues(arr){
  return arr.filter(Boolean)
}
console.log(removeFalsyValues([1,false, null, "", 4, 'hello'])); 


const defangIPaddr = function(address) {
  let defangAddress = '';
  for(let i = 0; i <address.length; i++){
    if(address[i] === '.'){
      defangAddress += '[.]'
    }else{
      defangAddress += address[i]
    }
  }
  return defangAddress
}
console.log(defangIPaddr('198.168.1.0'));  

let str = 'suhail bhai ka haal';
 let a = str.split(" ").map((word) => {
   return word.split('').reverse().join('');
})
console.log(a.join(' ')); */




