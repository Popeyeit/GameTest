import React, { lazy, Suspense } from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import "./App.css"

const StartPage = lazy(() => import("../../pages/StartPage/StartPage"))
const GamePage = lazy(() => import("../../pages/GamePage/GamePage"))
const GameOverPage = lazy(() => import("../../pages/GaveOverPage/GaveOverPage"))
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={null}>
          <Switch>
            <Route path="/">
              <StartPage />
            </Route>
            <Route path="/game">
              <GamePage />
            </Route>
            <Route path="Game-over">
              <GameOverPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  )
}

export default App
