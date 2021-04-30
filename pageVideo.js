
    function getCompoVideo() {
        var s = 
          '<div id="Acc" style="width: 100%; height: 100%;">'
        +  ' <video id="myVideo" autoplay muted loop >'
        +  '    <source src="res/Movie_combined_harat_Trim.mp4" type="video/mp4">'
        +   '   Your browser does not support HTML5 video.'
        + '  </video> '
        + '  <div id="content" class="content">'
        +       getCompoTitleMenusMilieu()
        + '  </div>'
      + '  </div>'
      ;
      return s;
    }

    function getCompoTitleMenusMilieu() {

        var btns = '';
        for (var i=0; i<pagesObj.length; i++) {
            var p = pagesObj[i];
            var label = imagesPages[p].label;
           // console.log(label);
            btns = btns + '   <button id="btn_' + p + '" class="btnMenu" onclick="showPage(\''+p+'\');" >'+label+'</button>';
        }

        var s = 
        '  <div>'
      +  '      <div id="title" style="font-size: 40px;"> '+title+' </div>'
      +         btns
      + '  </div>'
      ;   
      
      return s;
    }

    function getCompoMenus() {

        var btns = '';
        for (var i=0; i<pagesObj.length; i++) {
            var p = pagesObj[i];
            var label = imagesPages[p].label;
           // console.log(label);
            btns = btns + ' <li class="active"> <button id="btnMenu_"' + p +'" class="btnMenu" onclick="showPage(\''+p+'\');" >'+label+'</button> </li>';
        }
        btns = btns + ' <li > <button id="btnRegister" class="btnMenu" onclick="register()" >Register</button> </li> ';

        var s = btns ;   
      
      return s;
    }    

        //////////
    function showAcc() {
        loadDiv('#page', getCompoVideo()) ;
    }


  function onPause() {
    var video = document.getElementById("myVideo");
    var btn = document.getElementById("btnPause");
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }