// async makes a function return Promise.
// await pauses the function execution until the Promise is resolved or rejected.

// async function myFunction() {
//     try{
//         const res = await someAsyncTask()
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
// }

//Scenario

async function fetchUserData() {
    console.log('Fetching Data...');
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log('Name:', data.name, ' ','Username:', data.username);
    } catch(error) {
        console.log('Error fetching data', error);
    } finally {
        console.log('Thank you!!');
    }
}
fetchUserData();

//Implement another scenario using JSON placeholder

async function fetchComments() {
    console.log('Fetching Data');
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await res.json();
        console.log('Title: ', data.title,'\n','Body: ', data.body);
    } catch(error) {
        console.log('Error Fetching Data', error);
    } finally {
        console.log('Thank you!!');
    }
}
fetchComments();