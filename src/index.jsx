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
      currentPic: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:5000/photos')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ photos: data, currentPic: data[0] });
      })
  }

  render () {
    return (
      <div className="app">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Journey to Myself</Navbar.Brand>
          <Nav className="mr-auto">
            <Navbar.Text className="pull-right" href="#features">About</Navbar.Text>
          </Nav>
        </Navbar>
        <ControlledCarousel photos={this.state.photos} />
        <footer>
          <p>&copy; 2020 Jackson Reinagel </p>
        </footer>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));