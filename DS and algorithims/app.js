// const letters = [];
// let word = "racecar";
// let rword = '';
// for(let i = 0; i < word.length; i++) {
//     letters.push(word[i]);
// }
// for(let i = 0; i < word.length; i++) {
//     rword += letters.pop();
// }
// if(word === rword) {
//     console.log( word + " is a palindrome")
// } else {
//     console.log( word + " is not a palindrome")
// }

// Creates a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};

    //Adds a value onto the end of the stack
    this.push = (value) => {
        this.storage[this.count] = value;
        this.count++
    }

    //Removes and returns the value at the end of the stack
    this.pop = () => {
        if(this.count === 0) {
            return undefined
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = () => {
        return this.count
    }

    // Returns the value at the end of the stack
    this.peek = () => {
        return this.storage[this.count - 1];
    }
}

var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek()); 



// Sets //
// The set data structure is like an array except there is no duplicate item and the values are not in any particular order.. The essence of a set is to check the availability of an item.
function mySet() {
    // the collection will hold the set
    let collection = [];
    // this method will check the presence of an element and return a boolean value
    this.has = function(element) {
        return (collection.indexOf(element) !== -1)
    }
    //this method will return all the values in the set
    this.values = function() {
        return collection;
    }
    //this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)) {
            collection.push(element);
            return true
        }
        return false
    }
    // this method will remove an element from the set
    this.remove = function(element) {
        if(this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index,1)
        }
    }
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    }
    //this method will return the union of two sets
    this.union = function(otherSet) {
        let unionSet = new Set();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach((e) => {
            unionSet.add(e)
        });
        secondSet.forEach((e) => {
            unionSet.add(e)
        });
        return unionSet
    };

    // this method will return the intersection of two sets as a new set
    this.intersection = function (otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)) {
                intersectionSet.add(e)
            }
        });
        return intersectionSet;
    };

    // this method will return the difference of two sets as a new set
    this.difference = function (otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e) {
            if(!otherSet.has(e)) {
                differenceSet.add(e)
            }
        });
        return differenceSet;

    };

    // this method will test if the set is a subset of a different set
    this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value)
        });
    }
}
let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB)) //True
console.log(setA.intersection(setB).values()); // ["a"]