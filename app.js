const HIDDEN_CLASSNAME="hidden";
const loginForm=document.querySelector("#login-form");
const loginInputId=document.querySelector("#login-id");
const loginInputPassword=document.querySelector("#login-password");
const loginText=document.querySelector("#login-form h3");
const clock=document.querySelector("#clock");
const greeting=document.querySelector("#greeting");
const images=["딸기도넛.png","밀크도넛.png","초코도넛.png"];
const chosenImage=images[Math.floor(Math.random()*images.length)];
const bgImage=document.createElement("img");
bgImage.src=chosenImage;
bgImage.classList.add(HIDDEN_CLASSNAME);
document.body.appendChild(bgImage);
const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

//투두지우기
function deleteToDo(event){
	const li=event.target.parentElement;
	li.remove();
}
//투두줄긋기
function crossLine(event){
	const check=event.target.parentElement;
	if(check.style==="text-decoration:line-through"){
		check.style="text-decoration:''"//이부분 왜 코드가 안먹히는지 잘 모르겠음(체크박스 풀면 줄 지워지게 하는 부분)
	}
	else{
		check.style="text-decoration:line-through";
	}
	console.log(toDoList);
}
//투두새로만들기
function paintToDo(newTodo){
	const li=document.createElement("li");
	const checkbox=document.createElement("input");
	checkbox.id="check";
	checkbox.type="checkbox";
	checkbox.addEventListener("change",crossLine);
	const span=document.createElement("span");
	const button=document.createElement("button");
	button.innerText="삭제";
	button.addEventListener("click",deleteToDo);
	li.appendChild(checkbox);
	li.appendChild(span);
	li.appendChild(button);
	span.innerText=newTodo;
	toDoList.appendChild(li);
}
//투두제출
function handleToDoSubmit(event){
	event.preventDefault();
	const newTodo=toDoInput.value;
	toDoInput.value="";
	paintToDo(newTodo);
}
//투두제출이벤트리스너
toDoForm.addEventListener("submit",handleToDoSubmit);
//로그인제출
function onIdSubmit(event){
	if(loginInputPassword.value==="" || loginInputId.value===""){
		loginText.innerText="아이디 혹은 비밀번호를 입력해주세요."
		event.preventDefault();
	}
	else{
		event.preventDefault();
	const username=loginInputId.value;
	loginForm.classList.add(HIDDEN_CLASSNAME);
	greeting.innerText=`환영합니다 ${username}님!`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
	clock.classList.remove(HIDDEN_CLASSNAME);
	bgImage.classList.remove(HIDDEN_CLASSNAME);
	toDoForm.classList.remove(HIDDEN_CLASSNAME);
	}	
}
//시계
function getClock(){
	const date=new Date();
	const hours=String(date.getHours()).padStart(2,"0");
	const minutes=String(date.getMinutes()).padStart(2,"0");
	const seconds=String(date.getSeconds()).padStart(2,"0");
	clock.innerText=`${hours}:${minutes}:${seconds}`;
}
//시계초기화&인터벌
getClock();
setInterval(getClock, 1000);
//로그인이벤트리스너
loginForm.addEventListener("submit",onIdSubmit);