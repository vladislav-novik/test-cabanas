import React, { Component } from 'react';

import {
  Cabanas,
  Header,
  Filters,
  Footer,
  SearchBar,
  Subscribe
} from './components';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="container">
          <Filters />
          <SearchBar />
          <Cabanas />
          <Subscribe />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
