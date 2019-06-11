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

    this.addIdToBasket = (id) => {
      this.setState({
        basketItems: this.state.basketItems.concat(id)
      })
    }

    this.removeIdFromBasket = (id) => {
      
      let arr = this.state.basketItems;
    
      for(let i = 0; i < arr.length; i++){
        if(id === arr[i]){
          arr.splice(i, 1);
          this.setState({
            basketItems: arr
          })
        }
      }

    }
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
                  addIdToBasket = {this.addIdToBasket}
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
