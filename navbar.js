// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.querySelector(".primary-header").style.backgroundColor = "#1f0812da";
  } else {
    document.querySelector(".primary-header").style.backgroundColor = "transparent";
  }
}
