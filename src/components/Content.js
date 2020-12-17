import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

// routes config
import routes from './routes'

const loading = <div className="loading"></div>

const Content = () => {
  return (
    <main id="js-main" className="main">
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              )
            )
          })}
          <Redirect from="/" to="/top" />
        </Switch>
      </Suspense>
    </main>
  )
}

export default React.memo(Content)
