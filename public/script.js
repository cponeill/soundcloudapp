SC.intialize({
    client_id: 'b7c7098351dca4d9ca65af321eeaffae'
    redirect_url: 'http://www.designingaround.us'
});


$(document).ready(function() {
  $('a.connect').click(function(e) {
    e.preventDefault();
    SC.connect(function() {
      SC.get('/me', function(me) {
        $('#username').html(me.username);
      });
    });
  });
});
