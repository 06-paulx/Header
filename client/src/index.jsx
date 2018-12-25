import React from 'react';
import ReactDOM from 'react-dom';
import SidePanel from './components/SidePanel.jsx';
import Splash from './components/Splash.jsx';
import fetch from 'node-fetch';
import Like from './components/Like.jsx';
import Share from './components/Share.jsx';

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
      showLike: false,
      showShare: false,
      input: '',
      saveList: ['New York', 'Vacation Places', 'Mobile Starred Listings', 'Dream Homes']
    }
  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  handleCreateClick() {
    var array = this.state.saveList
    array.unshift(this.state.input)
    this.setState({
      saveList: array,
      input: '',
    })

    console.log(this.state.saveList)
  }


  showLikeModal() {
    this.setState({showLike: true})
  }

  hideLikeModal() {
    this.setState({showLike: false})
  }

  showShareModal() {
    this.setState({ showShare: true })
  }

  hideShareModal() {
    this.setState({ showShare: false })
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
          showLikeModal={this.showLikeModal.bind(this)}
          showShareModal={this.showShareModal.bind(this)}
        />
        <Like 
          show={this.state.showLike}
          handleClose={this.hideLikeModal.bind(this)}
          handleChange={this.handleChange.bind(this)}
          handleCreateClick={this.handleCreateClick.bind(this)}
          saveList={this.state.saveList}
        />
        <Share 
          show={this.state.showShare}
          handleClose={this.hideShareModal.bind(this)}
          description={this.state.description}
        />
      </section>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));