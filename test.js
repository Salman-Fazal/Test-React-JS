
// Write a JavaScript function that checks if a string is a palindrome (reads the same backward as forward).
// Ans 

function isPalindrome(str) {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("hello")); // false

// Write a JavaScript function that removes duplicates from an array.

// input = [1,  2,  "hello",  "world",  { name: "Alice", age: 30 },  { name: "Alice", age: 30 },   [1, 2, 3],  [1, 2, 3],  "hello",  3,  [4, 5, { nested: "object" }],  [4, 5, { nested: "object" }],  { nested: [1, 2, 3] },  { nested: [1, 2, 3] }]

function removeDuplicates(arr) {
    const check = new Set();
    return arr.filter(item => {
        const checkDuplicates = typeof item === 'object' ? JSON.stringify(item) : item;
        if (check.has(checkDuplicates)) {
            return false;
        }
        check.add(checkDuplicates);
        return true;
    });
}

const input = [1, 2, "hello", "world", 
    { name: "Alice", age: 30 }, 
    { name: "Alice", age: 30 }, 
    [1, 2, 3], [1, 2, 3], 
    "hello", 3, 
    [4, 5, { nested: "object" }], 
    [4, 5, { nested: "object" }], 
    { nested: [1, 2, 3] }, 
    { nested: [1, 2, 3] }];

const output = removeDuplicates(input);
console.log(output);

// Write a JavaScript class Animal with a method speak(). Then, create a subclass Dog that overrides the speak() method.

// ⁠Write JavaScript code to create a new HTML element, add it to the DOM, and attach an event listener to it.

const newButton = document.getElementById('btn');

newButton.addEventListener('click', function() {
    alert('Hello world!');
});


