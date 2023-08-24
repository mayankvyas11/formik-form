
import { useState } from "react"
import BeforeLogin from "./beforelogin"
import AfterLogin from "./afterlogin"



const App = ()=>{
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <div>
      {
        loggedIn ?( <AfterLogin/>)
        : (
          <BeforeLogin onLogin={handleLogin}/>
        )
      }
    </div>
  )
}
export default App;

