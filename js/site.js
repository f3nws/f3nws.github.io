function redirToSite() {
	// find the a
	var links = document.getElementsByTagName('a');

	for (var index = 0; index < links.length; index++) {
		var element = links[index];

		if(element.hostname == 'www.f3nws.com') {
			// found
			showNews(element.href);
			return;
		}
	}
}

function showNews(url){
	//window.location.href = url;
    console.log(url);
}

redirToSite();
