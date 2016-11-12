// JavaScript File
window.onload = function()
{
    var results = document.getElementById("result")
    var httpRequest;
    var searchBtn = document.getElementById("searchBtn");
    var all_btn = document.getElementById("all");
    all_btn.addEventListener("click", function(e) {
		e.preventDefault();
		httpRequest = new XMLHttpRequest();
		var list = document.createElement('ul');
		results.innerHTML = "";
		list.setAttribute("id","list");
		results.appendChild(list);
		httpRequest.onreadystatechange = getAllData;
		var url = "request.php?q=&all=true";
		httpRequest.open("GET", url);
		httpRequest.send();
		function getAllData() {
			if(httpRequest.readyState === XMLHttpRequest.DONE){
				if(httpRequest.status == 200){
					var xmlResponse = httpRequest.responseXML;
					var definition = xmlResponse.getElementsByTagName("definition");
					for (var x = 0; x < definition.length; x++) {
			        	var h3 = document.createElement("H3");
			        	var p = document.createElement("P");
			        	var p_author = document.createElement("P");
			            var def = document.createTextNode(definition[x].innerHTML);
			            var author = document.createTextNode(definition[x].getAttribute("author"));
			            var name = document.createTextNode(definition[x].getAttribute("name"));
			            h3.appendChild(name);
			            p.appendChild(def);
			            p_author.appendChild(author);
			        	results.appendChild(h3);
			        	results.appendChild(p);
			        	results.appendChild(p_author);
			        }
				}
			}
		}
	});


  searchBtn.addEventListener("click", function(element) {
    element.preventDefault();

    httpRequest = new XMLHttpRequest();
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