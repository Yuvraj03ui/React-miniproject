

import React from 'react'
import ReactDOM from 'react-Dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1> I am the best person </h1>
    </div>
  )
}


const Anotherelement =(
  <a href="https://google.com" target='_black'> visit google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
   
   <App/>

)
