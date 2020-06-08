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
      currentPic: {}
    };
  }

  componentDidMount(photo_id) {
    fetch(`http://localhost:5000/photos/${photo_id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({currentPic: data});
      })
  }

  render () {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Journey to Myself</Navbar.Brand>
          <Nav className="mr-auto">
            <Navbar.Text className="pull-right">About</Navbar.Text>
          </Nav>
        </Navbar>
        <ControlledCarousel currentPic={this.state.currentPic} />
        <footer>
          <p>&copy; 2020 Jackson Reinagel </p>
        </footer>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));