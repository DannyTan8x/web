// index.js
// This is the main entry point of our application
import React from 'react';
import ReactDOM from 'react-dom';

//匯入 Apollo 函式庫
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
//匯入路徑
import Pages from './pages';
//全域樣式
import GlobalStyles from './components/GlobalStyles';

//配置API URI 和快取
const uri = process.env.API_URI;
const cache = new InMemoryCache();

//配置 Apollo Client
const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
});
const App = () => (
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
