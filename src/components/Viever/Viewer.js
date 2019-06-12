import React from 'react';

class Viewer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      mainImg: this.props.phone.images[0]
    }

  }

  chooseMainImg(imageUrl){
    this.setState({
      mainImg: imageUrl
    })
  }
    
  render() {
    return (
    <div>
      <img className="phone" src={this.state.mainImg}/>
      <button onClick={this.props.onBack}>Back</button>
      <button onClick={() => { this.props.addIdToBasket(this.props.phone.id) }}>Add to basket</button>
  
      <h1>{this.props.phone.name}</h1>
      <p>{this.props.phone.description}</p>
  
      <ul className="phone-thumbs">
        { this.props.phone.images.map(imageUrl => (
          <li key={imageUrl}>
            <img src={imageUrl} onClick={() => {this.chooseMainImg(imageUrl)}}/>
          </li>
        )) }
      </ul>
    </div>
    )} 
  
};

export default Viewer;