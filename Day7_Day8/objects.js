// <!-- 1. Write a JavaScript program to list the properties of a JavaScript object.
//  Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno -->

var student = {
    name: "shimanshu",
    class: "X",
    "rollno": 92
}

console.log(student.name);
console.log(student.class);
console.log(student.rollno);



// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
//  Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 

delete student.rollno;



// . Write a JavaScript program to get the length of a JavaScript object.  
// Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

var size = Object.keys(student).length
console.log(size)

// output   2 


// 4. Write a JavaScript program to display the reading status(i.e.display book name,
//      author name and reading status) of the following books.var library = 
//      [{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, 
//      { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
// { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];


var library = [{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];

for(var key in library){
    console.log(` Book title ${key.title} Book author ${key.author} and Book status ${key.readingStatus}`) ; 
}


// 5.Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
//  Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylind
// const 
class sphere {
    constructor(radius, height) {
        this.height = height;
        this.radius = radius;
        this.pi = 3.14;
        // console.log(this.height);
    }

    volumeCircle() {
        var volume = this.pi * this.radius * 2 * this.height;
        console.log(volume.toFixed(4));
    }
}

let sphere1 = new sphere(5, 100);
let sphere2 = new sphere(10, 9);
sphere1.volumeCircle();
sphere1.volumeCircle();



