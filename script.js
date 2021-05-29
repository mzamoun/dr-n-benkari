site='file:///home/mourad/data/pro/projets_html/dr-n-benkari/'
title='DR N BENKARI';

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

///////////////////////////////////////////////////////////////////////////////////////
function register() {
   alert('not implemented yet!');
}
