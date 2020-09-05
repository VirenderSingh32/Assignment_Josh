//Initial Load
check();

//Responsiveness: with Screen Change
$(window).resize(check);

function check () {
  //Media Queries:
  var mq1 = window.matchMedia("(max-width: 1511px)");
  var mq2 = window.matchMedia("(max-width: 1055px)");
  var mq3 = window.matchMedia("(max-width: 680px)");

  if(mq1.matches){
    $('.lifestyle-first-col').removeClass('border-right');
    $('.lifestyle-first-col').addClass('border-bottom');
  } else {
    $('.lifestyle-first-col').addClass('border-right');
    $('.lifestyle-first-col').removeClass('border-bottom');
  }

  if(mq2.matches){
    $('.banner > .b1').attr('src','images-responsive/banner_slider_01.png');
    $('.banner > .b2').attr('src','images-responsive/banner_slider_02.jpg');
    $('.lifestyle-second-col > .sub-col-1').removeClass('border-right');
    $('.lifestyle-second-col > .sub-col-1').addClass('border-bottom');
  } else {
    $('.banner > .b1').attr('src','images/banner_slider_01.jpg');
    $('.banner > .b2').attr('src','images/banner_slider_02.jpg');
    $('.lifestyle-second-col > .sub-col-1').addClass('border-right');
    $('.lifestyle-second-col > .sub-col-1').removeClass('border-bottom');
  }

  if(mq3.matches){
    $('.lifestyle-options > .b').removeClass('border-right');
    $('.lifestyle-options > .b').addClass('border-bottom');
  } else {
    $('.lifestyle-options > .b').addClass('border-right');
    $('.lifestyle-options > .b').removeClass('border-bottom');
  }
}

// To pause the current video while sliding towards another:
const videoList = document.getElementsByTagName('iframe');

$('#video-carousel').on('slide.bs.carousel', (event)=> {
  let iframeSrc = videoList[event.from].src;
	videoList[event.from].src = iframeSrc;
});


// To pause the video while closing the modal:
$('#video-modal').on('hidden.bs.modal', ()=> {
  $("iframe").each(function() { 
    let iframeSrc= $(this).attr('src');
    $(this).attr('src',iframeSrc);  
  });
});