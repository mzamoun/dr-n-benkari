'use strict';

const e = React.createElement;

class Menus extends CompoParent {
  constructor(props) {
    super(props);
  }

  register() {
    alert('Not Implemented Yet !');
  }

  getMenusList() {

    var btns = [];
    for (var i=0; i<pagesObj.length; i++) {
        var p = pagesObj[i];
        var label = imagesPages[p].label;
        var b = e('button', {id:'btn_'+p, class:'btnMenu', onclick:() => this.showPage(p) }, label );
        btns.push(b);
    }
    var btnRegister = e('button',  {class:'btnMenu', onclick:() => this.register()}, 'Register');
  
    return btns;
  }   

  render() {
    e('div', 
      {}
      , this.getMenusList()
      );
  }
}

const domContainer = document.querySelector('#Menus');
ReactDOM.render(e(Menus), domContainer);