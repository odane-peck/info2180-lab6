// JavaScript File
window.onload = function()
{

  
  var searchBtn = document.getElementById("searchBtn");

  searchBtn.addEventListener("click", function(element) {
    element.preventDefault();

    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = QuoteL;
    var url = "request.php?q="+document.getElementById("p").value;
    httpRequest.open("GET", url);
    httpRequest.send();
    
   function QuoteL()
   {
     if(httpRequest.readyState === XMLHttpRequest.DONE)
     {
       if(httpRequest.status === 200)
       {
        var t = httpRequest.responseText;
        document.getElementById("result").innerHTML = t;
       }
     }
   }
  }
)};