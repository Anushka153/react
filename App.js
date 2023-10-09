import React from 'react'
import ReactDOM from 'react-dom/client'
import StarRating from './src/components/star/star'



const Header = () => {
  return (
    <div className='header'>
      <div>
        <img className='logo' src=""></img>
      </div>
      <div >
        <ul style={{flexDirection:'row'}}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className='body'>
      <div className='container' >
      <input type="search"style={{height: 30, width:150, backgroundColor: 'white'}}>
        </input>
        Search
      </div>
      <div className='res_container'>
      <ResCard/>
      </div>
    </div>
  )
}

const ResCard =()=> {
  return(
    <div className='resturant_card'>
      <div>

      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

const AppLayout =()=>{
  return (
    <div className='app-layout'>
      {/* <Header/>
      <Body/> */}
      <StarRating limit={5}/>
    </div>
  )
}
 
const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)

