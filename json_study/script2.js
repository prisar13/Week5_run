// Event Handling
document.addEventListener("DOMContentLoaded",
	function(event){

		//Unobstrusive event binding
		document.querySelector("button").addEventListener("click",function(){
			// var self = this;
			// var name = "";

			// Call server to get the name
			$ajaxUtils.sendGetRequest("name.json",
				function(res){
					var message = res.firstName+" "+res.lastName

					if(res.likesChineseFood){
						message+=" likes Chinese food";
					}
					else{
						message+=" doesn't like chinese food";
					}
					message+= " and usues ";
					message+=res.numberOfDisplays;
					message+=" displays for coding.";

					document.querySelector("#content").innerHTML =
					"<h2>"+ message +"!</h2>";
				});
			// document.querySelector("#content").innerHTML=
			// "<h2>Hello "+self.name+"!</h2>"; Asynchronous so this part needs to be inside function
		});
	}
	);