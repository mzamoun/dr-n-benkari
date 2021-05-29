'use strict';

import VideoPage from 'VideoPage';

const e = React.createElement;

class BtnAcceuil extends CompoParent {
    constructor(props) {
        super(props);
    }

    onclickBtnAcceuil() {

        var div = document.querySelector('#page');
        ReactDOM.render(e(VideoPage), div);
    } 

    render() {
        e('button', 
        {
            class:'navbar-brand btnAcceuil'
            , onclick: () => this.onclickBtnAcceuil() 
        }
        , 'Acceuil'
        );
    }
}

const domContainer = document.querySelector('#BtnAcceuil');
ReactDOM.render(e(BtnAcceuil), domContainer);