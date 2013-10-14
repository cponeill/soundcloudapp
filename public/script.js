SC.intialize({
    client_id: 'b7c7098351dca4d9ca65af321eeaffae'
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'metal' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
});
