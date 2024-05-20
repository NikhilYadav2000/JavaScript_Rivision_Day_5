// class User{
//     constructor(email,password){
//         this.email = email;
//         this.password = password;
//     }
//     get email(){
//         return this.email;
//     } // if u just use getter, compiler err will be thrown so use setter along with it

//     set email(value){
//         this.email = value;
//     }
// }
// const Nikhil = new User("abc@gmail.com","123")
// console.log(Nikhil.password); // 123
// console.log(Nikhil.email); // issue of set
// Maximum call stack size exceeded as we are setting the password 2wice

// class User{
//     constructor(email,password){
//         this.email = email;
//         this.password = password;
//     }
//     get email(){
//         return this.email;
//     } // if u just use getter, compiler err will be thrown so use setter along with it

//     set email(value){
//         this._email = value; // we have made a new variable
//     }
// }
// const Nikhil = new User("abc@gmail.com","123")
// console.log(Nikhil.password); // 123
// console.log(Nikhil.email); // issue of get
// console.log(User);

class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    } // if u just use getter, compiler err will be thrown so use setter along with it

    set email(value){
        this._email = value; // we have made a new variable and pushed in the object
    }
}
const Nikhil = new User("abc@gmail.com","123")
console.log(Nikhil.password); // 123
console.log(Nikhil.email); // issue of get
console.log(Nikhil._email); // og value that we
/*
123
ABC@GMAIL.COM
abc@gmail.com
*/