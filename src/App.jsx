import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import ControlledCarousel from './components/Carousel.jsx';
import photodb from './selfies.json';
import './custom.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      currentPic: {},
      show: false
    }

    this.aboutMe = this.aboutMe.bind(this);
  };

  componentDidMount() {
    this.setState({ photos: photodb });
  };

  // componentDidMount() {
  //   fetch('http://localhost:5000/photos')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({ photos: data });
  //     })
  // };

  aboutMe() {
    this.setState({ show: !this.state.show })
  };

  render () {
    return (
      <div className="app">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Journey to Myself</Navbar.Brand>
          <Nav className="mr-auto">
            <Navbar.Text className="pull-right" onClick={this.aboutMe}>About</Navbar.Text>
          </Nav>
        </Navbar>
        <p id="blurb" style={{ display: this.state.show ? "block" : "none" }}>This project is a reflection on my physical transition.
        It covers my first six years on testosterone. Click through to see how I've changed!</p>
        <ControlledCarousel pics={this.state.photos} />
        <footer>
          <p>&copy; 2020 Jackson Reinagel </p>
        </footer>
      </div>
    )
  }
}

export default App;