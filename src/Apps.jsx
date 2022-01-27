import React from "react";
 const num1 =3;
 const num2 =5;
const  sum=num1 + num2 ;
const sub=num1 - num2 ;
const  mul=num1 * num2;
const  div=num1 / num2;
function Sum(){

    return(
        <>
        <li>
          <h1>The Sum is {sum}</h1>
          </li>
        <li><h1>The Subtraction is {sub}</h1></li>
        <li><h1>The Multiplication is {mul}</h1></li>
        <li><h1>The Division is {div}</h1></li>
        </>
      );
}
function Saad(){
  return (<h1>Saad's Calculator</h1>);
}
export {Saad};
export default Sum;