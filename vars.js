var title = 'DR N BENKARI';
var imagesPages = {
    page1: {
       label : 'News',
       files : [ 'res/img01_My_project_in_Salalh_with_the_Japanese_team.jpg', 'res/img02_visit_of_Qasra_with_japanese_team.jpg', 'res/img04_My_consultancy_for_the_city_of_Osaka.jpg',],
    }, 
 
 };
 
 //'res/img00_My_project_in_Salalh_with_the_Japanese_team.jpg', 'res/img03_visit_of_Qasra_with_japanese_team.jpg', 'res/img04_My_consultancy_for_the_city_of_Osaka.jpg', 'res/img05_My_consultancy_for_the_city_of_Osaka.jpg', 'res/img06_Site_visit_with_my_students_in_Tokyo.jpg', 'res/img07_Site_visit_with_my_students_in_Tokyo.jpg', 'res/img08_teaching_architecture_at_SQU.jpg', 'res/img09_teaching_architecture_at_SQU.jpg', 'res/img10_My_field_work_for_the_documentation_of_Omans_Harat.jpg', 'res/img11_My_field_work_for_the_documentation_of_Omans_Harat.jpg', 'res/img12_My_field_work_for_the_documentation_of_Omans_Harat.jpg', 'res/img13_My_field_work_for_the_documentation_of_Omans_Harat.jpg'
 
 var pause = 5000; //ms

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

