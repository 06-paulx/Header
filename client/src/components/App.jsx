import React from 'react';
import SidePanel from './SidePanel.jsx';
import Splash from './Splash.jsx';
import fetch from 'node-fetch';
import Like from './Like.jsx';
import Share from './Share.jsx';

export default class App extends React.Component {
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
    document.getElementById("create-button").disabled = false;
  }

  handleCreateClick(e) {
    var array = this.state.saveList
    array.unshift(this.state.input)
    this.setState({
      saveList: array,
      input: '',
    })
    document.getElementById("name-your-list").value = '';
    document.getElementById("create-button").disabled = true;
  }

  handleCreateNewListClick() {
    document.getElementById("add-form").style.display = "block";
    document.getElementById("create-new-list").style.display = "none";
  }

  handleCancelClick() {
    document.getElementById("add-form").style.display = "none";
    document.getElementById("create-new-list").style.display = "block";
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
    debugger;
    // var listingId = window.location.pathname.slice(1);
    // console.log(listingId)
    console.log(this.props.id)
    fetch('/api/listings/' + this.props.id)
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
    document.getElementById("create-button").disabled = true;
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
          url={this.state.photoUrl}
          location={this.state.name}
          description={this.state.description}
          stars={this.state.star}
          reviews={this.state.reviews}
          handleCreateNewListClick={this.handleCreateNewListClick.bind(this)}
          handleCancelClick={this.handleCancelClick.bind(this)}
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