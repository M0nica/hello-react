import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Monica Powell`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p>
          Written by <strong>Monica Powell</strong>,  web developer who is passionate about creating more enjoyable digital products and is currently learning React.{' '}
          <a href="https://twitter.com/waterproofheart">
            <i className="fa fa-twitter"></i>
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
