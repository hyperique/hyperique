jQuery(function($){
 $(window).scroll(function() {
 if($(this).scrollTop() >= 115) {
 $('.header').addClass('stickytop');
 }
 else{
 $('.header').removeClass('stickytop');
 }
 });
});

jQuery(function($){
  $(".inp_phone").mask("+375 (99) 999-99-99");
});

jQuery(function($){
   var owl = $('.reviews_slider');
   owl.owlCarousel({
    center: true,
    autoplay: false,
    autoplayHoverPause: true,
    loop: true,
    margin: 40,
    touchDrag: true,
    mouseDrag: true,
    nav:true,
    navText: ["<span class='rev_left glyphicon glyphicon-menu-left'></span>", "<span class='rev_right glyphicon glyphicon-menu-right'></span>"],
    responsive:{
            320:{
                items:1
            },
            500:{
                items:1
            },
            700:{
                items:1
            },
            800:{
                items:1
            },
            991:{
                items:1
            },
            1024:{
                items:3
            },
            1600:{
                items:3
            }
        },
     onInitialized: function(e) {
       $('.reviews_number_normal span').text(this.items().length)
       console.log();
     }
   });
   owl.on('changed.owl.carousel', function(e) {
      $('.reviews_number_active span').text(++e.page.index);
      $('.reviews_number_normal span').text(e.item.count)
   });
});
jQuery(function($){ 
      $(".yak").on("click", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top + "px";
          $('body,html').animate({scrollTop: top}, 1000);
      });
});
jQuery(function($){ 
   $('.modal-body').on('show.bs.collapse', function () {
    $('.modal-body .in').collapse('hide');
  });
});
jQuery(function($){ 
   (function() {
      ['primary', 'success',].forEach(function(type) {
        return avalon.define({
          $id: `range-${type}`,
          value: Math.round(Math.random() * 2),
          setValue: function(e) {
            e.preventDefault();
            // не будет обновлять значение в
            return this.value = this.value;
          }
        });
      });

      }).call(this);
    // Math.random() * 50

    //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUNFLFNBREYsRUFFRSxTQUZGLEVBR0UsUUFIRixFQUlFLFNBSkYsRUFLRSxNQUxGLENBTUMsQ0FBQyxPQU5GLENBTVUsUUFBQSxDQUFDLElBQUQsQ0FBQTtXQUNSLE1BQU0sQ0FBQyxNQUFQLENBQ0U7TUFBQSxHQUFBLEVBQUssQ0FBQSxNQUFBLENBQUEsQ0FBUyxJQUFULENBQUEsQ0FBTDtNQUNBLEtBQUEsRUFBTyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUksQ0FBQyxNQUFMLENBQUEsQ0FBQSxHQUFnQixHQUEzQixDQURQO01BRUEsUUFBQSxFQUFVLFFBQUEsQ0FBQyxDQUFELENBQUE7UUFDUixDQUFDLENBQUMsY0FBRixDQUFBLEVBQUE7O2VBRUEsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUE7TUFIRjtJQUZWLENBREY7RUFEUSxDQU5WO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJbXG4gICdwcmltYXJ5J1xuICAnc3VjY2VzcydcbiAgJ2RhbmdlcidcbiAgJ3dhcm5pbmcnXG4gICdpbmZvJ1xuXS5mb3JFYWNoICh0eXBlKSAtPlxuICBhdmFsb24uZGVmaW5lXG4gICAgJGlkOiBcInJhbmdlLSN7dHlwZX1cIlxuICAgIHZhbHVlOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApXG4gICAgc2V0VmFsdWU6IChlKSAtPlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAjIEZpeCB0aGUgcmFuZ2Ugd29uJ3QgdXBkYXRlIHRoZSB2YWx1ZSBpbiBJRVxuICAgICAgQHZhbHVlID0gQHZhbHVlXG4iXX0=
    //# sourceURL=coffeescript
   });
jQuery(function($){ 
    $("#one_disp_form").change(function() {

        var number_pc = $('#number_pc').val();
        var number_server = $('#number_server').val();

        totalSum = (number_pc * 14) + (number_server * 28);
        // minimal
        if (number_pc <= 5 && number_server <= 1) {
          $("#link_tafir2").css("display", "inline");
          $("#link_tafir3").css("display", "none");
          $("#link_tafir4").css("display", "none");
          $("#link_tafir5").css("display", "none");
          $("#link_tafir6").css("display", "none");
          totalSum = (5 * 20) + (1 * 50) - 1;
        } else if (number_pc <= 5 && number_server <= 10) {
          $("#link_tafir2").css("display", "inline");
          $("#link_tafir3").css("display", "none");
          $("#link_tafir4").css("display", "none");
          $("#link_tafir5").css("display", "none");
          $("#link_tafir6").css("display", "none");
          totalSum = (5 * 20) + (number_server * 50) - 1 ;
        }
        // minimal
        // standart
        else if (number_pc <= 10 && number_server <= 3) {
          $("#link_tafir2").css("display", "none");
          $("#link_tafir3").css("display", "inline");
          $("#link_tafir4").css("display", "none");
          $("#link_tafir5").css("display", "none");
          $("#link_tafir6").css("display", "none");
          totalSum = (10 * 20) + (1 * 50) - 1;
        } else if (number_pc <= 10 && number_server <= 10) {
          $("#link_tafir2").css("display", "none");
          $("#link_tafir3").css("display", "inline");
          $("#link_tafir4").css("display", "none");
          $("#link_tafir5").css("display", "none");
          $("#link_tafir6").css("display", "none");
          totalSum = (10 * 20) + (number_server * 50) - 101;
        }
        // standart
        // standart +
        else if (number_pc <= 20 && number_server <= 5) {
          $("#link_tafir2").css("display", "none");
          $("#link_tafir3").css("display", "none");
          $("#link_tafir4").css("display", "inline");
          $("#link_tafir5").css("display", "none");
          $("#link_tafir6").css("display", "none");
          totalSum = 379;
        } else if (number_pc <= 20 && number_server <= 10) {
          $("#link_tafir2").css("display", "none");
          $("#link_tafir3").css("display", "none");
          $("#link_tafir4").css("display", "inline");
          $("#link_tafir5").css("display", "none");
          $("#link_tafir6").css("display", "none");
          totalSum = (number_pc * 20) + (number_server * 50) - 281 + 50;
        }
        // standart +

        // biznes
        else if (number_pc <= 30 && number_server <= 7) {
          $("#link_tafir2").css("display", "none");
          $("#link_tafir3").css("display", "none");
          $("#link_tafir4").css("display", "none");
          $("#link_tafir5").css("display", "inline");
          $("#link_tafir6").css("display", "none");
          totalSum = 499;
        } else if (number_pc <= 30 && number_server <= 10) {
          $("#link_tafir2").css("display", "none");
          $("#link_tafir3").css("display", "none");
          $("#link_tafir4").css("display", "none");
          $("#link_tafir5").css("display", "inline");
          $("#link_tafir6").css("display", "none");
          totalSum = (30 * 20) + (number_server * 50) - 399 + 50;
        }
        // biznes

        // biznes +
        else if (number_pc <= 40 && number_server <= 7) {
          $("#link_tafir2").css("display", "none");
          $("#link_tafir3").css("display", "none");
          $("#link_tafir4").css("display", "none");
          $("#link_tafir5").css("display", "none");
          $("#link_tafir6").css("display", "inline");
          totalSum = 679;
        } else if (number_pc <= 40 && number_server <= 10) {
          $("#link_tafir2").css("display", "none");
          $("#link_tafir3").css("display", "none");
          $("#link_tafir4").css("display", "none");
          $("#link_tafir5").css("display", "none");
          $("#link_tafir6").css("display", "inline");
          totalSum = 679;
        }

        $('#input_col_pc').val(number_pc);
        $('#input_col_serv').val(number_server);
        $('#input_itogo').val(totalSum);
        // biznes +
        $('#summa').val(totalSum);
        itogo = $('#summa').val();
        $('#itogo').text(totalSum);

    });
});

jQuery(document).ready( function($) {

    $('#service_form1').submit(function() {
        var form = $('#service_form1');
        $.ajax({
           url: form.attr('action'),
           type: form.attr('method'),
           data: form.serialize(),
           success: function(data) {
			        gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                    $('#service_form_btn1').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                    $('#service_form1 .ui-success').css('display','block');
                    $('#service_form_btn1').addClass('sent');
                    $('#service_form1')[0].reset();
                    setTimeout(function () {
                        $('#service_form1 .ui-success').css('display','none');
                        $('#service_form_btn1').removeClass('sent');
                        $('#service_form_btn1').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                    }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
            }
               });

        return false;
    });

});

jQuery(document).ready( function($) {

    $('#service_form2').submit(function() {
        var form = $('#service_form2');
        $.ajax({
           url: form.attr('action'),
           type: form.attr('method'),
           data: form.serialize(),
           success: function(data) {
			        gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                    $('#service_form_btn2').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                    $('#service_form2 .ui-success').css('display','block');
                    $('#service_form_btn2').addClass('sent');
                    $('#service_form2')[0].reset();
                    setTimeout(function () {
                        $('#service_form2 .ui-success').css('display','none');
                        $('#service_form_btn2').removeClass('sent');
                        $('#service_form_btn2').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                    }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
            }
               });

        return false;
    });

});

jQuery(document).ready( function($) {

    $('#service_form3').submit(function() {
        var form = $('#service_form3');
        $.ajax({
           url: form.attr('action'),
           type: form.attr('method'),
           data: form.serialize(),
           success: function(data) {
			        gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                    $('#service_form_btn3').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                    $('#service_form3 .ui-success').css('display','block');
                    $('#service_form_btn3').addClass('sent');
                    $('#service_form3')[0].reset();
                    setTimeout(function () {
                        $('#service_form3 .ui-success').css('display','none');
                        $('#service_form_btn3').removeClass('sent');
                        $('#service_form_btn3').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                    }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
            }
               });

        return false;
    });

});

jQuery(document).ready( function($) {

    $('#service_form4').submit(function() {
        var form = $('#service_form4');
        $.ajax({
           url: form.attr('action'),
           type: form.attr('method'),
           data: form.serialize(),
           success: function(data) {
			        gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                    $('#service_form_btn4').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                    $('#service_form4 .ui-success').css('display','block');
                    $('#service_form_btn4').addClass('sent');
                    $('#service_form4')[0].reset();
                    setTimeout(function () {
                        $('#service_form4 .ui-success').css('display','none');
                        $('#service_form_btn4').removeClass('sent');
                        $('#service_form_btn4').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                    }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
            }
               });

        return false;
    });

});

  jQuery(document).ready( function($) {

      $('#service_form5').submit(function() {
          var form = $('#service_form5');
          $.ajax({
             url: form.attr('action'),
             type: form.attr('method'),
             data: form.serialize(),
             success: function(data) {
				      gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                      $('#service_form_btn5').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                      $('#service_form5 .ui-success').css('display','block');
                      $('#service_form_btn5').addClass('sent');
                      $('#service_form5')[0].reset();
                      setTimeout(function () {
                          $('#service_form5 .ui-success').css('display','none');
                          $('#service_form_btn5').removeClass('sent');
                          $('#service_form_btn5').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                      }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
              }
                 });

          return false;
      });

});

jQuery(document).ready( function($) {

      $('#tarif_form1').submit(function() {
          var form = $('#tarif_form1');
          $.ajax({
             url: form.attr('action'),
             type: form.attr('method'),
             data: form.serialize(),
             success: function(data) {
				      gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                      $('#tarof_form_btn1').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                      $('#tarif_form1 .ui-success').css('display','block');
                      $('#tarof_form_btn1').addClass('sent');
                      $('#tarif_form1')[0].reset();
                      setTimeout(function () {
                          $('#tarif_form1 .ui-success').css('display','none');
                          $('#tarof_form_btn1').removeClass('sent');
                          $('#tarof_form_btn1').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                      }, 8000); 
              }
                 });

          return false;
      });

});

jQuery(document).ready( function($) {

      $('#tarif_form2').submit(function() {
          var form = $('#tarif_form2');
          $.ajax({
             url: form.attr('action'),
             type: form.attr('method'),
             data: form.serialize(),
             success: function(data) {
				      gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                      $('#tarof_form_btn2').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                      $('#tarif_form2 .ui-success').css('display','block');
                      $('#tarof_form_btn2').addClass('sent');
                      $('#tarif_form2')[0].reset();
                      setTimeout(function () {
                          $('#tarif_form2 .ui-success').css('display','none');
                          $('#tarof_form_btn2').removeClass('sent');
                          $('#tarof_form_btn2').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                      }, 8000); 
              }
                 });

          return false;
      });

});

jQuery(document).ready( function($) {

      $('#tarif_form3').submit(function() {
          var form = $('#tarif_form3');
          $.ajax({
             url: form.attr('action'),
             type: form.attr('method'),
             data: form.serialize(),
             success: function(data) {
				      gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                      $('#tarof_form_btn3').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                      $('#tarif_form3 .ui-success').css('display','block');
                      $('#tarof_form_btn3').addClass('sent');
                      $('#tarif_form3')[0].reset();
                      setTimeout(function () {
                          $('#tarif_form3 .ui-success').css('display','none');
                          $('#tarof_form_btn3').removeClass('sent');
                          $('#tarof_form_btn3').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                      }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
              }
                 });

          return false;
      });

});

jQuery(document).ready( function($) {

      $('#tarif_form3').submit(function() {
          var form = $('#tarif_form3');
          $.ajax({
             url: form.attr('action'),
             type: form.attr('method'),
             data: form.serialize(),
             success: function(data) {
				      gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                      $('#tarof_form_btn3').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                      $('#tarif_form3 .ui-success').css('display','block');
                      $('#tarof_form_btn3').addClass('sent');
                      $('#tarif_form3')[0].reset();
                      setTimeout(function () {
                          $('#tarif_form3 .ui-success').css('display','none');
                          $('#tarof_form_btn3').removeClass('sent');
                          $('#tarof_form_btn3').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                      }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
              }
                 });

          return false;
      });

});

jQuery(document).ready( function($) {

      $('#tarif_form4').submit(function() {
          var form = $('#tarif_form4');
          $.ajax({
             url: form.attr('action'),
             type: form.attr('method'),
             data: form.serialize(),
             success: function(data) {
				      gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                      $('#tarof_form_btn4').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                      $('#tarif_form4 .ui-success').css('display','block');
                      $('#tarof_form_btn4').addClass('sent');
                      $('#tarif_form4')[0].reset();
                      setTimeout(function () {
                          $('#tarif_form4 .ui-success').css('display','none');
                          $('#tarof_form_btn4').removeClass('sent');
                          $('#tarof_form_btn4').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                      }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
              }
                 });

          return false;
      });

});

jQuery(document).ready( function($) {

      $('#tarif_form5').submit(function() {
          var form = $('#tarif_form5');
          $.ajax({
             url: form.attr('action'),
             type: form.attr('method'),
             data: form.serialize(),
             success: function(data) {
				      gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                      $('#tarof_form_btn5').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                      $('#tarif_form5 .ui-success').css('display','block');
                      $('#tarof_form_btn5').addClass('sent');
                      $('#tarif_form5')[0].reset();
                      setTimeout(function () {
                          $('#tarif_form5 .ui-success').css('display','none');
                          $('#tarof_form_btn5').removeClass('sent');
                          $('#tarof_form_btn5').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                      }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
              }
                 });

          return false;
      });

});

jQuery(document).ready( function($) {

      $('#tarif_form6').submit(function() {
          var form = $('#tarif_form6');
          $.ajax({
             url: form.attr('action'),
             type: form.attr('method'),
             data: form.serialize(),
             success: function(data) {
				      gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                      $('#tarof_form_btn6').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                      $('#tarif_form6 .ui-success').css('display','block');
                      $('#tarof_form_btn6').addClass('sent');
                      $('#tarif_form6')[0].reset();
                      setTimeout(function () {
                          $('#tarif_form6 .ui-success').css('display','none');
                          $('#tarof_form_btn6').removeClass('sent');
                          $('#tarof_form_btn6').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                      }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
              }
                 });

          return false;
      });

});

jQuery(document).ready( function($) {

    $('#calculation_form').submit(function() {
        var form = $('#calculation_form');
        $.ajax({
           url: form.attr('action'),
           type: form.attr('method'),
           data: form.serialize(),
           success: function(data) {
                    gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 			   
                    $('#calculation_form_btn').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                    $('#calculation_form .ui-success').css('display','block');
                    $('#calculation_form_btn').addClass('sent');
                    $('#calculation_form')[0].reset();
                    setTimeout(function () {
                        $('#calculation_form .ui-success').css('display','none');
                        $('#calculation_form_btn').removeClass('sent');
                        $('#calculation_form_btn').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                    }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
            }
             			 });

        return false;
    });
});

jQuery(document).ready( function($) {

    $('#cons_form').submit(function() {
        var form = $('#cons_form');
        $.ajax({
           url: form.attr('action'),
           type: form.attr('method'),
           data: form.serialize(),
           success: function(data) {
			        gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {});
                    $('#con_form_button').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                    $('#cons_form .ui-success').css('display','block');
                    $('#con_form_button').addClass('sent');
                    $('#cons_form')[0].reset();
                    setTimeout(function () {
                        $('#cons_form .ui-success').css('display','none');
                        $('#con_form_button').removeClass('sent');
                        $('#con_form_button').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                    }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
            }
               });

        return false;
    });

});


jQuery(document).ready( function($) {

    $('#application_forms').submit(function() {
        var form = $('#application_forms');
        $.ajax({
           url: form.attr('action'),
           type: form.attr('method'),
           data: form.serialize(),
           success: function(data) {
			        gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                    $('#application_form_btn').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                    $('#application_forms .ui-success').css('display','block');
                    $('#application_form_btn').addClass('sent');
                    $('#application_forms')[0].reset();
                    setTimeout(function () {
                        $('#application_forms .ui-success').css('display','none');
                        $('#application_form_btn').removeClass('sent');
                        $('#application_form_btn').text('РћСЃС‚Р°РІРёС‚СЊ Р·Р°СЏРІРєСѓ');
                    }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
            }
               });

        return false;
    });

});


jQuery(document).ready( function($) {

    $('#review_form').submit(function() {
        var form = $('#review_form');
        $.ajax({
           url: form.attr('action'),
           type: form.attr('method'),
           data: form.serialize(),
           success: function(data) {
			        gtag('event', 'clickdopevent', { 'event_category': 'zayavka', 'event_action': 'click', });  yaCounter51135422.reachGoal ('zayavka', function () {}); 
                    $('#review_btn').text('РћС‚РїСЂР°РІР»РµРЅРѕ');
                    $('#review_form .ui-success').css('display','block');
                    $('#review_btn').addClass('sent');
                    $('#review_form')[0].reset();
                    setTimeout(function () {
                        $('#review_form .ui-success').css('display','none');
                        $('#review_btn').removeClass('sent');
                        $('#review_btn').text('РћСЃС‚Р°РІРёС‚СЊ РѕС‚Р·С‹РІ');
                    }, 8000); // РІСЂРµРјСЏ РІ РјСЃ
            }
               });

        return false;
    });

});



jQuery(function($){
$("[data-fancybox]").fancybox({
		// Options will go here
	});
});
