import './App.css'
import React from 'react'
 
import { BrowserRouter } from  'react-router-dom' 
 
import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
 
const App = props => (
    <div className="App">
        <BrowserRouter> 
            <Menu />
            <Content />
        </BrowserRouter> 
    </div>
)
 
export default App