import React from 'react'
import cookie from 'react-cookies'
import axios from 'axios'
import './style.css'

class HomePage extends React.Component {

    componentDidMount=()=>{
        document.body.style.paddingTop=0;
    }

    onClick=()=>{
        console.log(cookie.load('jwtToken'))
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <h1>Home page</h1>
                <button onClick={this.onClick} > get token </button>
            </div>
        )
    }

}
export default HomePage
