import React, { useEffect } from 'react'
import apiClient from './services/api'
import { reducer, initState } from './reducer'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import TablesPage from './pages/TablesPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

export const AuthContext = React.createContext()

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initState)

  useEffect(() => {
    apiClient.get('/sanctum/csrf-cookie').then((res) => {
      apiClient
        .get('/')
        .then((res) => {
          dispatch({
            type: 'LOGGED_IN',
            payload: res.data,
          })
        })
        .catch((e) => {
          if (e && e.response.status === 401) {
            dispatch({
              type: 'LOGGED_OUT',
              payload: res,
            })
          }
        })
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {!state.loading && (
        <Router>
          <Switch>
            {state.isAuthenticated ? (
              <>
                <Route path='/tables' component={TablesPage} />
                <Route exact path='/' component={HomePage} />
                <Redirect to='/' />
              </>
            ) : (
              <>
                <Route path='/login' component={LoginPage} />
                <Redirect to='/login' />
              </>
            )}
          </Switch>
        </Router>
      )}
    </AuthContext.Provider>
  )
}

export default App
