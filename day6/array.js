// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True

function is_array(input) {
    return Array.isArray(input)

}

console.log(is_array([123, 23]))
console.log(is_array("Jai hind"))



// next question cloning an array 
function clone(input) {

    newArr = [];
    for (i = 0; i < input.length; i++) {
        newArr[i] = input[i];
    }
    return newArr
}

// [1, 2, 4, 0]
// [1, 2, [4, 0]]
console.log(clone([1, 2, 4, 0]))
console.log(clone([1, 2, [4, 0]]))


// question no 3  
// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

function first(input,num){
    Len = input.length
    if (num < 0 ){
        console.log("please select the positive input")
    }
    else if (Len < num){
        console.log("please select the write parameter")

    }
    else {
        console.log(input.slice(0,num))
    } 

}

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));



// question no 4 

// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

function join(input){


    return input.join(",") ; 

}
console.log(join( ["Red", "Green", "White", "Black"]))




// question no 5 

// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

function mostFrequent(input){
    var dict = {  }

    for(var ob in input){
        if (dict[ob] == undefined) {
            dict[ob] = 1 
        }
        else {
            dict[ob] += 1 

        }

    }

    var val = 0 
    var count = 0 

    for(var ob in dict ){
        if (dict[ob] > count) {
            val = ob; 
            count = dict[ob]

        }
    }
    console.log(val)
    console.log(count)
}

mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);