var imagesPages = {
   page1: {
      label : 'News',
      files : [ 'res/img01_My_project_in_Salalh_with_the_Japanese_team.jpg', 'res/img02_visit_of_Qasra_with_japanese_team.jpg', 'res/img04_My_consultancy_for_the_city_of_Osaka.jpg',],
   }, 

};

//'res/img00_My_project_in_Salalh_with_the_Japanese_team.jpg', 'res/img03_visit_of_Qasra_with_japanese_team.jpg', 'res/img04_My_consultancy_for_the_city_of_Osaka.jpg', 'res/img05_My_consultancy_for_the_city_of_Osaka.jpg', 'res/img06_Site_visit_with_my_students_in_Tokyo.jpg', 'res/img07_Site_visit_with_my_students_in_Tokyo.jpg', 'res/img08_teaching_architecture_at_SQU.jpg', 'res/img09_teaching_architecture_at_SQU.jpg', 'res/img10_My_field_work_for_the_documentation_of_Omans_Harat.jpg', 'res/img11_My_field_work_for_the_documentation_of_Omans_Harat.jpg', 'res/img12_My_field_work_for_the_documentation_of_Omans_Harat.jpg', 'res/img13_My_field_work_for_the_documentation_of_Omans_Harat.jpg'

var pause = 5000; //ms

//////////
     function resizePage() {
      // $( window ).width() , $( window ).height()
      var w = $(window).width();
      var h = $(window).height();
      var style = 'style=" width: 100%; height:'+h+'px"';

      $( "#page" ).attr( "style",  style );
    
     }

///////////////////////////////////////////////////////////////////////////////////////
var pagesObj = Object.keys(imagesPages);  //[page1, page2, ...]
var pageObj = imagesPages['page1'];
var images = pageObj.files;

var fadeOut = 50; //ms 
var fadeIn = 1100; //ms 
var slideIndexCur = -1;
var slideIndexPrec = -1;
var slideDateDeb = null;
var slideDateDebPrec = null;
var autoPlay = true;
var playFromBtn = false;

var idDivImg='#divImg';
var idImg = '#img';

function onAutoplayClicked() {
   autoPlay = $('#autoplay').prop('checked');
   //console.log('x='+x);
   showSlides();
}

function getCompoPage() {
   var w = $(window).width();
   var h = $(window).height();
   var style = 'style=" width: 100%; height:'+h+'px"';
   //console.log('getCompoPage: '+'w='+w+'; h='+h)
  // style="display:none; width: 100%; height: 100%;"
   var s = 
   '<div id="divImg" style="display:none; text-align:center; " > ' 
   +'<label for="autoplay">Auitoplay</label> '
   + '<input id="autoplay" type="checkbox" value="autoplay" name="autoplay" onclick="onAutoplayClicked()" checked > '
   + '<label id="numSlide"></label> '
   + '<label id="nomSlide"></label> '
  + '<img id="img" src="" '+style+' />' 
  + ' <button class="prec" style="left: 20px;"  onclick="prec()"  > < </button>' 
  + '<button class="next" style="right: 20px;" onclick="next()" > > </button>' 
   '</div> '
 ;
 return s;
}

  //////////
  function showPage(page) {
   loadDiv('#page', getCompoPage()) ;
 //   $('#Pages').show();
   images = imagesPages[page].files;
   showSlides();     

}
///////////////////

function setInfosSlide() {
   var n = slideIndexCur+1;
   var total = images.length;
   var s = n + '/' + total;
   $('#numSlide').text(s);
   var nom = images[slideIndexCur];
   nom = nom.replace('res/', '');
   nom = nom.replace(/_/gi, ' ');
   nom = nom.replace(/img[0-9]+/, ' ');
   nom = nom.replace('.jpg', '');
   $('#nomSlide').text(nom);
}

function showSlides() {

   if(!playFromBtn) {
      if(!autoPlay) return;

      if(autoPlay) {
         slideIndexCur++;
      }
   }  

   //console.log('deb');

   slideDateDeb = new Date();

   if(slideIndexCur <0 ) {
      slideIndexCur=0;
      slideIndexPrec = images.length-1;
   }
   else if(slideIndexCur >= images.length ) {
      slideIndexCur=0;
      slideIndexPrec = images.length-1;
   }else {
       slideIndexPrec = slideIndexCur-1;
       if(slideIndexPrec<0) slideIndexPrec = images.length-1;
   }

  if(slideIndexPrec>=0) {
    $(idDivImg).fadeOut(fadeOut);
  }

  setInfosSlide();

  var file = images[slideIndexCur];

  $(idImg).attr('src', file);
  $(idDivImg).fadeIn(fadeIn);
  if(slideDateDebPrec == null || slideDateDeb.getTime() - slideDateDebPrec.getTime() >= pause  ) {
    // console.log(slideDateDeb, 'setTimout');
    if(autoPlay) {
       setTimeout(showSlides, pause);
    }
     slideDateDebPrec = slideDateDeb;
  }

  resizePage();

  playFromBtn=false;

}

function prec() {
  slideIndexCur--;
  playFromBtn=true;
  showSlides();
}

function next() {
  slideIndexCur++;
  playFromBtn=true;
  showSlides();
}
////////////////////////////////////////////////////////////////////////////////////////
