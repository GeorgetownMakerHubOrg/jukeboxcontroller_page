//tinyurl: https://tinyurl.com/gumh-jukebox

function doGet(e) {
  Logger.log("opening");  
  parameter = e.parameter;
  var page= e.parameter.page;
  if(!page){
    page = 'index';
  }
     return HtmlService
     .createTemplateFromFile(page)
     .evaluate()
     .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function get_aio_key(){
  return get_aio_key(); 
}