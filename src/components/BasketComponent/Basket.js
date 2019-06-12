import React from 'react';
import styles from './basketStyle.module.css'

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
          <li 
            key={ idPhfone }>
              <p>{ idPhfone[0] }</p>
              <p>{ idPhfone[1] }</p>
            
            <button 
              className={styles.button}
              onClick={() => {this.props.removeFromBasket(idPhfone)}}>x
            </button>
          </li>
        ))}
        
      </ul>
    </section>
  );
} 
  

};

export default Basket;
