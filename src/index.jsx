import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import ControlledCarousel from './components/Carousel.jsx';
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
  }

  componentDidMount() {
    fetch('http://localhost:5000/photos')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ photos: data, currentPic: data[0] });
      })
  }

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
        <p id="blurb" style={{ display: this.state.show ? "block" : "none" }}>This project is a reflection on my physical transition. It covers my first six years on T. Click through to see how I've changed!</p>
        <ControlledCarousel photos={this.state.photos} />
        <div className="slidecontainer">
          <Form.Control type="range" min="0" max="70" defaultValue="0" className="slider" id="slider" />
          <p>Months on T: <span id="label">{this.state.currentPic.t_time}</span></p>
        </div>
        <footer>
          <p>&copy; 2020 Jackson Reinagel </p>
        </footer>
      </div>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('app'));