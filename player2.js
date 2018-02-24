var video3pParam = {
    'autoplay':true,
    'loop':false,
  };
  OO.ready(function() {
  window.vid3 = OO.Player2.create('Video3', '41bDZnZTE63J5oHmPnziSa7PWyIj59WK', video3pParam);
/*    vid3.mb.subscribe(OO.EVENTS.BUFFERING,"buf2",function(eventName){
  console.log(eventName)
  });*/
  });