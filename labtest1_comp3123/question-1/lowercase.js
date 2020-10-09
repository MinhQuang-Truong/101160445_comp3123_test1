const mixedArray = ['PIZZA',10,true,25,false,'Wings'];

function lowerCaseWords(Array) {
    return new Promise((resolve,reject) => {
        try{
            resolve(console.log(mixedArray.filter(element => typeof element === 'string').map(element => element.toLowerCase())));
        }
        catch(err){
            reject(console.error(err));
        }
        
    })
}
lowerCaseWords(mixedArray);