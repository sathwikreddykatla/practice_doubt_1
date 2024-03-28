// Write your code here
import {Component} from 'react'

import './index.css'

class Message extends Component {
  state = {status: 'logged_out'}
  render() {
    const {status} = this.state
    if (status === 'logged_out') {
      return <h1>Please Login</h1>
    }
    return <h1>Welcome User</h1>
  }
}

export default Message
