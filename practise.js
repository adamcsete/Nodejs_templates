var cl=0;
	function clicked() {
		cl++;
		if (document.getElementById("button").innerHTML == "You clicked!"){ 
				document.getElementById("button").innerHTML = "Again!";
			}
		else {
			document.getElementById("button").innerHTML = "You clicked!";
		}
		if (cl%5==0){
			var col = Math.floor(Math.random() * (65565 - 1 + 1)) + 1;
			document.body.style.backgroundColor = col;
			document.getElementById("header").style.color = 65565-col ;
		}			
	}
