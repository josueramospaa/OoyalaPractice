 var video1pParam = {
    'autoplay':true,
    'loop':false,
  };
  OO.ready(function() {
  window.vid1 = OO.Player.create('Video1', 'lmNTlmZTE6_uPP6B49TDFkrW26kmpL1-', video1pParam);
  vid1.mb.subscribe(OO.EVENTS.BUFFERING,"buf",function(eventName){
  console.log(eventName)
  });
  });
  //buffering
  
  var video2pParam = {
    'autoplay':false,
    'loop':false,
  };
  OO.ready(function() {
  window.vid2 = OO.Player.create('Video2', '41bDZnZTE63J5oHmPnziSa7PWyIj59WK', video2pParam);
  });

  var video3pParam = {
    'autoplay':false,
    'loop':false,
  };
  OO.ready(function() {
  window.vid3 = OO.Player.create('Video3', 'pldzhnZTE658HXEut1sqgPXVvID6IKQg', video3pParam);
  vid3.mb.subscribe(OO.EVENTS.BUFFERING,"buf2",function(eventName){
  console.log(eventName)
  });
  });
