// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//searchbar

//function search_content() {
//let input = document.getElementById('searchbar').value
//  input=input.toLowerCase();
//  let x = document.getElementsByClassName('content');
    
 // for (i = 0; i < x.length; i++) { 
//      if (!x[i].innerHTML.toLowerCase().includes(input)) {
//          x[i].style.display="none";
//      }
//      else {
//          x[i].style.display="list-item";                 
//      }
//  }
//}