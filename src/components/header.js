import React,{useState} from "react";


function Header(){
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }}
    return(
        <div>
           <button onClick={toggleTheme}>Toggle theme</button>
        </div>
    )
}


export default Header;