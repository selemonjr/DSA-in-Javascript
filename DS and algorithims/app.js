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


// Queue => Is a way of holding data..
function Queue() {
    collection = [];
    this.print = function() {
        return console.log(collection)
    };
    this.enqueue = function(element) {
        return collection.push(element)
    };
    this.dequeue = function() {
        return collection.shift();
    };
    this.front = function() {
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return (collection.length === 0)
    }
}
Queue();

let setQ = new Queue();
setQ.enqueue("d");
console.log(collection)




// Linked List => Is a sequence of data structures that are connected together via links and a linked list is a linear data structure.
// A linked list consists of nodes where each node contain a data field which references to the next node in the list

class Node {
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}

const node1 = new Node(100);
console.log(node1);

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    };

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data,this.head);
        this.size++
    }
    // Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;
        // if empty then make it the head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }
    // Insert at index
    insertAt(data,index) {
        // if index is out of range
        if(index > 0 && index > this.size) {
            return;
        }
        // if first index
        if(index === 0) {
            this.head = new Node(data,this.head);
            return;
        }

        const node = new Node(data);
        let current,previous;

        //Set current to first
        current = this.head;
        let count = 0;
        while(count < index) {
            previous = current; // Node before the index
            count++;
            current = current.next; // Node after the index
        }

        node.next = current;
        previous.next = node;

        this.size++
    }
    // Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;
        while(current) {
            if(count == index) {
                console.log(current.data)
            };
            count++;
            current = current.next;
        }
        return null;
    }
    // Remove at index
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        // Remove first
        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }
        this.size--;
    }
    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }
    // Print list data
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data)
            current = current.next
        }
    }
}
const LL = new LinkedList();
LL.insertFirst(100)// Inserting 100 at the beginning of the list
LL.insertFirst(200)
LL.insertFirst(300)
LL.insertLast(400) // Inserting 400 at the end of the list
// LL.insertAt(600,1) // Inserting 600 at index 1
// LL.getAt(1) // Getting the number at index 1
LL.removeAt(3) // Remove the number at index 3
// LL.clearList() // Clearing the list
LL.printListData()