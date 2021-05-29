'use strict';

const e = React.createElement;

class CompoParent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  changeLiked (isLike) {
    this.setState({ liked: isLike });
  }

  notYetImplemented() {
    alert('Not Implemented Yet !');
  }

  render() {
    e('div', 
      {}
      , ''
      );
  }
}
