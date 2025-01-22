//object
let person ={
    name: "tiya",
    place: "kochi",
    
};

console.log(person);
console.log(person.name);

let car= {
    name:"kia",
    color: "black",
};

console.log(car);
console.log(car.color);
console.log(car.name);

//arrays

let fruits =["banana","orange","grapes","cherry",12];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

let people=[{name:"sree",place:"chentrappnni"},
    {name:"priya",place:"xyz"},
    {name:"juvana",place:"aluva"}]

console.log(people);
console.log(people[1]);
console.log(people[2].name);
console.log(people[1].place);


//functions

function addNumb(a,b){
    let c= a+b;
    console.log(c);
}
addNumb(2,8)

function fullName(firstname,secondname){
 let full = firstname + secondname;
 console.log(full);
}
fullName("sree","priya");


function Name(fname,sname){
    let c=`${fname} and ${sname}`
    console.log(c);
}
Name("sree","priya");

//loops

for(let i=1; i<=5;i++){
    console.log(i);
}

