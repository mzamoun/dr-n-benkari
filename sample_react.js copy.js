'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  changeLiked (isLike) {
    this.setState({ liked: isLike });
  }

  myButton = (isLike, label) => {
    return e(
      'button',
      { onClick: () => this.changeLiked(isLike) },
      e( 'h2', {}, label )
    );
  }

  render() {
    if (this.state.liked) {
      return this.myButton(false, 'Liked :)');
    }

    return this.myButton(true, 'Like');
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);