// Write your code here
import {Component} from 'react'

import Message from '.components/Message/index.js'

import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="background">
        <div className="card">
          <Message />
        </div>
      </div>
    )
  }
}

export default Home
