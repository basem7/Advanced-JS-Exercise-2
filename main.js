

//Exercise 1



let arr = ['a', 'b', 'c', 'd']
let result = arr.filter((elem , index, array) => {
    return index < 2;
})

console.log(result);
console.log(arr);


//Exercise 2

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]
let names = users.map((userName => userName.name));
console.log(names);


//Exercise 3

function getAverageAge(users) {
    
    if (users.length === 0) {
      return 0;
    }
  
    let ageSum = users.reduce((sum, user) => sum + user.age, 0);
  
    let averageAge = ageSum / users.length;
  
    return averageAge;
  }
  
 
  let islam = { name: "islam", age: 25 };
  let same = { name: "same", age: 30 };
  let aboud = { name: "aboud", age: 29 };
  
  let Newarr = [islam, same, aboud];
  
  console.log(getAverageAge(Newarr)); 
  