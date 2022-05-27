import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      <div>
           <footer className='footer'>
               <span className='text-muted'>All right Reserved 2020 @ISolutions</span>
           </footer>
      </div>
    )
  }
}
