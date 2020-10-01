import React from 'react';
const App = () => {
  const year = new Date().getFullYear();
  const name="Prakhar Agarwal"
  return (
    <>
    <footer ><p> Copyright © {year} {name} </p></footer>
    </>
  );
};
export default App;
