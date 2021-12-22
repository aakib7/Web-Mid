$(()=>{
  $('#home-btn').on('click',function(){
     window.open("../index.html"); });

  $('#menu-btn').on('click', function(){
     window.open("../menu.html");
  });
  $('#image-details').hide();
  $('.item-text').hide();

  $('.container').on('mouseover','img',function(e){
    let src = $(e.target).attr('src');
    img_id = $(e.target).attr('id');

    $('#theImg').attr('src',src);
    $('#image-details').show();});

  $('#hide').on('click',function(e){
     $('#image-details').hide();
  });

  $('#c').on('mouseover',function(e){
    console.log('hello')
    $(e.target).attr('class','blue');

  });
  




  });
