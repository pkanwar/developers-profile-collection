import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Explore from './Explore';
import AddDev from './AddDeveloperInfo';



class DevApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {isDevPresent: false};
}

  render(){
      return <div>
              <Header />
              <Explore />
              <AddDev />
              <Footer />
            </div>
  }
}

ReactDOM.render(
  <DevApp />,
  document.getElementById('root')
);

