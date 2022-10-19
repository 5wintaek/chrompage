const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden';
const USERNAME_KEY = 'username';
// 대문자를 쓴 이유는 일반적으로 관습
// hidden 과 username 과 같이 string 이 반복적으로 들어갈 경우 변수로 저장을 해줌으로써 오타를막음
function LogInSubmit(event) {
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASS);// 앞에는 저장될 아이템이름, 뒤는 변수이름
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = 'Hello '+ username  
    greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", LogInSubmit) 
} else{
    paintGreeting(savedUsername); // 유저정보가 local stroage로부터 오고있다.
}


