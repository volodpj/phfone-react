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

      if(this.state.basketItems.length === 0){
        this.setState({
          basketItems: [
            [id, 1]
          ]
        })
      }else{
        for(let i = 0; i < this.state.basketItems.length; i++){
          if(id === this.state.basketItems[i][0]){
            let stateBasketItems = this.state.basketItems;
            stateBasketItems[i][1] = stateBasketItems[i][1] + 1;
            this.setState({
              basketItems: stateBasketItems
            })
          }else{
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



 



    this.removeIdFromBasket = (id) => {

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
                removeFromBasket={this.removeIdFromBasket }
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
                  addIdToBasket={this.addIdToBasket}
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
// let stateBasketItems = this.state.basketItems;

// if (stateBasketItems.length === 0) {
//   console.log(id)
//   this.setState({
//     basketItems: [
//       ...this.state.basketItems,
//       [id, 1]
//     ]
//   })
  
// } else {
//   for (let i = 0; i < stateBasketItems.length; i++) {

//     if (stateBasketItems[i][0] === id) {
//       stateBasketItems[i][1] = stateBasketItems[i][1] + 1;
//       this.setState({
//         basketItems: stateBasketItems
//       })
//     } else {
//       this.setState({
//         basketItems: [
//           ...this.state.basketItems,
//           [id, 1]
//         ]
//       })
//     }
//   }
// }