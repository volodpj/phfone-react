import React from 'react';

class Basket extends React.Component {
constructor(props){
  super(props);
  this.state = {
    
  }
}

  
render(props){
  console.log(this.props)
    return (
    <section>
      <p>Shopping Cart</p>
      <ul>
        {this.props.listBasketItems.map(idPhfone => (
          <li key={idPhfone}>{ idPhfone }<button>x</button></li>
        ))}
        
      </ul>
    </section>
  );
} 
  

};

export default Basket;
