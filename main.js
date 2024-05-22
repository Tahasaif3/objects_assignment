/*This Assignment is divided into three parts, each focusing on using type aliases to model real world scenario

Part 1: Employee Data
Challenge:
1. Design a type alias named Employee to represent an employee object with properties like name(string),depatment(string), and role(string).
2. Include an optional nested Object named contact to hold phone and email information(if provided).
3. Employ a union type for the role property to restrict it to "Manager" ,"Engineer", or "Intern".
4. Make a skill property an optional array of string for listing an employee's skill(if any)  */
var shirt = {
    name: "T-shirt",
    price: 1500,
    color: "Black",
    inventory: {
        stock: 1500,
        colorOption: ["White", "Red", "Green", "Light Blue"],
        changeColor: function (newColor) {
            shirt.color = newColor;
            // Adjust the price based on the T-Shirt color;
            switch (newColor.toLowerCase()) {
                case "green":
                    shirt.price *= 1.20; // increase the price by 20% for green T-shirt;
                    break;
                case "light blue":
                    shirt.price *= 1.10; // increase the price by 10% for Light Blue T-shirt;
                    break;
                default:
                    break;
            }
        }
    }
};
shirt.inventory.changeColor("Light Blue");
console.log(shirt);
