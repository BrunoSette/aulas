const pessoas = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

function React(arr){
return arr.map((res) =>  `<div><h1>${res.name}</h1><h2>${res.age}</h2><div>`)

}
console.log(React(pessoas))



// Cada elemento pode ter o seguinte formato:
// <div>
//    <h1>Angelina Jolie</h1>
//    <h2>80 anos</h2>
// </div>