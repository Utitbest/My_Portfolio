    if(navigator.onLine == true){
        ScrollReveal({
            distance:'80px',
            duration:2000,
            delay:100
        });
        ScrollReveal().reveal('.Imageise', {origin:'right'});
        ScrollReveal().reveal('.murerr', {origin:'left'});
        ScrollReveal().reveal('.thesmae', {origin:'bottom'});    
        ScrollReveal().reveal('.rada1', {origin:'left'});
        ScrollReveal().reveal('.rada2', {origin:'right'});
        ScrollReveal().reveal('.to_me3', {origin:'top'});
        ScrollReveal().reveal('.to_me4', {origin:'bottom'});
        ScrollReveal().reveal('.jejeje', {origin:'center'});
        ScrollReveal().reveal('.me_love', {origin:'bottom'}); 
        ScrollReveal().reveal('.tapines', {origin:'bottom'});
        ScrollReveal().reveal('.Forform', {origin:'right'});
        ScrollReveal().reveal('.contactwrap', {origin:'left'});
    }

let rtnTxr = document.querySelector('.ueryyryry');
let txtarry = ["I\'m a Web Developer An Graphic Designer     ", 'Am a full stack developer    ', 'I code with, HTML, CSS, JAVASCRIPT,   ','PHP, BOOTSTRAP AND MYSQL.   '];
let starIndex = 0;
let writeArray = 0;

setInterval(function(){
    let txtInside = rtnTxr.innerHTML;
    if(starIndex >= txtarry[writeArray].length && rtnTxr.getAttribute('typing') == 'true'){
        rtnTxr.innerHTML = txtInside.toString().slice(0, -1);
        let textInsideLLenght = txtInside.length;

        if(textInsideLLenght <= 0){
            writeArray++;
            starIndex = 0;
            rtnTxr.setAttribute('typing', false)
        }
    }
        if(writeArray >= txtarry.length){
            writeArray = 0; 
        }
    rtnTxr.innerHTML += txtarry[writeArray].charAt(starIndex);
    rtnTxr.setAttribute('typing', true)
    starIndex++;    
}, 200);



window.addEventListener('scroll', function(){
    var scrolling = document.querySelectorAll('.scrolling');
    var navbar = document.querySelector('.jkkkkd');
    var sectors = document.querySelectorAll('.sectorsdem')
    navbar.classList.toggle('scroll-active', window.scrollY > 35);

    sectors.forEach((sec, i) =>{
        var top = window.scrollY;
        var offset = sec.offsetTop;
        var height = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if(top > offset && top < offset + height){
            scrolling.forEach((single, indico) =>{
                single.classList.remove('active');
                document.querySelector('.scrolling[href*=' +id +']').classList.add('active')
            })
        }
    })
})

   class Firework{
    constructor(x, y){
        this.x = x + window.scrollX;
        this.y = y + window.scrollY;
        this.size = Math.floor(Math.random() * 10) + 5;
        this.animationDuration = Math.random() * 10 + 20;
        this.fadeOutDelay = Math.random() * 2 + 20;

        this.file = document.createElement('div')
        this.file.className = 'firework';
        this.file.style.left = this.x + 'px';
        this.file.style.top = this.y + 'px';
        this.file.style.width = this.size + 'px';
        this.file.style.height = this.size + 'px';
        this.file.style.animationDuration = this.animationDuration + 's';

        document.querySelector('.pussycalt').appendChild(this.file);

        setTimeout(() =>{
            this.fadeOut();
        }, this.fadeOutDelay * 1000)
    }
    fadeOut() {
        this.file.style.opacity = 0;
        setTimeout(() =>{
            this.file.remove();
        }, 1000)       
    }

    static randomPosition(){
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);

        if(x >= window.innerWidth - 100){
            x = window.innerWidth / 2;
        }
        if(y >= window.innerWidth - 100){
            y = window.innerWidth / 2;
        }
        return {x, y}
    }
    static createRandomFirework(){
        const {x, y} = Firework.randomPosition();
        new Firework(x, y)
    }
}
setInterval(() => {
    Firework.createRandomFirework();
}, 500);

document.addEventListener('click', (event) =>{
    let x = event.clientX;
    let y = event.clientY;
    if(x >= window.innerWidth - 150){
        x = window.innerWidth / 2;
    }
    if(y >= window.innerWidth - 130){
        y = window.innerWidth / 2;
    }
    new Firework(x, y);
});
let blacke = document.querySelector('.blacke')
let men = new Date()
let mens = men.getFullYear();
    blacke.innerHTML = 'Utitbest Akpan - All right Reserved &copy; 2022 - ' + mens;  


window.addEventListener('online', FreashIn)
window.addEventListener('offline', FreashOff)

function FreashIn(){
    let pussycalt1 = document.querySelector('.pussycalt1');
    let totori = document.createElement('div')
        totori.className = 'heartAttack';
        let pink = document.createElement('div')
            pink.className = 'lane';
            pink.innerHTML = 'You\'re Back Online';
            totori.append(pink)


        pussycalt1.append(totori)

        setTimeout(() =>{
            totori.remove()
        }, 6000)
}
function FreashOff(){
    let pussycalt1 = document.querySelector('.pussycalt1');
    let totori = document.createElement('div');
        totori.className = 'heartAttack';
        let pink = document.createElement('div')
            pink.className = 'lane';
            pink.innerHTML = 'You\'re Internet is down';
            totori.append(pink)
        pussycalt1.append(totori)
        setTimeout(() =>{
            totori.remove()
        }, 9000)
}
let Decrease;
let Increase;
let html1 = document.querySelectorAll('.html1')
    html1.forEach((raw, onraw)=>{
        raw.addEventListener('mouseenter', function(){
            clearInterval(Increase)
            this.classList.add('Alanwalker')
            let Numcounting = document.querySelectorAll('.ddw')
            let Arrdee = Number(Numcounting[onraw].innerHTML);
            Decrease = setInterval(()=>{
                if(--Arrdee != 0){
                    Numcounting[onraw].innerHTML = Arrdee;
                };
                if(Arrdee <= 0){
                    clearInterval(Decrease)
                };
            }, 50);
        });
        let Numcounting = document.querySelectorAll('.ddw')
        let bady = Numcounting[onraw].getAttribute('data');
        let connectee = Number(bady)
        raw.addEventListener('mouseleave', function(){
            clearInterval(Decrease)
            this.classList.remove('Alanwalker')
            let stamp = 0;
            Increase = setInterval(()=>{
                if(stamp <= connectee){
                    Numcounting[onraw].innerHTML = stamp;
                }
                stamp++;
            }, 50)
        })
    });