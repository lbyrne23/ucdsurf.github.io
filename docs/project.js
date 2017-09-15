//All rollovers shown in ourmembers.html
function rollover(my_gif){
	my_gif.src = 'gifs/fall.gif';
}

function mouseaway(my_gif){
	my_gif.src = "gifs/hit.gif";
}

function rollover1(my_gif){
	my_gif.src = 'gifs/intermediate2.gif';
}

function mouseaway1(my_gif){
	my_gif.src = "gifs/intermediate.gif";
}

function rollover2(my_gif){
	my_gif.src = 'gifs/advanced2.gif';
}

function mouseaway2(my_gif){
	my_gif.src = "gifs/advanced.gif";
}

//Validate email in form.html
function emailvalidator(){
	var email = document.getElementById("email").value;
	
	if(!words.includes("@")){
		alert("Your email is not in the correct format.");
	}
	else{
		alert("You will receive an email soon!");
	}
}