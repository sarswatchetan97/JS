//Promises in JS

//Syntax
// const myPromise = new Promise((resolve, reject) => {
//     if(true){
//         resolve('')
//     }else{
//         reject('')
//     }
// })
// myPromise.then((result)=> {
//     console.log(result)
// }).catch(()=> {

// }).finally(()=> {

// })

//Example or Scenario:

// function orderFood(isRestaurantOpen) {
//     return new Promise((resolve, reject)=>{
//         console.log("Placing Order...")
//         setTimeout(()=>{
//             if(isRestaurantOpen) {
//                 resolve("Order Received");
//             } else {
//                 reject("Restaurant is closed");
//             }
//         }, 2000)
//     })
// }
// orderFood(false).then((res)=>{
//     console.log(res);
//     return "Preparing Food...";
// }).then((res)=>{
//     console.log(res);
//     return "Out for Delivery...";
// }).then((res)=>{
//     console.log(res);
// }).catch((error)=>{
//     console.log("Error", error);
// }).finally(()=>{
//     console.log("Thank you for using the app");
// })


// //fetch function underline uses promise and to get data from API, fetch is used

// fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log('Error', error);
// });

//Promise.all() is a method that takes an array of promises and returns a new Promise that resolves when all of them are resolved, or rejects if any one fails

const fetchUser1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json());
const fetchUser2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(res => res.json());
const fetchUser3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(res => res.json());

Promise.all([fetchUser1, fetchUser2, fetchUser3]).then((users) => {
    console.log('All Users Loaded!!!');
    users.forEach(user => console.log(user.name, user.email));
}).catch((error) => {
    console.log(error);
});