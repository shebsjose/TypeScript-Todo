import React from 'react';
import './App.css';

// type Person = {
//   name : string;
//   age : number,
//   // age?: number ( want to make optional)
// }

// // let person : object;
// let person : Person = {
//   name : "Sheba",
//   age : 12
// }

// let name : string | number; (called union means its take both values)
// name : 'Sheba'

function printName(name : string){
  console.log(name);  
}
printName('Sheba');

function App() {
  return (
    <div className="App">
     Hello Sheba
    </div>
  );
}

export default App;