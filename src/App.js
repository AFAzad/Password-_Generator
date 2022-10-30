
import { useState } from 'react';
import './App.css';
import{numbers,upperCaseLaters,lowerCaseLetters,symbols} from "./Characters"
function App() {
  const [password,setPassword]=useState('')
  const [passwordLength,setPasswordLength]=useState(15)
  const [includeUpperCase,setincludeUpperCase]=useState(false)
  const [includeLowerCase,setincludeLowerCase]=useState(false)
  const [includeNumber,setincludeNumber]=useState(false)
  // const [includeSymbols,setincludeSymbols]=useState(false)
  const handleGeneratePassword =(e) =>{
    let CharacterList =''


    if(includeUpperCase){
      CharacterList = CharacterList + upperCaseLaters
    }
    if(includeLowerCase){
      CharacterList= CharacterList + lowerCaseLetters
    }
    if(numbers){
      CharacterList = CharacterList +numbers
    }
    // if(symbols){
    //   CharacterList = CharacterList + symbols
    // }
    setPassword( createPassword( CharacterList))
  }
  const createPassword=(CharacterList)=>{
        let password =''
        const characterListlength= CharacterList.length
        for(let i =0; i <passwordLength; i ++){
          const characterIndex= Math.round(Math.random() * characterListlength)
          password = password + CharacterList .charAt(characterIndex)
        }
        return password
  }
  const  copyToClipboard=()=>{
    const newTextArea=document.createElement('textarea')
    newTextArea.innerText=password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()
  }
  const handleCopyPassword = ()=>{
    copyToClipboard()
  }
  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="generator_header">
            Password Generator
          </h2>
          <div className="generator password" placeholder='Password'>

            <h3>{password}</h3>
            <button className="copy_btn" onClick={handleCopyPassword}>Copy</button>
            <i className="far fa-clipboard"></i>
          </div>
          <div className="from-group">
            <label htmlFor="password-strength" id='pass-strenght'>Password Lenght:{passwordLength}</label>
            <input  defaultValue={passwordLength}
            onChange={(e)=>setPasswordLength(e.target.value)}
            type="number" id='password-strength' name='password-strength' max={15} min={8}/>
           
          </div>

          <div className="from-group">
            <label htmlFor="uppercase-letters">Include Upper case letters</label>
            <input
            checked={includeUpperCase}
            onChange={(e)=>setincludeUpperCase(e.target.checked)}
            type="checkbox" id='uppercase' name='uppercase-letters'/>
          </div>

          <div className="from-group">
            <label htmlFor="lowercase-letters">Include Lower Case  letters</label>
            <input 
            checked={includeLowerCase}
            onChange={(e)=>setincludeLowerCase(e.target.checked)}
            type="checkbox" id='lowercase' name='lowercase-letters' />
          </div>

          <div className="from-group">
            <label htmlFor="Numbers">Include number</label>
            <input
            checked={includeNumber}
            onChange={(e)=> setincludeNumber(e.target.checked) }
            type="checkbox" id='Number' name='Numbers' />
          </div>

          {/* <div className="from-group">
            <label htmlFor="symbols">Include Symbols</label>
            <input 
            checked={includeSymbols}
            onChange={(e)=>setincludeSymbols(e.target.checked)}
            type="checkbox" id='symbols' name='symbols'/>
          </div> */}
          <button className='genetor_btn' onClick={handleGeneratePassword}> Generate Password</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
