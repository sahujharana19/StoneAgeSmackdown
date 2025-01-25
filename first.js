// console.log(" welcome to Jharana's first js!");
// fullname="Tony Startk"
// age = 23;
// price = 180.50;
// console.log(price);

// let age = 24;

// const product = {
//     name: "Apple",
//     rating: 4,
//     price:280,
//     offer: 5
// };

//Arithmetic Operator
// let a = 6;
// let b = 4;
// console.log("a=",a,"b=",b);
// console.log("a+b=",a+b);
// console.log("a-b=",a-b); 
// console.log("a*b=",a*b);
// console.log("a/b=",a/b);
// console.log("a%b=",a%b);
// console.log("a**b=",a**b);
//Unary operator
// let a = 6;
// let b = 4;
// console.log("a=",a,"b=",b);
// console.log("a=",a++); //6
// console.log("a=",a); //7

//Condition Statement
// let age = 13;
// if(age>18){ 
//     console.log("You are eligible");
// } else{
//     console.log("not eligible");
// }
// let mode = "grey";
// let color;
// if(mode === "dark"){
//     color = "black";
// }else if(mode === "blue"){
//     color="blue";
// }else if(mode === "pink"){
//     color="pink";
// }else {
//     color="White";
// }
// console.log(color); 

// alert("Hello World!"); // one time popup
// let name = prompt("Hello");
// console.log(name);

// let num= prompt("enter a number")
// if(num % 5 === 0){
//     console.log(num,"is a multiple of 5");

// } else{
//     console.log(num,"is not multiple of 5");
// }

// let score = 75;
// let grade;
// if(score >= 90 && score <= 100){
//     grade ="A";
// } else if(score >= 70 && score <= 89){
//     grade="B";
// } else if(score >= 60 && score <= 69){
//     grade="C"; 
// } else if(score >= 50 && score <= 59){
//     grade="D";
// } else if(score >= 0 && score <= 49){
//     grade="F";
// }
// console.log("According to your mark, your grade is:",grade);

//Loops
// for (let count=1; count<=3; count++){
//     console.log("web developer");
// }
// console.log("stop or ended");
// let sum=0;
// let n=7;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log("sum=",sum);
// console.log("loop stop");

//for-of loop
// let str = "JavaScript";
// let size = 0;
// for(let i of str){
//     console.log("i=", i);
//     size++;
// }
// console.log("string size =",size);

// for(let num=0;num <= 50; num++){
//     if(num % 2== 0){
//         console.log("num=", num);
//     }
// }

// let gameNum = 19;
// let userNum = prompt("Guess the number:");
// while(userNum != gameNum){  
//     userNum = prompt("You entered wrong number,guess again:");
// }
// console.log("congratulations,it's right number");

// let fullname = prompt("enter your fullname without spaces");
// let username= "@" + fullname + fullname.length;
// console.log(username);

// Arrays
// strings are immutable but array are mutable
// let cartoons=["Tom","Jerry","Draemon","Oggy","Nobita"];
// for(let indx=0;indx<cartoons.length;indx++){
//     console.log(cartoons[indx]);
// }

// let marks=[95,86,75,35,61];
// let sum=0;
// for (let val of marks){
//     sum += val;
// }
// let avg= sum / marks.length;
// console.log("avg marks of the class=",avg);

// let items=[280,650,480,873,520];
// let i = 0;
// for(let val of items){
//     console.log("value at index=",val);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log("value after offer=",items[i]);
//     i++;
// }

// let fooditems=["Kurkure","Litchi","Mango","Apple"];
// fooditems.push("Chips","Banana");
// console.log(fooditems);

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// companies.splice(2,1, "Ola");
// companies.push("Amazon");

//Function
// function myfunction(){
//     console.log("Welcome to Jharana's JS page!");
//     console.log("And i am learning JS!");
// }
// myfunction();

// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("I love JS");

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if( char==="a" || char==="e" || char==="i" || char==="o" || char==="u" ) {
//             count++;
//         }
// }
// console.log(count);
// }

// let nums=[2,3,4,5,6];
// nums.forEach((num) => {
//     console.log(num * num);
// });

// Array Method
// let nums = [67,85,93];
// let newArr = nums.map((val) => {
//     return val * 2;
// });
// console.log(newArr);
// let calcSquare = (num) => {
//     console.log(num*num);
// };

// let marks=[97,84,92,67,54,96,53];
// let toppers = marks.filter((val) =>{
//     return val>90;
// });
// // let toppers: number[]
// console.log(toppers);

// let n = prompt("Enter a number:");
// let arr=[];
// for(let i = 1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum = arr.reduce((res,curr) =>{
//     return res+curr;
// });
// console.log("sum=",sum);
// let factorial = arr.reduce((res,curr)=>{
//     return res*curr;
// });

//DOM document----

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "adding some random text";

// let divs = document.querySelectorAll(".box");
// console.log(divs);
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click me!";
// newBtn.style.color = "White";
// newBtn.style.backgroundColor = "Purple";
// document.querySelector("body").prepend(newBtn);
// //Q2
// let para=document.querrySelector("p");

// let modeBtn = document.querySelector("#mode");
// let currMode = "light"; 
// modeBtn.addEventListener("click",() => {
//     if(currMode == "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor ="purple";
//     } else{
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor ="Yellow";

//     }
//     console.log("currMode");
// });

//Game (Rock Paper Sizer)

let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const genCompChoice = () =>{
     const options = ["rock","paper","scissor"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
};
const drawGame =() =>{
    // console.log("Game was Draw");
    msg.innerText="oops it's draw match!! Play Again";
    msg.style.backgroundColor = "#081b31";
};
    const showWinner = (userWin,userchoice,compchoice) =>{
         if(userWin){
            userscore++;
            userscorePara.innerText = userscore;
            // console.log("Yee You win!");
            msg.innerText="Yee You win!"; 
            msg.style.backgroundColor = "Green";
         } else{
            compscore++;
            compscorepara.innerText = compscore;
            // console.log("Oops You loose!");
            msg.innerText="Oops You loose!"; 
            msg.style.backgroundColor = "Red";
        }
         
    }

const playGame = (userchoice) => {
    console.log("user choice =",userchoice);
    const CompChoice =genCompChoice();
    console.log("computer choice =",CompChoice);

    if(userchoice === CompChoice){
        //Draw Game
        drawGame();
    } else{
        let userWin = true;
        if(userchoice ==="rock"){
        userWin = CompChoice ==="paper"? false : true;
        } else if(userchoice === "paper"){
          userWin = CompChoice ==="scissor"? false:true;   
        } else{
          userWin = CompChoice ==="rock"? false : true;
        }
        showWinner(userWin,userchoice,CompChoice);
    }
};
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});