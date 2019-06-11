import React from 'react';
import './basketStyle.css'

class Basket extends React.Component {
constructor(props){
  super(props);
  this.state = {
    
  }
}
  
render(){
  
    return (
    <section>
      <p>Shopping Cart</p>
      <ul>
        {this.props.listBasketItems.map(idPhfone => (
          <li key={idPhfone}>{ idPhfone }<button className="basket_button" onClick={() => {this.props.removeFromBasket(idPhfone)}}>x</button></li>
        ))}
        
      </ul>
    </section>
  );
} 
  

};

export default Basket;
