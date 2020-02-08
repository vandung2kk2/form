window.onload = function(){
	var db = ["ANH", "BICH", "CONG", "CUONG", "DUNG", "DUONG", "DUY"];
	var inputer = document.getElementById("text-select");
	newDb = db;
	var oldLen = 0;
	inputer.addEventListener("keyup",function(){
		document.getElementById("selections").innerHTML="";
		let val=this.value.toUpperCase();
		if(!val) newDb=[];
		else{
			if(val.length < oldLen) newDb=db;
			let len=newDb.length;
			let tempDb = [];
			let end=false;
			for(let i=0;i<len;i++){
				if(newDb[i].indexOf(val)==0){
					tempDb.push(newDb[i]);
					end=true;
				}else if(end==true) break;

			}
			newDb= tempDb;
			oldLen = val.length;
			//console.log(newDb);
		}
		for(let i=0;i<newDb.length;i++){
			document.getElementById("selections").innerHTML += "<div class='selection'>"+newDb[i]+"</div>";
		}
		newDb = db;
	})
}