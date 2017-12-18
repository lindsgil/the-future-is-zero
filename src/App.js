import React from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './Landing'
import Vids from './Vids'
import {PressPage} from './PressPage.js'
import {HallOfFame} from './HallOfFame.js'
import './App.css'

export default class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className='app'>
            <Route path='/' exact component={Landing} />
            <Route
              path='/presspage' exact
              component={PressPage}
            />
            <Route
              path='/vids' exact
              component={Vids}
            />
            <Route
              path='/halloffame' exact
              component={HallOfFame}
            />
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}
