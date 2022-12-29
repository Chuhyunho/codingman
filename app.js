const title=document.querySelector("#title");
let num=0
title.innerText="click : "+num
function clicknum() {
	num++
	title.innerText="click : "+ num
};
title.addEventListener("click",clicknum);
