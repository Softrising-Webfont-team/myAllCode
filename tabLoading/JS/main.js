var person = document.getElementById('person');
var authors = document.getElementById('authors');
var auths = authors.getElementsByTagName('dd');
var loadings = document.getElementById('loadings');
var content = document.getElementById('content');
var sures = document.getElementById('sure');
var firstone = document.getElementsByClassName('firstone');
var secondone = document.getElementsByClassName('secondone');

person.onclick = function(){
	authors.style.height = '60px';
	for(let i = 0; i < auths.length ; i++){
		auths[i].onclick = function(){
			person.innerHTML = auths[i].innerHTML;
			authors.style.height = '0';
		}
	}
}
sures.onclick = function(){
	content.style.display = 'none';
	loadings.style.display = 'block';
	setTimeout(function(){
    content.style.display = 'block';
	loadings.style.display = 'none';
	},5000)
	setTimeout(card() ,5000);
}

function card(){
	//  content.style.display = 'block';
	// loadings.style.display = 'none';
	if(person.innerHTML=='朱自清'){
     firstone[0].style.display = 'block';
     secondone[0].style.display = 'none';
	}
	if(person.innerHTML=='矛盾'){
	 firstone[0].style.display = 'none';
     secondone[0].style.display = 'block';
	}
	
}