import React, { lazy, Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import './App.css'

const StartPage = lazy(() => import('../../pages/StartPage/StartPage'))
const GamePage = lazy(() => import('../../pages/GamePage/GamePage'))
const GameOverPage = lazy(() => import('../../pages/GameOverPage/GameOverPage'))
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Suspense fallback={null}>
            <Switch>
              <Route path="/" exact>
                <StartPage />
              </Route>
              <Route path="/game/total">
                <GameOverPage />
              </Route>
              <Route path="/game">
                <GamePage />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Provider>
    </BrowserRouter>
  )
}

export default App
