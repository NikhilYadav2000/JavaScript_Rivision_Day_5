// function User(email,password){
//     this._email = email;
//     this._password = password;
//     Object.defineProperty(this, 'email', { // used to set getters and setters
//         get: function(){
//             return this._email.toUpperCase();
//         },
//         set: function(value){
//             this._email = value;
//         }
//     })
//     Object.defineProperty(this, 'password', { // used to set getters and setters
//         get: function(){
//             return this._password.toUpperCase();
//         },
//         set: function(value){
//             this._password = value;
//         }
//     })
// }

// const u1=new User("abc@gmail.com","abc");
// console.log(u1.email); // abc@gmail.com
// console.log(u1._email); // ABC@GMAIL.COM

const User ={
    _email:'abc@gmail.com',
    _password:"abc", // underscore provides private access
    get emailP(){
        return this._email.toUpperCase();
    },
    set emailP(value){
        this._email = value;
    }
}

// new way to create instances
const u1=Object.create(User);
console.log(u1.emailP); // ABC@GMAIL.COM
console.log(u1._email); // abc@gmail.com