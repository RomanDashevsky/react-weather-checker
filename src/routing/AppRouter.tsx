import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AppConfig from '../pages/AppConfig'
import WhetherChecker from '../pages/WhetherChecker'

const AppRouter = () => {

  return (
    <Switch>
      <Route path="/configs" exact>
        <AppConfig />
      </Route>
      <Route path="/" exact>
        <WhetherChecker />
      </Route>
    </Switch>
  )
}

export default AppRouter;
