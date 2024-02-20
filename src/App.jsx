
import { useState,useCallback,useEffect,useRef} from 'react';
import './App.css'



function App() {

  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);

  const [password,setPassword] = useState("");
  const passwordRef = useRef(null);
  

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str += "0123456789";
    }
    if(charAllowed) str+= "!@#$%^&*()_++{}~`";

    for(let i = 1; i<=length; i++){
      let char = Math.floor((Math.random() * str.length +1));
      pass += str.charAt(char);
    }
    setPassword(pass);

  },[length,charAllowed,numberAllowed,setPassword])

  useEffect(()=>{

    passwordGenerator()

  },[length,numberAllowed,charAllowed,passwordGenerator]);

  const handlecopy = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password]);

  return<>
  <h1>Password Generator</h1>

  <div>
    <input type='text' value={password} placeholder='password' readOnly ref={passwordRef}></input>
    <button onClick={handlecopy}>copy</button>
  </div>
  <div className='tasks'>
    <input type="range" min={6}  max={100} value={length} onChange={(e)=>{setLength(e.target.value)}} ></input>
    <label>length {length}</label>
  
  <div>
    <input type="checkbox" defaultChecked = {numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} id='numberInput' />
    <label htmlFor="numberInput">Numbers</label>
    <input type="checkbox" defaultChecked = {charAllowed} onChange={() => setCharAllowed((prev) => !prev)} id='charInput' />
    <label htmlFor="charInput">characters</label>
  </div>
  </div>
  
  </>
  
}

export default App;



