const https=require('https');

function fetch(url){
    return new Promise((resolve,reject) => {
        https.get(url,(res) => {
            let data='';
            res.on('data',(rd) => data=data+rd);
            res.on('end',() => resolve(data));
            res.on('error',reject);
        });
    });
}

fetch('https://dummy.restapiexample.com/api/v1/employees')
 .then(data => {
     console.log(JSON.parse(data).data[0].employee_name, JSON.parse(data).data[0].employee_salary, JSON.parse(data).data[0].employee_age);
     console.log(JSON.parse(data).data[1].employee_name, JSON.parse(data).data[1].employee_salary, JSON.parse(data).data[1].employee_age);
     console.log(JSON.parse(data).data[2].employee_name, JSON.parse(data).data[2].employee_salary, JSON.parse(data).data[2].employee_age);
 });

 (async function read(){
     const data=await fetch('https://dummy.restapiexample.com/api/v1/employees');
     //console.log(data.data);
 })();