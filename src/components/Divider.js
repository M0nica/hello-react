import React from 'react'

  // Import typefaces
  import 'typeface-montserrat'
  import 'typeface-merriweather'

  import profilePic from './profile-pic.jpg'
  import { rhythm } from '../utils/typography'

  class Divider extends React.Component {
    render() {
      return (

      <hr style={{ border: 'none',
          height: '4px',

          backgroundColor: '#988ca0',
          backgroundPosition: "left bottom",
          backgroundRepeat: "repeat-x",
          backgroundSize: "10px 10px",
}}/>


      )
    }
  }

  export default Divider
