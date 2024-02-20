//==================Exercise #1 ==========//

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(str, names) {
  for(let i = 0; i < names.length; i++) {
    if(str.toLowerCase().includes(names[i].toLowerCase())) {
      console.log("Matched " + names[i]);
    }
  }
  console.log("No Matches");
}

findWords(dog_string, dog_names);



//============Exercise #2 ============//

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(i % 2 === 0) {
      arr.splice(i, 1, "even index");
    }
  }
  return arr;
}

console.log(replaceEvens(arr));