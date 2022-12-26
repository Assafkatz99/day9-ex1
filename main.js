// 1)

const f1 = () => {
    for (let i = 1; i<=10; i++ ){
        console.log(i);
    }
}


// 2)

const f2 = () => {
    for (let i = 2; i<=10; i+=2 ){
        console.log(i);
    }
}

// 3)

const f3 = (n) => {
    for (let i = 2; i<=n; i+=2 ){
        console.log(i);
    }
}

// 4)
const f4 = () => {
    for (let i = 2; i<=20; i++){
       if (i != 13){
         console.log(i);
       }
    }
}

// 5)
const f5 = () => {
    for (let i = 10; i>=1; i-- ){
        console.log(i);
    }
}


// 6)

const f6 = () => {
    for (let i = 1; i<=10; i++ ){
        console.log(i);
        if (i === 7){
            break
        }
    }
}

// 7)

const array = [1,2,3,4,5,6,7,8,9,19,12,3,4,5,6,87,21,1,2]

const f7 = () => {
    for (let i = 0; i<array.length; i++){
        ;console.log(array[i]);
    }
}

// 8)
const array2 = [1,2,3,4,5]
function f8_printEvenNumbers(array){
    for (let i=0; i<array.length; i++){
        if (array[i] % 2 === 0){
            console.log(array[i]);
        }
    }
    }
    
// 9)

function f9 (arr){
    let sum =0
    for(let i=0; i<arr.length; i++){
       sum += arr[i] 
    }
    return sum
}

// 10)

function f10 (word){
    let count = 0

    for (let i = 0; i<word.length; i++){
        count += 1
    }

    return count
}

// 11)

function f11 (arr){
    let evens = []
    let odds = []
    for (let i = 0; i<arr.length; i++){
        if (arr[i] % 2 === 0){
            evens.push(arr[i])
        }
        else{
            odds.push(arr[i])
        }
    }

    console.log(`evens: ${evens}`);
    console.log(`odds: ${odds}`);

}

// 12)

function f12 (str){
    let flag = false
    for (let i = 0; i<str.length; i++){ 
    if (str[i] === "y" || str[i] === "Y" ){
        console.log("Yes");
        flag = true
        break;
    }
    }
    if (flag != true){
        console.log("No");
    }
}

// 13)

function f13 (arr){
    let max = 0
    for (let i = 0; i<arr.length; i++){
        if (max<parseInt(arr[i])){
            max = arr[i]
        }
    }
    return max
}

console.log(f13(array))