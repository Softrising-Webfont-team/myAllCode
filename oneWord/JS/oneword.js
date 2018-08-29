
function rebrash(){
	var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        document.getElementById("words").innerHTML = myObj.hitokoto;
        document.getElementById("author").innerHTML = myObj.from;
    }
};
xmlhttp.open("GET", "https://v1.hitokoto.cn/?c=b", true);
xmlhttp.send();

}
setInterval("rebrash()",5000);
