// async makes a function return Promise.
// await pauses the function execution until the Promise is resolved or rejected.

async function myFunction() {
    try{
        const res = await someAsyncTask()
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}