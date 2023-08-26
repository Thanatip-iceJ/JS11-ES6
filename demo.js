
//# Array ES6
const arr = [1,2,3,4]
const newArr = [...arr]
console.log(newArr)

const arr2 = [1,2,3,4,5]
const arr3 = [8,7,6]
const combinedArr = [...arr2, ...arr3]
console.log(combinedArr)

//#Object ES6
const obj = {
    name: 'John',
    age: 20,
    isSingle: true
}

// const newObj = {...obj}
const newObj = {...obj, Email: 'kkk@gmail.com', gender: 'male'}
console.log(newObj)

// # Destructure
const obj2 = {
    name: 'Iphone',
    price: 1200,
    model: '12s'

}

const {name, price, model} = obj2
console.log(name)
console.log(price)
console.log(model)

// # Array destructure
let testArr = [1,2,3,4,5]

const [n1,n2,n3,n4] = testArr;

console.log(n4)

const person = {
    name: 'Jane',
    age: 29,
    address: {district: 'Phayathai', province: 'Bangkok'} ,
    friends: ['john', 'sam', 'paul']
}

// const province = person.address.province
// const BFF = person.friends[2]

const {
    address: {district, province}, 
    friends: [f1,f2,f3]
    } = person;
console.log(address, friends)
console.log(district)

