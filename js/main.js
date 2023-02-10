// hunddel other-link click
let otherLink = document.querySelector(".other-link")
let mainmenu = document.querySelector(".main-menu .container")

otherLink.onmouseenter = () => {
    mainmenu.classList.add("active")
}
mainmenu.onmouseleave = ()=> {
    mainmenu.classList.remove("active")
}
// hundel up-btn action with our-skills  and stats action
let upBtn = document.querySelector(".up") 
let skills = document.querySelector('.our-skills')
let skillprogSpan = document.querySelectorAll('.our-skills .prog span')
let stats = document.querySelector('.stats')
let statNum = document.querySelectorAll('.stats .number')

window.onscroll = () => {
    //upbtn
    if (window.scrollY >= 600) {
        upBtn.style.display = "block"
    } else {
        upBtn.style.display = "none"
    }
    //skills progress btn action
    if (window.scrollY >= skills.offsetTop -100) {
        skillprogSpan.forEach((span) => {
            span.style.width = span.parentElement.getAttribute('data-progress')
        })
    }  else if (window.scrollY <= skills.offsetTop) {
        skillprogSpan.forEach((span) => {
            span.style.width = `0%`
        })
    } 
    //stats action
    if (window.scrollY >= stats.offsetTop -300 ) {
        statNum.forEach((num) => {
            let goal = num.parentElement.getAttribute('data');
            let countUp = setInterval(() => {
                let n = +num.innerHTML++
                if (n == goal){
                    num.innerHTML = n;
                    clearInterval(countUp);
                }
            },2000/goal) // for finishing the goal in the same time
        })
    }
}
//upBtn action
upBtn.onclick = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}
// hundel event action
let counter = setInterval(() => {
    let eventDate = new Date('Dec 31, 2023 23:59:59').getTime();//millseconds from1970
    let dateNow = new Date()
    let RemainigTime = eventDate - dateNow 
    //display time units
    let seconds = Math.floor(RemainigTime %(1000*60*60*24)%(1000*60*60)%(1000*60) /1000)
    document.querySelector('.time .seconds span:first-child').innerHTML = seconds<10 ? `0${seconds}` :  seconds 
    let minutes = Math.floor(RemainigTime %(1000*60*60*24)%(1000*60*60)/(1000*60)) 
    document.querySelector('.time .minutes span:first-child').innerHTML = innerHTML = minutes<10 ? `0${minutes}` :  minutes
    let hours = Math.floor(RemainigTime %(1000*60*60*24)/(1000*60*60)) 
    document.querySelector('.time .hours span:first-child').innerHTML = hours<10 ? `0${hours}` :  hours
    let days = Math.floor(RemainigTime /(1000*60*60*24))//recommended to strat with days
    document.querySelector('.time .days span:first-child').innerHTML = days
},1000)







