import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import ReactDOM from 'react-dom'

export default class Vids extends React.Component {

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
      <div id='vids'>
        <Header className='main-header' />
        <div className='press-one hof-div'>
          <img src='./img/greenborders.png' className='press-top-border' />
          <iframe width='560' height='315' src='https://www.youtube.com/embed/sm-0L4aXIY0?showinfo=0' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen className='vid-div' />
          <h1 className='clip-header'>Episode 6 -- Forever Young</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-one hof-div'>
          <img src='./img/greenborders.png' className='press-top-border' />
          <iframe width='560' height='315' src='https://www.youtube.com/embed/2AQpyjcobZA?showinfo=0' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen className='vid-div' />
          <h1 className='clip-header'>Episode 6 -- Carboload</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-one hof-div'>
          <img src='./img/greenborders.png' className='press-top-border' />
          <iframe width='560' height='315' src='https://www.youtube.com/embed/XwAIdW3xNd0?showinfo=0' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen className='vid-div' />
          <h1 className='clip-header'>Episode 5 -- The Cloud</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-one hof-div'>
          <img src='./img/greenborders.png' className='press-top-border' />
          <iframe width='560' height='315' src='https://www.youtube.com/embed/57Pt_CY6Qxw?showinfo=0' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen className='vid-div' />
          <h1 className='clip-header'>Episode 5 -- Isolation Station</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-one hof-div'>
          <img src='./img/greenborders.png' className='press-top-border' />
          <iframe width='560' height='315' src='https://www.youtube.com/embed/3XasqWEJe1U?showinfo=0' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen className='vid-div' />
          <h1 className='clip-header'>Episode 5 -- Ring A Ding Ding</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-one hof-div'>
          <img src='./img/greenborders.png' className='press-top-border' />
          <iframe width='560' height='315' src='https://www.youtube.com/embed/lT2FThBfFv0?showinfo=0' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen className='vid-div' />
          <h1 className='clip-header'>Episode 4 -- Fulfillment Center</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-one hof-div'>
          <img src='./img/greenborders.png' className='press-top-border' />
          <iframe width='560' height='315' src='https://www.youtube.com/embed/mO_ULIe9Sps?showinfo=0' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen className='vid-div' />
          <h1 className='clip-header'>Episode 4 -- Ring A Ding Ding</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-one hof-div'>
          <img src='./img/greenborders.png' className='press-top-border' />
          <iframe width='560' height='315' src='https://www.youtube.com/embed/muu9hx3jSpw?showinfo=0' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen className='vid-div' />
          <h1 className='clip-header'>Episode 3 -- Obscure Pop</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-one hof-div'>
          <img src='./img/greenborders.png' className='press-top-border' />
          <iframe width='560' height='315' src='https://www.youtube.com/embed/W7RPyQ0CrGk?showinfo=0' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen className='vid-div' />
          <h1 className='clip-header'>Episode 3 -- Never Read The Comments</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-one hof-div'>
          <img src='./img/greenborders.png' className='press-top-border' />
          <iframe width='560' height='315' src='https://www.youtube.com/embed/mw0VS2xf8CE?showinfo=0' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen className='vid-div' />
          <h1 className='clip-header'>Episode 2 -- Infinite Brunch</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-one hof-div'>
          <img src='./img/greenborders.png' className='press-top-border' />
          <iframe width='560' height='315' src='https://www.youtube.com/embed/Fjm9mV4Gdyw?showinfo=0' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen className='vid-div' />
          <h1 className='clip-header'>Episode 2 -- The Hot Seat</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-last hof-div'>
          <img src='./img/greenborders.png' className='press-top-border' />
          <iframe width='560' height='315' src='https://www.youtube.com/embed/aHdRSZ2CWd8?showinfo=0' frameBorder='0' gesture='media' allow='encrypted-media' allowFullScreen className='vid-div' />
          <h1 className='clip-header'>Episode 2 -- That's What The Money's For</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <Footer className='main-footer' />
      </div>
    )
  }
}
