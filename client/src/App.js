import React from 'react'
import{Admin , Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'

import PostList from './components/PostList'

const App = () => {
  return (
    <div>
      <Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource
        name="super-admin"
        List={PostList}/>
      </Admin>
    </div>
  )
}

export default App