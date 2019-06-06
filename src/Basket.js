import React from 'react';

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
        <li>Phone 1 <button>x</button></li>
        <li>Phone 2 <button>x</button></li>
        <li>Phone 3 <button>x</button></li>
      </ul>
    </section>
  );
} 
  

};

export default Basket;
