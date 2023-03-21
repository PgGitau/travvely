function openDestinationBy(evt, category) {
	let i, tabcontent, tablinks;

	// display:none to all tab content
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}

	// remove active class from all buttons
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// display: block for the clicked button content
	// and add active class to it
	document.getElementById(category).style.display = "flex";
	evt.currentTarget.className += " active ";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();