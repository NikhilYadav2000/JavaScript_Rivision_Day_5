var ans = new Promise((res,rej)=>{
    var n=Math.floor(Math.random()*10);
    if(n>5) return res();
    else return rej();
})
ans.then(function(){
    console.log("Resolved");
}).catch(function(){
    console.log("Reject");
})

// function a(){
//     fetch('https://randomuser.me/api/').then(function(raw){
//         return raw.json();
//     }).then(function(data){
//         console.log(data);
//     })
// }
// a();

// alternate for then
async function a(){
    let raw= await fetch('https://randomuser.me/api/') // ye code aane m time lagega so await use kiye, 1 then ko hata diya isn
    let ans=await raw.json(); // abhi upr wali line aayo ni hai toh neeche wala print hojayega ik liye idhr bhi await likh do 
    console.log(ans); // even though this line is sync code but as the valuegiven inside is aysnc 
}
a();