import React from 'react';
function App(){
  let names = ["mani","teja","sahithi"];
  return(
    <div>
      <h1>names:</h1>
      {names.map((name)=><p>{name}</p>)}
    </div>
  );
}
export default App;