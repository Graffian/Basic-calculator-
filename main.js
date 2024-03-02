let firstBtnEl=document.getElementById("div1")
let secondBtnEl=document.getElementById("div2")
let thirdBtnEl=document.getElementById("div3")
let fourthBtnEl=document.getElementById("div4")
let fifthBtnEl=document.getElementById("div5")
let sixthBtnEl=document.getElementById("div6")
let seventhBtnEl=document.getElementById("div7")
let eigthBtnEl=document.getElementById("div8")
let ninthBtnEl=document.getElementById("div9")
let zeroethBtnEl=document.querySelector("#div0")
let userEntryEl=document.querySelector("#userEntry")
let entry=[]
function firstBtn(){
  entry.push("1")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
  }
}
function secondBtn(){
  entry.push("2")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
  }
}
function thirdBtn(){
  entry.push("3")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
}
}
function fourthBtn(){
  entry.push("4")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
}
}
function fifthBtn(){
  entry.push("5")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
}
}
function sixthBtn(){
  entry.push("6")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
}
}
function seventhBtn(){
  entry.push("7")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
}
}
function eigthBtn(){
  entry.push("8")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
}
}
function ninthBtn(){
  entry.push("9")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
}
}
function zeroethBtn(){
  entry.push("0")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
}
}
function additionBtn(){
  entry.push("+")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
}
}
function subtractionBtn(){
  entry.push("-")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
}
}
function multiplicationBtn(){
  entry.push("×")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
}
}
function divisionBtn(){
  entry.push("÷")
  userEntryEl.innerHTML=""
  for(let i=0;i<entry.length;i++){
    userEntryEl.innerHTML+=entry[i]
}
}
function clearBtn(){
  userEntryEl.innerHTML=""
  while (entry.length > 0) {
  entry.pop();
}
}
function equalBtn(){
  if (entry.includes('+')) {
  let operatorIndex = entry.indexOf('+');
  let firstArray = entry.slice(0, operatorIndex).join('');
  let secondArray = entry.slice(operatorIndex + 1).join('');
  let addition= parseInt(firstArray) + parseInt(secondArray)
  userEntryEl.innerHTML=addition
  while (entry.length > 0) {
  entry.pop();
}
entry.push(addition)
  }else if(entry.includes("-")){
    let operatorIndex = entry.indexOf('-');
  let firstArray = entry.slice(0, operatorIndex).join('');
  let secondArray = entry.slice(operatorIndex + 1).join('');
  let subtraction= parseInt(firstArray) - parseInt(secondArray)
  userEntryEl.innerHTML=subtraction
  while (entry.length > 0) {
  entry.pop();
}
entry.push(subtraction)
  }else if(entry.includes('×')){
    let operatorIndex = entry.indexOf('×');
  let firstArray = entry.slice(0, operatorIndex).join('');
  let secondArray = entry.slice(operatorIndex + 1).join('');
  let multiplication = parseInt(firstArray) * parseInt(secondArray)
  userEntryEl.innerHTML=multiplication 
  while (entry.length > 0) {
  entry.pop();
}
entry.push(multiplication)
  }else if(entry.includes('÷')){
    let operatorIndex = entry.indexOf('÷');
  let firstArray = entry.slice(0, operatorIndex).join('');
  let secondArray = entry.slice(operatorIndex + 1).join('');
  let division= parseInt(firstArray) / parseInt(secondArray)
  userEntryEl.innerHTML=division
  while (entry.length > 0) {
  entry.pop();
}
entry.push(division)
  }else{
    userEntryEl.innerHTML="enter a operand"
  }
}