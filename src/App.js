import React from 'react';
import Head from './components/head'
import Banner from './components/banner'
import Content from './components/content'
import Foot from "./components/foot"
import './App.scss'
function App() {
  return (
    <div className="App">
      <Head></Head>
      <Banner></Banner>
      <Content></Content>
      <Foot></Foot>
    </div>
  );
}

export default App;
