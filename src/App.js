
import React from "react";
import {data, info, puzzle} from "../stockdata.json"

class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      big: ''
    }
  }
  
  componentDidMount(){
    data.sort((a, b)=>{
      return ((a.high - a.low)*a.volume) - ((b.high - b.low)*b.volume)
    })
    this.setState({
      big: data[data.length - 1]
    })
  }
  
  roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }
  
  render() {
    let {big} = this.state;
    const { name } = this.props;
    return (
      <div>
        <h1>
          Hello {name}
        </h1>
        <div style={{marginBottom: 15}}>
        {puzzle}
        </div>
        <div>
        {"You should buy on date: " + big.quote_date}
        </div>
        <div>
        {"Buy at a price of: " + big.low}
        </div>
      <div>
      {"Sell at a price of: " + big.high}
      </div>
      <div>
      {"Profit will be: " +
      this.roundToTwo(((big.high - big.low)*big.volume))}
      </div>
      </div>
    );
  }
}

export default App;
