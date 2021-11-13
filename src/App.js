import { useState } from "react";
import About from "./container/About";
import Profile from "./container/Profile";

function App() {

  const [state, setState] = useState('')
  let component
  if (state === 'Profile')
    component = <Profile />
  else if (state === 'About')
    component = <About />
    
  return (
    <div className="App">
      
      <button onClick={() => setState('Profile')}>Profile</button>
      <button onClick={() => setState('About')}>About</button>
      {component}
      
    </div>
  );
}

export default App;
