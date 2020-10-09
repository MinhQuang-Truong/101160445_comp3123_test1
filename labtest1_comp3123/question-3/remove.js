const fs = require("fs");

const deleteFile = function(path){
    try{
        if(fs.existsSync(path+"/log")){
            for(let i = 0; i < 10; i++){
                fs.unlink(path+`/log/log${i}.txt`,(err)=>{
                    if (err) throw err;
                    console.log(`log${i}.txt deleted`);
                })
            }
        }
    }catch (e){
        console.error(e);
    }
}
deleteFile(__dirname);