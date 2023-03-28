$(document).ready(function(){
    $('#tabs').on('click',function(){
        $(this).toggleClass('active'),next().slideToggle()
    })
})

$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;

  


  })

$(document).ready(function(){
    $({ counter: 0 }).animate({ counter: 400},{
         duration: 4000,
         easing:'linear',
         step: function(){
         $('.number').text(Math.ceil(this.counter))
         }
     })

     $({ counter:0 }).animate({ counter: 500},{
         duration: 4000,
         easing:'linear',
         step: function(){
          $('.number1').text(Math.ceil(this.counter))
         }
     })

     $({ counter:0 }).animate({ counter: 600},{
        duration: 4000,
         easing:'linear',
        step: function(){
         $('.number2').text(Math.ceil(this.counter))
         }
    })
})