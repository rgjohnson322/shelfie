import React from 'react';
import './App.css';
import './reset.css';
import axios from "axios";
import { HashRouter } from "react-router-dom";
import routes from './routes';
import Header from './Components/Header/Header'
// import Dashboard from './Components/Dashboard/Dashboard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      // list:"inventory"
    };
  }
  render() {
    return (
      <form>
      <HashRouter>
        <div className="App">
          <Header />

          {routes}
        </div>
      </HashRouter>
      
        onSubmit={e => {
          e.preventDefault();
          axios.get("/api/inventory", {
            image: this.state.image,
            event: this.state.name,
            date: this.state.price
          })
            .then(response => {
              this.props.changeSection();
            })
            .catch(error => {
              this.setState({ error: "an error ocurred" });
            });
           
        }}
         </form>
        
        );
       
      }
    
    }
    
    
    export default App;
