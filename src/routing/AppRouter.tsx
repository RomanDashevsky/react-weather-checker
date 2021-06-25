import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppConfig from '../pages/app-config/AppConfig'
import WeatherChecker from '../pages/weather-checker/WeatherChecker'

const AppRouter = () => {

  return (
    <Switch>
      <Route path="/configs" exact>
        <AppConfig />
      </Route>
      <Route path="/" exact>
        <WeatherChecker />
      </Route>
    </Switch>
  )
}

export default AppRouter;
