function playSomeSound(genre) {
    SC.get('/tracks', {
      genres: genre,
	bpm: {
	    from: 100
	    }
	}, function(tracks) {
	    var random = Math.floor(Math.random() * 49);
	    SC.oEmbed(tracks[random].uri, { auto_play: true }, document.getElementById('target'));
	});
}

window.onload = function() {
    SC.intialize({
	client_id: 'b7c7098351dca4d9ca65af321eeaffae'
	});
    
    var menuLinks = document.getElementsByClassName('genre');
    for (var i = 0; i < menuLinks.length; i++)
	var menuLink = menuLinks[i];
        menuLinks.onclick = function(e) {
	e.preventDefault();
	    playSomeSound(menuLinks.innerHTML);
	};
	}
}
