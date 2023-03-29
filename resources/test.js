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
  //document.getElementById("defaultOpen").click();



  // scroll to div on tab button click
window.smoothScroll = function (target) {
  if (window.matchMedia("(max-width: 467px)").matches) {
    let scrollContainer = target;
    do {
      //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    let targetY = 0;
    do {
      //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
    } while ((target = target.offsetParent));

    scroll = function (c, a, b, i) {
      i++;
      if (i > 30) return;
      c.scrollTop = a + ((b - a) / 30) * i;
      setTimeout(function () {
        scroll(c, a, b, i);
      }, 20);
    };
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  }
};

