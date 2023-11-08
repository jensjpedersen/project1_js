



let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log(arr.length)




console.log(arr.pop())


// arr.push = add to the end of the array and return the new length of the array
console.log(arr.push('j'))



console.log("Remove index 5 og index 7")
console.log(arr.splice(5,1))
console.log(arr.length)
console.log(arr.splice(7,1))
console.log(arr.length)


console.log(`Fjernet index 5 og 7: ${arr}`)
console.assert(arr.length === 8)
