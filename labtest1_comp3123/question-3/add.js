const fs = require("fs");

const createFile = function(path){
    try{
        if(!fs.existsSync(path+"/log")){
            fs.mkdirSync(path+"/log");
            
        }
        for(let i = 0; i < 10; i++){
            fs.writeFile(path+`/log/log${i}.txt`,'Hello World',(err)=>{
                if (err) throw err;
                console.log(`log${i}.txt`)
            })
        }
    }catch (e){
        console.error(e);
    }
}
createFile(__dirname);