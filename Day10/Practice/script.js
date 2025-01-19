// const num = [1, 2, 3, 4, 5, 3, 2, 6];
// const unique = num.filter((value, index, array) => array.indexOf(value) === index);
// console.log(unique);

// const fruits = ["Banana", "Mango", "Orange", "Banana", "Apple", "Mango"];
// const uniqueFruits = fruits.filter((value, index, array) => array.indexOf(value) === index);
// console.log(uniqueFruits);

const fruits = ["Banana", "Mango", "Orange", "Banana", "Apple", "Mango"];
const array = new Set();
const newFruits = fruits.filter((value) => {
    if (array.has(value)) {
        return false;
    }
    array.add(value);
    return true;
});
console.log(newFruits);
