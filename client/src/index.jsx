import React from 'react';
import ReactDOM from 'react-dom';
import SidePanel from './components/SidePanel.jsx';
import Splash from './components/Splash.jsx';
import fetch from 'node-fetch';
import Like from './components/Like.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      summary: '',
      description: '',
      star: '',
      reviews: '',
      photoUrl: '',
      show: false
    }
  }

  showModal() {
    this.setState({show: true})
  }

  hideModal() {
    this.setState({show: false})
  }
  componentDidMount() {
    fetch('/listings')
      .then(response => response.json())
      .then(data => 
        this.setState({
          name: data[0].name,
          summary: data[0].summary,
          description: data[0].description,
          star: data[0].star_rating,
          reviews: data[0].review_count,
          photoUrl: data[0].photo_url
      })
    )
  }

  render() {
    return (
    <div>
      <section className='header'>
        <SidePanel 
          name={this.state.name}
          summary={this.state.summary}
          description={this.state.description}
          stars={this.state.star}
          reviews={this.state.reviews}
        />
        <Splash
          url={this.state.photoUrl}
          showModal={this.showModal.bind(this)}
        />
        <Like 
          show={this.state.show}
          handleClose={this.hideModal.bind(this)}
        />
      </section>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));