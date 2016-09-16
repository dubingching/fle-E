function footer() {
	var footerAs = document.getElementsByTagName('footer a');
	for (var i=0; i<footerAs.length; i++) {
		var path = document.location.pathname.split('/');
		var page = path[path.length-1];
		var href = footerAs[i].style.href;
		if (page == href) {
			footerAs[i].className = "active";
			return false;
		}
	}
	return
}
footer();