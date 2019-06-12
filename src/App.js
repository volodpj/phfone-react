import React from 'react';

import { getAll, getById } from './api/phone'
import Basket from './components/BasketComponent/Basket';
import Filter from './components/Filter/Filter';
import Catalog from './components/Catalog/Catalog';
import Viewer from './components/Viever/Viewer';

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

      let stateBasketItems = this.state.basketItems;

      if (stateBasketItems.length === 0) {
        console.log(id)
        this.setState({
          basketItems: [
            ...this.state.basketItems,
            [id, 1]
          ]
        })
        
      } else {
        for (let i = 0; i < stateBasketItems.length; i++) {

          if (stateBasketItems[i][0] === id) {
            stateBasketItems[i][1] = stateBasketItems[i][1] + 1;
            this.setState({
              basketItems: stateBasketItems
            })
          } else {
            this.setState({
              basketItems: [
                ...this.state.basketItems,
                [id, 1]
              ]
            })
          }
        }
      }


    }



    // for(let i = 0; i < stateBasketItems.length; i++){

    //   if(stateBasketItems[i][0] === id){
    //     stateBasketItems[i][1] = stateBasketItems[i][1] + 1;
    //     this.setState({
    //       basketItems: stateBasketItems
    //     })
    //   }else{
    //     this.setState({
    //       basketItems: [
    //         ...this.state.basketItems,
    //         [id, 1]
    //       ]
    //     })
    //   }
    // }



    this.removeIdFromBasket = (id) => {

      let arr = this.state.basketItems;

      for (let i = 0; i < arr.length; i++) {
        if (id === arr[i]) {
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
                removeFromBasket={(id) => { this.removeIdFromBasket(id) }}
              />
            </div>

            <div className="col-md-10">
              {this.state.selectedPhone ? (
                <Viewer
                  phone={this.state.selectedPhone}
                  onBack={() => {
                    this.setState({
                      selectedPhone: null,
                    });
                  }}
                  addIdToBasket={(id) => { this.addIdToBasket(id) }}
                />
              ) : (
                  <Catalog
                    phones={this.state.phones}
                    onPhoneSelected={(phoneId) => {
                      this.setState({
                        selectedPhone: getById(phoneId),
                      });
                    }}
                    addIdToBasket={this.addIdToBasket}
                  />
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
