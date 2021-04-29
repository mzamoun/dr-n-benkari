site='file:///home/mourad/data/pro/projets_html/dr-n-benkari/'

function gotoUrl(site) {
    //location.replace(site)
    //window.location.href = site;
//       window.close();
//       window.open(site);
    window.location.replace(site);
  }
    //////////  
    function loadIframe(idDiv, file) {

      $(idDiv).height($(window).height());
      $(idDiv).width($(window).width());

      $( window ).resize(function() {
           $(idDiv).height($(window).height());
           $(idDiv).width($(window).width());
       });

      $(idDiv).attr('src' , file);


     }

     //////////////////
     function loadDiv(idDiv, html) {
        $(idDiv).html(html);
     }

//////////
     function resizePage() {

      // $( window ).width() , $( window ).height()

      var w0='500px';
      var h0='400px';

      var w='400px';
      var h='390px';

      $( "#Pages" ).attr( "width",  $w0 );
      $( "#Pages" ).attr( "height",  $h0 );

      $( "#page" ).attr( "width",  $w );
      $( "#page" ).attr( "height",  $h );
    
     }

  //////////
  function showAcc() {
     //gotoUrl('./index.html');
     $('#Pages').hide();
     $('#Acc').show();
  }
  //////////
  function showPage(page) {
     //page = './'+ page + '.html';
     $('#Acc').hide();
   //   loadIframe('#fpage', page);
      loadDiv('#page', getCompoPage()) ;
     $('#Pages').show();
     images = imagesPages[page];
     showSlides();

  }
///////////////////////////////////////////////////////////////////////////////////////
var pause = 5000; //ms
var fadeOut = 50; //ms 
var fadeIn = 1100; //ms 
var slideIndexCur = -1;
var slideIndexPrec = -1;
var slideDateDeb = null;
var slideDateDebPrec = null;
var imagesPages = {
   page1: ['res/img00_My_project_in_Salalh_with_the_Japanese_team.jpg', 'res/img01_My_project_in_Salalh_with_the_Japanese_team.jpg', 'res/img02_visit_of_Qasra_with_japanese_team.jpg', 'res/img03_visit_of_Qasra_with_japanese_team.jpg', 'res/img04_My_consultancy_for_the_city_of_Osaka.jpg', 'res/img05_My_consultancy_for_the_city_of_Osaka.jpg', 'res/img06_Site_visit_with_my_students_in_Tokyo.jpg', 'res/img07_Site_visit_with_my_students_in_Tokyo.jpg', 'res/img08_teaching_architecture_at_SQU.jpg', 'res/img09_teaching_architecture_at_SQU.jpg', 'res/img10_My_field_work_for_the_documentation_of_Omans_Harat.jpg', 'res/img11_My_field_work_for_the_documentation_of_Omans_Harat.jpg', 'res/img12_My_field_work_for_the_documentation_of_Omans_Harat.jpg', 'res/img13_My_field_work_for_the_documentation_of_Omans_Harat.jpg']
};
var images = imagesPages['page1'];

var idDivImg='#divImg';
var idImg = '#img';

function getCompoPage() {
   var s = 
   //'<div id="divImg" style="display:none; width: 100%; height: 100%;" > ' +
   '<img id="img" src="" />' 
  + ' <button class="prec" style="left: 20px;"  onclick="prec()"  > < </button>' 
  + '<button class="next" style="right: 20px;" onclick="next()" > > </button>' 
   //'</div> '
 ;
 return s;
}

function showSlides() {

   console.log('deb');

   slideDateDeb = new Date();

   if(slideDateDebPrec!=null) {
      console.log('slideDateDebPrec:' +  slideDateDebPrec.getTime());
      console.log('slideDateDeb:' + slideDateDeb.getTime() );
      var diff = slideDateDeb.getTime() - slideDateDebPrec.getTime();
      console.log('diff:' + diff);
   }

  if(slideIndexCur<-1) slideIndexCur=-1;

  slideIndexPrec = slideIndexCur;
  slideIndexCur++;
  if(slideIndexCur >= images.length ) slideIndexCur=0;

  if(slideIndexPrec>=0) {
    $(idDivImg).fadeOut(fadeOut);
  }

  var file = images[slideIndexCur];

  $(idImg).attr('src', file);
  $(idDivImg).fadeIn(fadeIn);
  if(slideDateDebPrec == null || slideDateDeb.getTime() - slideDateDebPrec.getTime() >= pause  ) {
     console.log(slideDateDeb, 'setTimout');
     setTimeout(showSlides, pause);
     slideDateDebPrec = slideDateDeb;
  }


}

function prec() {
  slideIndexCur--;
  slideIndexCur--;
  showSlides();
}

function next() {
  slideIndexCur++;
  showSlides();
}
////////////////////////////////////////////////////////////////////////////////////////
