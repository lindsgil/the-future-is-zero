import React from 'react'
import Header from './Header.js'
import Footer from './Footer.js'
import ReactDOM from 'react-dom'

export class HallOfFame extends React.Component {

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
      <div id='hall-of-fame'>
        <Header className='main-header' />
        <div className='press-one hof-div'>
          <h1 className='hof'>Episode 6</h1>
          <img src='./img/greenborders.png' className='press-top-border' />
          <img src='./img/contestants/taylar.jpg' className='hof-photo' />
          <img src='./img/contestants/kelton.jpg' className='hof-photo' />
          <img src='./img/contestants/rachel.jpg' className='hof-photo' />
          <h1 className='hof'>Winner: Rachel Ratner</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-two hof-div'>
          <h1 className='hof'>Episode 5</h1>
          <img src='./img/greenborders.png' className='press-top-border' />
          <img src='./img/contestants/markeith.jpg' className='hof-photo' />
          <img src='./img/contestants/mario.jpg' className='hof-photo' />
          <img src='./img/contestants/guppie.jpg' className='hof-photo' />
          <h1 className='hof'>Winner: Markeith Wiley</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-three hof-div'>
          <h1 className='hof'>Episode 4</h1>
          <img src='./img/greenborders.png' className='press-top-border' />
          <img src='./img/contestants/michael.jpg' className='hof-photo' />
          <img src='./img/contestants/shana.jpg' className='hof-photo' />
          <img src='./img/contestants/donormaal.jpg' className='hof-photo' />
          <h1 className='hof'>Winner: Shana Cleveland</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-four hof-div'>
          <h1 className='hof'>Episode 3</h1>
          <img src='./img/greenborders.png' className='press-top-border' />
          <img src='./img/contestants/ken.jpg' className='hof-photo' />
          <img src='./img/contestants/sj.jpg' className='hof-photo' />
          <img src='./img/contestants/shinyu.jpg' className='hof-photo' />
          <h1 className='hof'>Winner: Ken Jennings</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-five hof-div'>
          <h1 className='hof'>Episode 2</h1>
          <img src='./img/greenborders.png' className='press-top-border' />
          <img src='./img/contestants/derek.jpg' className='hof-photo' />
          <img src='./img/contestants/ceci.jpg' className='hof-photo' />
          <img src='./img/contestants/amber.jpg' className='hof-photo' />
          <h1 className='hof'>Winner: Ceci Gomez</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <div className='press-six hof-div'>
          <h1 className='hof'>Episode 1</h1>
          <img src='./img/greenborders.png' className='press-top-border' />
          <h1 className='hof six-winner'>Winner: Patricia Boiko</h1>
          <img src='./img/pinkborders.png' className='press-lower-border' />
        </div>
        <Footer className='main-footer' />
      </div>
    )
  }
}
