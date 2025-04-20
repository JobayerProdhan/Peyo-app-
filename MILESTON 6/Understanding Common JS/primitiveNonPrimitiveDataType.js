/**
 * There two type of data type :
 * 1.Primitive (Store only one type data)
 * 2.Non primitive (Objects) (Store more than one datatype)
 * 
 * Primitive : Number,String,Boolean,Undefined 
 * Non Primitive : Object, Array , Function , Date , Regx 
 * 
 * Difference Between primitive and Non primitive Data type :
 *       Primitive                                     | Non - primitive 
 *    1. Imutabale (can't  change)                     | Mutable(can changes)
 *    2. Stored directly in the variable               | Stored by reference 
 *    3. number,stirng,boolean.null, undefined,,symbol | Object,Array 
 *    4. Fixed size                                    | Dynamic Size 
 *    5. Simple operations(copy by value)              | Complex operation copy by referace 
 *    6, Use for somple data type                      | Used for more complex structures and collection 
 *
 */


//==================================================================//
// Primitive data type
//==================================================================//

const name =  'jobayer' ;  
const person = ["jobayer",23];


let man = "giasuddin"
let newMan = man;
man = "hero alom"

console.log(newMan) // can't change


//==================================================================//
// Non - primitive data type 
//==================================================================//

let man1 = { name : "giasuddin"}
let newMan1 = man1;

man1.name = "jobayer"

console.log(man1);