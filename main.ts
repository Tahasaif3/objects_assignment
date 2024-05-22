/*This Assignment is divided into three parts, each focusing on using type aliases to model real world scenario 

Part 1: Employee Data 
Challenge:
1. Design a type alias named Employee to represent an employee object with properties like name(string),depatment(string), and role(string).
2. Include an optional nested Object named contact to hold phone and email information(if provided).
3. Employ a union type for the role property to restrict it to "Manager" ,"Engineer", or "Intern".
4. Make a skill property an optional array of string for listing an employee's skill(if any)  */

// type Employee = {
//     name:string;
//     department:string;
//     role:"Manager" | "Engineer" | "Intern"; // Union Type
//     contact: {                  
//         Phone?:number;  //nested object
//         Email:string;
//     }
//     skill?:string[];
// }

// let employee:Employee = {
//     name:"Ahmed",
//     department:"Microsoft Office",
//     role:"Intern",
//     contact:{
//         Phone:9864534454,
//         Email:"anonymous123@gmail.com",
//     },
//     skill:["Ms Office Expert"]
// }
// console.log(employee);

//Part 2: Car Details
//challenge:
//1.Design a type alias named product to represent a car object.
//2.Include a Nested Object named engine within Car, containing a property named horsepower(number).
//3.Define a function named getHorsePower directly within the car type alias to recieve the engine's horsepower.

// type Car = {
//     name:string;
//     model:number;
//     color:string;
//     engine:{
//         horsePower:number
//     }
//     getHorsePower:()=>any;
// }

// let car:Car = {
//     name:"Corolla Altis",
//     model:2022,
//     color:"black white",
//     engine:{
//         horsePower:1200,
//     },
//     getHorsePower:function(){
//        return this.engine.horsePower
//     }
// } 
// console.log(car.getHorsePower());

/* Part 3: Colorful T-shirts
 challenge:
 1.Design a type alias named product to represent a T-shirt Object with properties like name(string), price(number), and color (string).
 2.Include a Nested Object named inventory within product.This inventory object should have two properties:
  . stock(number):Represent the number of T-shirts available.
  . colorOptions(Optional array of strings):Lists available colors(if any)
 3.Inside a inventory object ,define a function named changeColor.This function accept a new color string as an argument.When called,it should:
  . Update the colorr property of the product object.
  . Adjust the price based on the new color(implement your own logic, e.g, increase by 10% for red, decrease by 5% for blue)  
*/

// type Product = {
//     name:string;
//     price:number;
//     color:string;
//     inventory:{
//         stocK:number;
//         colorOption:string[];
//         changeColor:(newColor:string) => void
//     }
// }
// let shirt:Product = {
//     name:"T-shirt",
//     price:1500,
//     color: "Black",
//     inventory:{
//         stocK:1500,
//         colorOption:["White","red","green","lightPurple"],
//         changeColor:function(newColor:string) {
//             shirt.color = newColor

//             // Adjust the price based on the T-Shirt color;
//             switch (newColor.toLowerCase()) {
//                 case "Green":
//                 shirt.price *= 2.10; // increase the price by 10 20% for green T-shirt;
//                 break;
//                 case "Light Blue":
//                     shirt.price *= 1.10; //increase the price by 20% for Light Blue T-shirt;
//                 break;
//                 default:
//                     break;
//             }
//         }
//     }
// }

// shirt.inventory.changeColor("Light Blue");
// console.log(shirt);
