// Event Handling
document.addEventListener("DOMContentLoaded",
	function(event){

		//Unobstrusive event binding
		document.querySelector("button").addEventListener("click",function(){
			// var self = this;
			// var name = "";

			// Call server to get the name
			$ajaxUtils.sendGetRequest("name.txt",
				function(request){
					// self.name = request.responseText;
					var name = request.responseText;

					document.querySelector("#content").innerHTML =
					"<h2>Hello "+ name +"!</h2>";
				});
			// document.querySelector("#content").innerHTML=
			// "<h2>Hello "+self.name+"!</h2>"; Asynchronous so this part needs to be inside function
		});
	}
	);