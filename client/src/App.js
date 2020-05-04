import React from 'react';
import { BrowserRouter ,Route } from 'react-router-dom'
import LandingPage from './landingpage'
import HomePage from './components/homePage'



class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
              <div>
                  <Route exact path='/'>
                    <LandingPage></LandingPage>
                  </Route>
                  <Route  exact path='/home' >
                      <HomePage></HomePage>
                  </Route>
              </div>
            </BrowserRouter>
           
        )
    }
}


export default App;


