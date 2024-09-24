//Global scope
var globalVar = "i'm a global variable";
let globalLet = "i'm also global, but scoped with let";
const globalConst = "i'm a global constant";

{
    //block scope
    var blockVar = "i'm a block scoped var";
    let blockLet = "i'm a block scopeed let";
    const blockConst = "i'm a clock scoped const";
}

//Global scope
console.log(globalVar);// Output:"i'm a global variable"
console.log(globalLet);// Output:"i'm also global, but scoped with let"
console.log(globalConst);// Output:"i'm a global constant"
//Block Scope
console.log(blockVar);
console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    console.log(functionVar); // Throws ReferenceError
    console.log(functionLet); // Throws ReferenceError
    console.log(functionConst); // Throws ReferenceError