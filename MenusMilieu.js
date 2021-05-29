'use strict';

import Menus from 'Menus';
const e = React.createElement;

class MenusMilieu extends Menus {
  constructor(props) {
    super(props);
  }
  

  render() {
    e('div', 
      {id:'content', class:'content'}
      ,[
          e('div', {id:'title', style:'font-size: 40px;'}, title) ,
          e('Menus') 
        ]
      );
  }
}

const domContainer = document.querySelector('#MenusMilieu');
ReactDOM.render(e(MenusMilieu), domContainer);