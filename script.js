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
     
//////////
     function resizePage() {
      $( "#fpage" ).attr( "width",  $( window ).width() );
      $( "#fpage" ).attr( "height",  $( window ).height() );
    
      $( "#Pages" ).attr( "width",  $( window ).width() );
      $( "#Pages" ).attr( "height",  $( window ).height() );
     }

  //////////
  function showAcc() {
     //gotoUrl('./index.html');
     $('#Pages').hide();
     $('#Acc').show();
  }
  //////////
  function showPage(page) {
     page = './'+ page + '.html';
     $('#Acc').hide();
     loadIframe('#fpage', page);
     $('#Pages').show();

  }
///////////////
