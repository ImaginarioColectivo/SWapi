$(document).ready(function($) {
  $('#myModal').on('hidden.bs.modal', function (e) {
    $('#hide').click(function(){
      $('.avatar').hide();
    });
  })
});










