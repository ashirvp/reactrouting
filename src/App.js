import { useState } from "react";
import About from "./container/About";
import Profile from "./container/Profile";


function App() {

  const [state, setState] = useState('')
  let componet
  


  
  return (
    <div className="App">
      <button onClick={() => setState('Profile')}>Profile</button>
      <button onClick={() => setState('About')}>About</button>
      {componet}
    </div>
  );
}

export default App;
