/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  when not defined in a scope, will default to global scope which incorporates the entire window/console

* 2. implicit binding: when a function is called, this refers to the function being called

* 3. when a new constructor function is created/called upon, "this" refers to the object/parameter that the constructor function creates/calls upon

* 4. explicit binding: when a constructor function is used with '.call' or '.apply', the 'this' becomes defined by the object being called or applied

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

    // console.log(this);

// Principle 2

// code example for Implicit Binding
    
    const myObject = {
        name: 'object',
        myProperty: function(ele){
            console.log( `This is my ${this.name} and this is my ${ele}`);
            console.log(this);
            }
    };
myObject.myProperty('element');

// Principle 3

// code example for New Binding

    function Item(element){
        this.thing = element;
    }
    let myItem = new Item('newElement');

    console.log(myItem.thing)

// Principle 4

// code example for Explicit Binding

    function yell(){
        console.log(this.scream);
    }

    let myVoice ={
        scream: 'HELLO',
    }

    yell.call(myVoice);

