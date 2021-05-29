'use strict';

const e = React.createElement;

class VideoPage extends CompoParent {
  constructor(props) {
    super(props);
  }

  render() {
    e('div', 
      {id:'VideoParent'
      , style:'width: 100%; height: 100%;'}
      , [
          e( 'video', {id:'myVideo', autoplay:true, muted:true, loop:true}
          ,  
            e('source', {src:"res/Movie_combined_harat_Trim.mp4", type:"video/mp4"},  '   Your browser does not support HTML5 video.')
          )
        ]
      );
  }
}

const domContainer = document.querySelector('#VideoPage');
ReactDOM.render(e(VideoPage), domContainer);