import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Apps, { Saad } from './Apps'


//1st method
// ReactDOM.render( <h1>Saad is here</h1> , document.getElementById("root"))

// Pure java script
// 2nd method
// var h1 = document.createElement ("h1");
// h1.innerHTML="Saad is a developer";
// document.getElementById("root").appendChild(h1);


//use multiple jsx elements in render.
// ReactDOM.render( 
//   [
// <h1>Saad is here</h1> ,
// <p> saad is a web developer  </p> ,
// <h1> Willing to do my best for something special</h1>
//   ]
//   , document.getElementById("root"))

// fragments   *********preferable method for multiple usage **********
// ReactDOM.render( 
//   <React.Fragment>
// <h1>Saad is here</h1> 
// <p> saad is a web developer  </p> 
// <h1> Willing to do my best for something special inshallah</h1>
// </React.Fragment>
//   , document.getElementById("root"))


// Challenge from thapa
// ReactDOM.render(   
//   <React.Fragment>
//   <h1>Top 5 my best series of all time</h1>
//   <h2>List of series</h2>
//   <ol>
//   <li>Osman</li>
//   <li>Ertugrul</li>
//   <li>game of thrnes</li>
//   <li>anabella</li>
//   <li>tarak</li>
//   </ol>
//   </React.Fragment>


//   ,document.getElementById("root"));

// const name = "Muhammad " ;
// const lname = "Saaddddddddddd";
// ReactDOM.render(
//   <>
//    <h1>{`my name is ${name} ${lname}`}</h1>
//    <h1>my age is {10+10}</h1>
//    </>
//   ,document.getElementById("root")
// );


// // Challenge 2 from thapa
// const fnm = "Muhammad"
// const lnm = "Saad" 
// const currDate = new Date().toLocaleDateString();
// const time = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <React.Fragment>
//    <h1>{` My name is ${fnm} ${lnm}` }</h1>
//    <h1>Today date is = {currDate}</h1>
//    <h1>Time is ={time}</h1>

//    </React.Fragment>
//  , document.getElementById("root")
// );
// *********** done *************

// const img = 'https://source.unsplash.com/random/200x200?sig=incrementingIdentifier.';

// ReactDOM.render(
//   <>
//     <h1 className="head" contentEditable='true'>My name is saad</h1>
//     <div className='img-div'>
//     <img src={img} />
//     <img src={img}/>
//     </div>


//   </>
//   , document.getElementById("root")
// );

//************** Task #3***************8 */
//  let greet= '';
//  let curDate = new Date();
//  curDate = curDate.getHours();
// const cssStyle= {};
//  if (curDate < 19  && curDate >=1) {
//   greet = 'Good Night';
//   cssStyle.color  = 'green';
// } else if(curDate >= 6 && curDate < 12){
//   greet = 'Good Morning';
//   cssStyle.color  = 'yellow';
// }
// else{
//  greet = 'G/ood afternoon';
//  cssStyle.color  = 'Red';
// }
// ReactDOM.render(
//   <>
//   <div className='div'>
//      <h1>Hello Sir , <span style={cssStyle} >{greet}</span></h1>
//      </div>
//   </>
//   , document.getElementById("root")
// );
//************done ******************* */



//Componets Based Practice
ReactDOM.render(
    
<>
<Saad/>
<ul>
<Apps/>

</ul>
</>
    
   ,document.getElementById('root')
)


