
const path=require('path');


const fs=require('fs');

//dirPath contains the path of the directory in which you want to read all the files 
const dirPath=path.join(__dirname); //__dirname gives the path of current directory


//fs.readdir is the function to get the fuile names in a directory
fs.readdir(dirPath,(err,files)=>{
    
    files.forEach((file)=>{
        console.log(file);//It will list all the files present in current directory.
    })
})




