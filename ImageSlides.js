'use strict';

const e = React.createElement;

class ImageSlides extends CompoParent {
  constructor(props) {
    super(props);
  }


  render() {
    e('div', 
      {id:'Acc'
      , style:'width: 100%; height: 100%;'}
      , [
          e( 'video', {id:'myVideo', autoplay:true, muted:true, loop:true}
          ,  ),
          e( 'div', {id:'content', class:'content'}
          ,  ),
        ]
      );
  }
}
