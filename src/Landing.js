import React from 'react'
import {connect} from 'react-redux'
import Header from './Header.js'
import Footer from './Footer.js'
import ReactDOM from 'react-dom'

class Landing extends React.Component {
  componentDidUpdate () {
    ReactDOM.findDOMNode(this).scrollTop = 0
  }

  componentWillMount () {
    window.scrollTo(0, 0)
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    return (
      <div className='landing'>
        <Header className='main-header' />
        <div className='show-strip'><a href='https://nwfilmforum.org/events/future-is-zero/' target='_blank'><h2 className='show-strip-text'>TICKETS ON SALE NOW FOR FEB 16 + 17!</h2></a></div>
        <iframe className='video-player' src='https://player.vimeo.com/video/191094791' width='640' height='360' frameBorder='0' webkitallowfullscreen mozallowfullscreen allowFullscreen />
        <div className='about'>
          <img src='./img/greenborders.png' className='top-border' />
          <p className='about-text'>The Future is 0 is a satirical, live game show held at Northwest Film Forum featuring artists from different disciplines competing against each other in a battle of mental, physical, & psychological challenges.</p>
          <img src='./img/pinkborders.png' className='lower-border' />
        </div>
        <div className='team-logo'>
          <h1 className='team-text'>The <br /> Team</h1>
        </div>
        <div className='team'>
          <img src='./img/whiteborder.png' className='team-top-border' />
          <div className='team-border'>
            <ul>
              <li><h1>Claire Buss</h1></li>
              <li><h2>Creator, Host, Writer</h2></li>
              <li><h1>Kat O&#39;Hara</h1></li>
              <li><h2>Creator, Producer</h2></li>
              <li><h1>Amanda K. Pitsch</h1></li>
              <li><h2>Production Designer, Art Director</h2></li>
              <li><h1>Travis Baer</h1></li>
              <li><h2>Chief Technology Officer, Scientist</h2></li>
              <li><h1>Nick Shively</h1></li>
              <li><h2>Graphic, Animation Designer</h2></li>
            </ul>
          </div>
          <img src='./img/whiteborder.png' className='team-bottom-border' />
        </div>
        <Footer className='main-footer' />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Landing)
