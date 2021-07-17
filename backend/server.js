let express = require("express");
let data = require("./data.json")

let server = express();

server.get('/animals', function (req, res) {
    
    res.json(data);
});

// server.get('/animals', function (req, res) {
    
//     let all_animals = data.map(function (el) {
        
//         return el.animal;
//     });

//     let unique_animal = [];

//     for(let i=0;i<all_animals.length;i++) {

//         let a = all_animals[i];

//         if(!unique_animal.includes(a))
//             unique_animal.push(a);
//     }
//     res.json(unique_animal);
// });

server.get('/breed', function (req, res) {

    let all_breed = data.map(function (el) {
        return el.breed;
    })

    let unique_breed = [];

    for(let i=0;i<all_breed.length;i++) {

        let b = all_breed[i];

        if(!unique_breed.includes(b))
            unique_breed.push(b);
    }
    
    res.json(unique_breed);
});

server.listen(4000);