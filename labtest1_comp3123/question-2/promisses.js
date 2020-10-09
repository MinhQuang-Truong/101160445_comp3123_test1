const resolvedPromise  = new Promise((resolve, reject) => {
    setTimeout( function() {
        let success = {'message':'delayed success!'};
        resolve(console.log(success));
    }, 500) 
}) 
const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout( function() {
        try{
            throw new Error('error: delayed exception');
        }catch (e){
            reject(console.error(e));
        }
    }, 500) 
}) 