import React from 'react'
import { GraphQL, GraphQLProvider } from 'graphql-react'

import bg from './media/bg.jpg'
import './css/styles.css'

import BookList from './components/BookList'
import NavBar from './components/NavBar'

const graphql = new GraphQL();

function App() {
  return (
    <GraphQLProvider graphql={ graphql }>
      <div className="w-screen h-screen">
        <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${ bg })` }}></div>
        <div className="appStyle text-white flex flex-col items-center">
          <NavBar/>
          <BookList/>
        </div>
      </div>
    </GraphQLProvider>
  );
}

export default App;