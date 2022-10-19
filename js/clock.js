const clock = document.querySelector('#clock')

function getClock(){
    const date = new Date();
    const housrs = String(date.getHours()).padStart(2,'0')
    const minutes = String(date.getMinutes()).padStart(2,'0')
    const seconds = String(date.getSeconds()).padStart(2,'0')

    clock.innerText = (`${housrs}:${minutes}:${seconds}`);
}

getClock() // 한번 호출하고 난 후면 바로 시간이 보이고 1초마다 시간이 갱신된다.
setInterval(getClock,1000); // setinterval 을 활용해서 실시간 시간을 1초마다 보이게 갱신하는것
