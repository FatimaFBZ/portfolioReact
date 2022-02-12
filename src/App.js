import React, {useState} from "react";
import Header from "./components/Header"
import AboutMe from './components/AboutMe'
import Contacts from "./components/Contacts";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
  const [state,setState] = useState('AboutMe')
  const handleClick=(page)=>{
    setState(page)
  }

  const contactPage=()=>{
    if(state ==='AboutMe'){
      return (<AboutMe />)
    }else if(state==='Contacts'){
      return(<Contacts />)
    }else if(state==='Resume'){
      return(<Resume />)
    }else if(state==='Work'){
      return(<Work />)
    }

  }
  return (
    <div className="App">
     
      <Header handleClick = {handleClick} />
      {contactPage()}
      
    
     <Footer />
     


      </div>
   
  );
}

export default App;
