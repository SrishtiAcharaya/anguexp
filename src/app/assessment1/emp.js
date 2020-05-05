const https = require('https');
const express= require('express');
function fetch (url) {
    return new Promise((resolve,reject)=>{
        https.get(url,(res) =>{
            let data = '';
            res.on('data',(rd)=> data=data + rd);
            res.on('end',() => resolve(data));
            res.on('error',reject);

        });
    });
}

const server = express();
server.get('/',(req,res)=>{
    fetch('https://dummy.restapiexample.com/api/v1/employees')
    .then(result => {
        let html = '';
        
         for(let i=0;i<JSON.parse(result).data.length;i++){
            html += JSON.parse(result).data[i].employee_name + '     ' + JSON.parse(result).data[i].employee_salary + '     ' + JSON.parse(result).data[i].employee_age +'<br>'; 
         }
         res.send(html);
    });
    
});
server.listen(3000, () => {
    console.log('server is running...');
});