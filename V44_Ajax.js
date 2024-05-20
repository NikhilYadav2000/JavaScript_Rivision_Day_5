// AJAX uses XMLHttpRequest object(xhr)
// data can be transferred in JSON, XML, txt format
// transferred in https, http protocols
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", () => {
    console.log("You have clicked fetchBtn");
    // instantiate an xhr object
    const xhr = new XMLHttpRequest();   

    // Open the object
    // xhr.open('GET', 'nikhil.txt',true); // if u do it false then, if the url fetching is taking time user will not see anything so use true
    //{getRequest, Data will be fetched from where, aysnc/sync}
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1',true); // if u do it false then, if the url fetching is taking time user will not see anything so use true

    // POST Request - send data also in post request
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create',true); // if u do it false then, if the url fetching is taking time user will not see anything so use true
    xhr.getResponseHeader("Content-type","application/json");

    // what to do on progress
    xhr.onprogress=()=>{
        console.log("onprogress");
    }
    xhr.onreadystatechange=()=>{
        console.log("ready state is ", xhr.readyState);
    }

    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText);
        }
        else console.error("Some Error"); // as nikhil2.txt doesnt exists
        // else console.log("Some Error");
    }

    // send the data
    // xhr.send();
    params= {"name":"test","salary":"123","age":"23"}
    xhr.send(params);
    console.log("we are done"); // this will come before send as we have done async as true, so the code wont be blocked till the time other comes,
    // as it is aysnc it will run if other calls are taking time
})
/*
You have clicked fetchBtn
V47_Ajax.js:39 we are done
V47_Ajax.js:24 ready state is  2
V47_Ajax.js:24 ready state is  3
V47_Ajax.js:21 onprogress
V47_Ajax.js:24 ready state is  4
V47_Ajax.js:29 {"status":"success","data":{"id":8305},"message":"Successfully! Record has been added."}
*/

let populatebtn=document.getElementById("populatebtn");
populatebtn.addEventListener("click", ()=>{
    console.log("You have clicked populatebtn");
    // instantiate an xhr object
    const xhr = new XMLHttpRequest();   

    // Open the object
    // xhr.open('GET', 'nikhil.txt',true); // if u do it false then, if the url fetching is taking time user will not see anything so use true
    //{getRequest, Data will be fetched from where, aysnc/sync}
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1',true); // if u do it false then, if the url fetching is taking time user will not see anything so use true

    // POST Request - send data also in post request
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees',true); // if u do it false then, if the url fetching is taking time user will not see anything so use true
    xhr.getResponseHeader("Content-type","application/json");

    // what to do on progress
    // xhr.onprogress=()=>{
    //     console.log("onprogress");
    // }
    // xhr.onreadystatechange=()=>{
    //     console.log("ready state is ", xhr.readyState);
    // }

    xhr.onload=function(){
        if(this.status===200){
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let list=document.getElementById("list");
            str="";
            for (key in obj){
                str+=`<li>${obj[key].employee_name}</li>`
            }
            list.innerHTML=str;
        }
        else console.error("Some Error"); // as nikhil2.txt doesnt exists
        // else console.log("Some Error");
    }

    // send the data
    xhr.send();
    console.log("we are done"); // this will come before send as we have done async as true, so the code wont be blocked till the time other comes,
    // as it is aysnc it will run if other calls are taking time
})
/*
{status: 'success', data: Array(24), message: 'Successfully! All records has been fetched.'}
data: (24) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
message: "Successfully! All records has been fetched."status: "success"[[Prototype]]: Object
*/