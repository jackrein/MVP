import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
    this.slide = this.slide.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:5000/photos')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ photos: data, currentPic: data[0] });
      })
  };

  aboutMe() {
    this.setState({ show: !this.state.show })
  };

  slide(e) {
    if (e.target.value < 1) {this.setState({ currentPic: this.state.photos[0] })}
    else if (e.target.value < 3) {this.setState({ currentPic: this.state.photos[1] })}
    else if (e.target.value < 5) {this.setState({ currentPic: this.state.photos[2] })}
    else if (e.target.value < 11) {this.setState({ currentPic: this.state.photos[3] })}
    else if (e.target.value < 17) {this.setState({ currentPic: this.state.photos[4] })}
    else if (e.target.value < 27) {this.setState({ currentPic: this.state.photos[5] })}
    else if (e.target.value < 33) {this.setState({ currentPic: this.state.photos[6] })}
    else if (e.target.value < 37) {this.setState({ currentPic: this.state.photos[7] })}
    else if (e.target.value < 42) {this.setState({ currentPic: this.state.photos[8] })}
    else if (e.target.value < 45) {this.setState({ currentPic: this.state.photos[9] })}
    else if (e.target.value < 56) {this.setState({ currentPic: this.state.photos[10] })}
    else if (e.target.value < 69) {this.setState({ currentPic: this.state.photos[11] })}
    else {this.setState({ currentPic: this.state.photos[12] })}
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
        <ControlledCarousel currentPic={this.state.currentPic} />
        <div className="slidecontainer">
          <input type="range" min="0" max="70" defaultValue="0" className="slider" onChange={this.slide}/>
          <p>Time on T: <span id="label">{this.state.currentPic.t_time}</span></p>
        </div>
        <footer>
          <p>&copy; 2020 Jackson Reinagel </p>
        </footer>
      </div>
    )

  }
}

ReactDOM.render(<App />, document.getElementById('app'));