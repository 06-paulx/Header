import React from 'react';
import ReactDOM from 'react-dom';
import SidePanel from './components/SidePanel.jsx';
import Splash from './components/Splash.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Zubzen',
      summary: 'ENTIRE LOFT IN CANCUN',
      description: "Lounge in the Hammock of a Designer Apartment",
      star: 5,
      reviews: 184,
      photoUrl: 'https://a0.muscache.com/4ea/air/v2/pictures/e83d2486-45f8-4ae0-9122-b604e68782bd.jpg?t=r:w2500-h1500-sfit,e:fjpg-c90'
    }

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
        />
      </section>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));