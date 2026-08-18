// // // console.log("Hell0");

// // const sum = function(a,b){
// //     // return (a**(1/2))+(b**(1/2));
// //     return Math.sqrt(a)+Math.sqrt(b);
// // }
// // console.log(sum(4,9))

// // const sum =(a,b)=>{return a+b}
// // console.log(sum(1111,889))

// //  IIFE immediate invoke fcuntion as exp
// // (()=>{
// //     console.log("hiiiii")
// // })();

// // let a=23;
// // if(a>20){
// //     let a=40
// //     console.log("value inside the block "+a)
// // }
// // console.log(a)

// // call back function

// // function sum(a,b){
// //     return a+b;
// // }

// // function msgwithsum(clbk, msg){
// //     const result = clbk(40,50);
// //     console.log("hiiiiiiiiii "+ msg+" and result "+result)
// // }
// // msgwithsum(sum,"abc");

// function login(error,msg){
//     if(error){
//         console.log("Error is "+error)
//     }
//     else{
//         console.log(msg)
//     }
// }
// function loginhandler(username , pass, clbk){
//     if(username == "drblack001" && pass == "12345"){
//         clbk(null,'login success')
//     }
//     else{
//         clbk("useranme or password incorrect", null)
//     }
// }
// console.log(loginhandler("drblack001", 12345,login))

// // syn funciton
// console.log("Hi");
// console.log("Geek");
// console.log("How are you?");


// //asyn fcuntion
// console.log(1)
// setTimeout(()=>{console.log("2")},0.0000000)
// console.log(3)

console.log("1")
for( i=0;i<1000;i++){
    console.log("i="+i);
}
console.log("3")