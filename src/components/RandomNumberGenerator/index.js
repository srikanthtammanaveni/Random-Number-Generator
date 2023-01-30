// Write your code here
import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  onChangeNumber = () => {
    this.setState({count: Math.ceil(Math.random() * (100 - 1))})
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" onClick={this.onChangeNumber}>
            Generate
          </button>
          <p className="heading">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
