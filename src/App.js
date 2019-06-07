import React from 'react';

import { getAll, getById } from './api/phone'
import Basket from './Basket';
import Filter from './Filter';
import Catalog from './Catalog';
import Viewer from './Viewer';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: [],
      
    };
  }

  removeIdFromBasket(id){
    for(let i = 0; this.state.basketItems.length; i++){
      if(id === this.state.basketItems[i]){
        this.setState({
          basketItems: this.state.basketItems.splice(i,1)
        })
      }
    }
  }

  addIdToBasket(id){
    
    this.setState({
      basketItems: this.state.basketItems.concat(id)
    })
  }


  render() {
    
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
              <Basket listBasketItems={this.state.basketItems}
              removeFromBasket={ (id) => {this.removeIdFromBasket(id)} }
              />
            </div>

            <div className="col-md-10">
              { this.state.selectedPhone ? (
                <Viewer
                  phone={this.state.selectedPhone}
                  onBack={() => {
                    this.setState({
                      selectedPhone: null,
                    });
                  }}
                  addIdToBasket = { (id) => {this.addIdToBasket(id)}}
                />
              ) : (
                <Catalog
                  phones={this.state.phones}
                  onPhoneSelected={(phoneId) => {
                    this.setState({
                      selectedPhone: getById(phoneId),
                    });
                  }}
                  addIdToBasket = { (id) => {this.addIdToBasket(id)}}
                />
              ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
