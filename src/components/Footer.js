import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Footer extends React.Component {
  render() {
    return (

        <p style={{
          color: '#625968',
      }}>

      Made with <i className="fa fa-heart" aria-hidden="true" style={{
        color: "#d8a9a9",
      }}></i> &amp; <i className="fa fa-code" aria-hidden="true"></i>
 &nbsp; in Brooklyn, New York.
      </p>

    )
  }
}

export default Footer
