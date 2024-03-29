$(document).ready(function() {
  $('#show-me-1').hide();
  $('#show-me-2').hide();
  $('#show-me-3').hide();


  $('input[type="radio"]').click(function() {

      if ($('#yes1').is(":checked"))
      {
          if ($('#yes2').is(":checked"))
          {
              if ($('#yes3').is(":checked"))
              {
                  $('#show-me-1').show();
                  $('#show-me-2').hide();
                  $('#show-me-3').hide();
              }else{
                  $('#show-me-1').hide();
              }
          }else{
              $('#show-me-1').hide();
          }
      }else{
          $('#show-me-1').hide();
      }

      if ($('#no1').is(":checked"))
      {
          if ($('#no2').is(":checked"))
          {
              if ($('#no3').is(":checked"))
              {
                  $('#show-me-3').show();
                  $('#show-me-1').hide();
                  $('#show-me-2').hide();
              }else{
                  $('#show-me-3').hide();
              }
          }else{
              $('#show-me-3').hide();
          }
      }else{
          $('#show-me-3').hide();
      }

      if ($('.yes').is(":checked"))
      {
          if ($('.no').is(":checked"))
          {
              if ($('.un').is(":checked"))
              {
                  $('#show-me-2').show();
                  $('#show-me-1').hide();
                  $('#show-me-3').hide();
              }else{
                  $('#show-me-2').hide();
              }
          }else{
              $('#show-me-2').hide();
          }
      }else{
          $('#show-me-2').hide();
      }

  });
});