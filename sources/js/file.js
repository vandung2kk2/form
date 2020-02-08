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
		}
		if(newDb.length){
			this.nextElementSibling.classList.add("hienthi");
			for(let i=0;i<newDb.length;i++){
				document.getElementById("selections").innerHTML += "<div class='selection' onclick='complete(this)'>"+newDb[i]+"</div>";
			}
		} else this.nextElementSibling.classList.remove("hienthi")
		newDb = db;
	})
	var selectTag=document.getElementsByClassName("select");
	for(let i=0;i<selectTag.length;i++){
		selectTag[i].addEventListener("click",function(){
			this.querySelector(".other-opts").classList.toggle("active");
		})
	}
	var optionTag=document.getElementsByClassName("options");
	for(let i=0;i<optionTag.length;i++){
		optionTag[i].addEventListener("click",function(){
			this.parentElement.parentElement.previousElementSibling.innerText = this.innerText;
		})
	}
}
function complete(pointer){
	pointer.parentElement.previousElementSibling.value = pointer.innerText;
	pointer.parentElement.classList.remove("hienthi");
}