

const pages =  [
    // Public pages
    {
      exact: true,
      path: '/login',
      component: LoginPage,
      layout: PublicLayout
    },
    // Authenticated pages
    {
      exact: false,
      path: '/dashboard',
      component: DashboardPage,
      layout: AuthLayout
    },
    {
        exact: false,
        path: '/setting',
        component: SettingPage,
        layout: SettingLayout
      }
  ];

  const App = () => {
    return (
        <Router history={history}>
          <Switch>
             {pages.map( (i, index) => {
                 <Route key={index}
                 exact={i.exact}
                 path={i.path}
                 render={props => (
                  <i.layout history={props.history}>
                     <i.component {...props} />
                  </i.layout>
                 )} />
             })}
          </Switch>
        </Router>
    )

  }