// JavaScript File
window.onload = function()
{

  // var loadTextBtn = document.querySelector('#loadTextBtn');
  var searchBtn = document.getElementById("searchBtn");
  // var httpRequest;

  searchBtn.addEventListener("click", function(element) {
    element.preventDefault();

    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = QuoteL;
    httpRequest.open("GET", "request.php?q=definition");
    httpRequest.send();
    
   function QuoteL()
   {
     if(httpRequest.readyState === XMLHttpRequest.DONE)
     {
       if(httpRequest.status === 200)
       {
         alert(httpRequest.responseText);
       }
     }
   }
  }
)};