import React from 'react';

class SimplerComponent extends Component {
  constructor() {
    this.changeText = this.changeText.bind(this)
  }
  var moodText = "I am just happy" ;
  changeText() {
    moodText = "I am no longer as happy" ;
  }

  render() {
    return (
      <div onClick={this.changeText}>
        {this.moodText}
      </div>
    )
  }
}
