


export const arrayFlashCardData = [
  {
    question: 'How do you add an item to the end of an array?',
    description: 'push( )',
    destructive: 'Modifies original array? YES',
    code: `
      var animals = [ 'pigs', 'goats', 'sheep' ];

      console.log( animals.push( 'cows' ) );
      // expected output: 4
      
      console.log( animals );
      // expected output: Array ["pigs", "goats", "sheep", "cows"]
    `,
  },
  {
    question: 'What array method loops through the array searching for a specific value and then returns the very first index that contains that value?',
    description: 'indexOf( )',
    destructive: 'Modifies original array? NO',
    code: `
      const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

      console.log(beasts.indexOf('bison'));
      // expected output: 1
    `
  },
  {
    question: 'What array method can be used to convert a nodelist or string to an array?',
    description: 'Array.from( )',
    destructive: 'Modifies original array? NO',
    code: `
      const nodeList = Array.from( document.querySelectorAll( 'div' ) );
      // nodelist now would be a standard array
      
      
      Array.from('JavaScript'); // Same as 'JavaScript'.split('')
      // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
    
    `,
  },
  {
    question: 'What array method can you use to test if some item is an array?',
    description: 'Array.isArray( )',
    destructive: 'Modifies original array? NO',
    code: `
      Array.isArray( [ 1, 2, 3 ] );  // true
      
      Array.isArray( { foo: 123 } ); // false
      
      Array.isArray( 'foobar' );   // false
      
      Array.isArray( undefined );  // false
    `
  },
  {
    question: 'What array method can you use to merge two arrays together without modifying the original arrays?',
    description: 'concat( )',
    destructive: 'Modifies original array? NO',
    code: `
      const array1 = [ 'a', 'b', 'c' ];
      const array2 = [ 'd', 'e', 'f' ];
      
      console.log( array1.concat( array2 ) );
      // expected output: Array ["a", "b", "c", "d", "e", "f"]
    `,
  },
  {
    question: 'What method creates a new array with all the elements that pass a specific test that is provided by the function you pass?',
    description: 'filter( )',
    destructive: 'Modifies original array? NO',
    code: `
      const words = [ 'spray', 'limit', 'elite', 'exuberant', 'destruction', 'present' ];

      // ES6 javascript
      const result = words.filter( word => word.length > 6 );
      
      // ES5 javascript
      const result = words.filter( function ( word ) {
      
        if ( word.length > 6 ) {
          return word;
        }
      
      } );
      
      console.log( result );
      // expected output: Array ["exuberant", "destruction", "present"]
    `,
  },
  {
    question: 'What is the array method loop called that executes a provided function once for every element in the array?',
    destructive: 'Modifies original array? Only if you change it inside of the forEach loop',
    description: 'forEach( )',
    code: `
      const array1 = [ 'a', 'b', 'c' ];

      array1.forEach( function ( element ) {
        console.log( element );
      } );
      
      // expected output: "a"
      // expected output: "b"
      // expected output: "c"
    `
  },
  {
    question: 'Which array method determines whether an array includes a certain value among its items?',
    description: 'includes( )',
    destructive: 'Modifies original array? NO',
    code: `
      const array1 = [ 1, 2, 3 ];

      console.log( array1.includes( 2 ) );
      // expected output: true
      
      console.log( array1.includes( 4 ) );
      // expected output: false
    `
  },
  {
    question: 'Which array method creates and returns a new string by concatenating all the elements in the array with a separator that you provide?',
    destructive: 'Modifies original array? NO',
    description: 'join( )',
    code: `
      const elements = ['Fire', 'Wind', 'Rain'];

      console.log(elements.join());
      // expected output: "Fire,Wind,Rain"
      
      console.log(elements.join(''));
      // expected output: "FireWindRain"
      
      console.log(elements.join('-'));
      // expected output: "Fire-Wind-Rain"
    `
  },
  {
    question: 'Which array method creates a new array with the results of calling a provided function on every element in the array without modifying the original array?',
    destructive: 'Modifies original array? NO',
    description: 'map( )',
    code: `
      const array1 = [ 1, 4, 9, 16 ];

      // ES6 pass a function to map
      const map1 = array1.map( number => number * 2 );
      
      const map2 = array1.map( function( number ) {
        return number * 2;
      } );
      
      console.log( map1 );
      // expected output: Array [ 2, 8, 18, 32 ]
      
      console.log( map2 );
      // expected output: Array [ 2, 8, 18, 32 ]
      
      console.log( array1 );
      // expected output: Array [ 1, 4, 9, 16 ]
      // orginal array was never modified
    `
  },
  {
    question: 'Which array method removes the last element from the array and returns that item to you?',
    destructive: 'Modifies original array? YES',
    description: 'pop( )',
    code: `
      const plants = [ 'broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato' ];

      console.log( plants.pop() );
      // expected output: "tomato"
      
      console.log( plants );
      // expected output: Array [ "broccoli", "cauliflower", "cabbage", "kale" ]
    `
  },
  {
    question: 'Which array method would you use to flip the order of the array so that [ 1, 2, 3 ] becomes [ 3, 2, 1 ]?',
    destructive: 'Modifies original array? YES',
    description: 'reverse( )',
    code: `
      const array1 = [ 'one', 'two', 'three' ];
      console.log( 'array1: ', array1 );
      // expected output: Array [ 'one', 'two', 'three' ]
      
      const reversed = array1.reverse();
      console.log( 'reversed: ', reversed );
      // expected output: Array [ 'three', 'two', 'one' ]
      
      /* Careful: reverse is destructive. It also changes the original array */
      console.log( 'array1: ', array1 );
      // expected output: Array [ 'three', 'two', 'one' ]
    `
  },
  {
    question: 'Which array method removes the first element from the array and returns that removed element to you?',
    description: 'shift( )',
    destructive: 'Modifies original array? YES',
    code: `
      const array1 = [ 1, 2, 3 ];

      const firstElement = array1.shift();
      
      console.log( array1 );
      // expected output: Array [ 2, 3] 
      
      console.log( firstElement );
      // expected output: 1
    `
  },
  {
    question: 'Which array method would you use to remove an item at a specific index from any array and have it return to you an new array without modifying the oringal array?',
    description: 'slice( )',
    destructive: 'Modifies original array? NO',
    code: `
      const animals = [ 'ant', 'bison', 'camel', 'duck', 'elephant' ];

      console.log( animals.slice( 2 ) );
      // expected output: Array [ "camel", "duck", "elephant" ]
      
      console.log( animals.slice( 2, 4 ) );
      // expected output: Array ["camel", "duck"]
      
      console.log( animals.slice( 1, 5 ) );
      // expected output: Array [ "bison", "camel", "duck", "elephant" ]
      
      console.log( animals );
      // expected output: Array [ "ant", "bison", "camel", "duck", "elephant" ]
      // orginal array is untouched
    `
  },
  {
    question: 'Which array method would you use to re-organize the order of the elements according to a provided function?',
    description: 'sort( )',
    destructive: 'Modifies original array? YES',
    code: `
      const arr = [ 2, 5, 8, 1, 4 ];

      console.log( arr.sort() )
      // expected output: Array [ 1, 2, 4, 5 ,8 ]
      
      var fruits = ["Banana", "Orange", "Apple", "Mango"];
      console.log( fruits.sort() );
      // expected output: Array [ "Apple", "Banana", "Mango", "Orange" ]
      
      // sorting letters can be tricky since they are sorted based on
      // unicode value, look into documentation about this
      
      // sort accepts function as a parameter if you want it to sort by
      // something custom like largest number first or even numbers
      const numbers = [4, 2, 5, 1, 3];
      numbers.sort(function( a, b ) {
        return a - b;
      } );
      console.log( numbers );
      // expected output [ 5, 4, 3, 2, 1 ]
    `
  },
  {
    question: 'Which array property gives you the total amount of items in an array?',
    description: 'length',
    destructive: 'Modifies original array? NO',
    code: `
      const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

      console.log( clothing.length );
      // expected output: 4
      
      // length is not actually a method, its a property so you
      // dont need to add the invocation paranthesis ()
      
    `
  },
];






























