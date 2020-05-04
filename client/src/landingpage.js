import React from 'react';
import NavBar from './NavBar'
import './App.css'


class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className="card bg-dark text-white rounded-0">
                    <img style={{height:'100%'}} src={require('./images/hero.jpg')} alt="Not found" />
                    <div className="card-img-overlay container" style={{textAlign:'center'}}>
                        <div className='row' >
                            <div style={{fontSize:'50px',fontWeight:'bold'}} className='col' >
                                Your Class is Just a Click Away....
                            </div>
                        </div>  

                        <div className='row' >
                            <div style={{fontSize:'30px',fontWeight:'bold'}} className='col' >
                                Learn About Easy Class in two minutes!
                            </div>
                        </div>   

                        <div className='row justify-content-center' >
                           <button id='watchVideoBtn'  style={{color:'white'}} type="button" className="text-center btn btn-lg btn-outline-light">Watch Video</button>
                        </div>

                        <div className='row justify-content-center' >
                           <button id='signUp' style={{color:'5FB49B',margin:30}} type="button" className="text-center btn btn-lg col-4"> FREE SignUp </button>
                        </div>                   
                    </div>
                </div>
              
            </div>
        )
    }
}


export default LandingPage;


