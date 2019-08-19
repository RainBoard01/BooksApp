import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import bg from './media/bg.jpg'
import './css/styles.css'

import BookList from './components/BookList'
import NavBar from './components/NavBar'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  return (
    <ApolloProvider client={ client }>
      <div className="w-screen h-screen">
        <div className="h-screen bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(${ bg })` }}></div>
        <div className="appStyle text-white flex flex-col">
          <NavBar/>
          <BookList/>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;