import management from '../page/management/_dir.js'

const P404 = {
  template: `
  <h1>404</h1>
  `
}

const routes = [
  {
    path: '/management',
    name: 'management',
    component: management.pageManagement,
    redirect: '/management/dashboard',
    children:[
      { path: 'dashboard', component: management.pageDashboard },
      { 
        path: 'control-panel', 
        component: management.pageControlPanel,
        redirect: 'control-panel/dashboard',
        children: [
          { path: 'dashboard', component: management.controlPanel.pageDashboard },
          { path: 'users-and-groups', component: management.controlPanel.pageUsersAndGroups },
          { path: 'users-and-groups/:id/:action', component: management.controlPanel.usersAndGroups.pageDetail },
          { path: '*', component: P404 }
        ] 
      },
      { path: '*', component: P404 }
    ]
  }
]

export default routes
