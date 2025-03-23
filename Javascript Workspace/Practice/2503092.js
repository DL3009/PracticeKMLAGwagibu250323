const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 22,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I'm Spongebob")},
    eat: function(){console.log("I'm eating a Krabby Patty")},
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 25,
    isEmployed: false,
    sayHello: function(){console.log("Hi! I'm Patrick")},
    eat: function(){console.log("I'm eating roast beef")},
}
person1.eat()
person2.eat()