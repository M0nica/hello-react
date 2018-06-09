import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import './Footer.css'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Footer extends React.Component {
  render() {
    return (

    <p>
          Made with <i className="fa fa-heart" aria-hidden="true"></i> &amp; <i className="fa fa-code" aria-hidden="true"></i>
          &nbsp; in Brooklyn, New York by <a href="http://aboutmonica.com">Monica Powell</a>.
    </p>
    )
  }
}

export default Footer
