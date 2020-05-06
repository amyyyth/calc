
onkeydown=fn;
function fn(e) {
	var text;
	text=e.key;
	
	if (!isNaN(text)) {
		rdisplayupdate(text);
	}
	
}

function getHistory(){

	return document.getElementById('htext').innerText;
}
function getResult(){

	return document.getElementById('rtext').innerText;
}




function hdisplayupdate(oper) {
	document.getElementById('htext').innerText=document.getElementById('rtext').innerText+oper;
	document.getElementById('rtext').innerText="";

}
function rdisplayupdate(char) {
		var l=String(document.getElementById('rtext').innerText).length;
	if (l>10) {
		return;
	}
	document.getElementById('rtext').innerText=document.getElementById('rtext').innerText+char;

}




function numberpress(num) {
	var l=String(document.getElementById('rtext').innerText).length;
	if (l>10) {
		return;
	}
	rdisplayupdate(num);
}
function operpress(op) {
	var h;
	h=document.getElementById('htext').innerText;
	if (op=='eq') {
			var a=document.getElementById('htext').innerText;
			document.getElementById('htext').innerText='';
			var b=document.getElementById('rtext').innerText;
			document.getElementById('rtext').innerText='';
			var c=a+b;
			c=eval(c);
			var l;
			c=String(c);
			l=c.length;
			if (l>10) {
				c=c.substr(0,9);
			
			}
			
			document.getElementById('rtext').innerText=c;
			
			
			
			return;

	}

	else{
		if (op=='C') {
			document.getElementById('rtext').innerText='';
			document.getElementById('htext').innerText='';
		}
		else if (op=='CE') {
			document.getElementById('rtext').innerText='';
		}	
		else if(document.getElementById('rtext').innerText==''){
			return;
		}
		else if (op=='bksp') {
			var s;
			s=document.getElementById('rtext').innerText;
			s=s.substr(0,s.length-1);
			document.getElementById('rtext').innerText=s;
		}
		else if((h.includes("+")||h.includes("-")||h.includes("*")||h.includes("/"))||(!h=='eq'))
		{
			var a=document.getElementById('htext').innerText;
			document.getElementById('htext').innerText='';
			var b=document.getElementById('rtext').innerText;
			var c=a+b;
			document.getElementById('htext').innerText=eval(c)+op;
			document.getElementById('rtext').innerText='';
			return;

		}


		else {
			hdisplayupdate(op);
		}
	}
	

}

