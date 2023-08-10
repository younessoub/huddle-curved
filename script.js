const divs = document.querySelectorAll('.feature-main>div');

function reveal() {
    divs.forEach(e=>{
        // console.log(e.getBoundingClientRect().top)
        if(window.innerHeight - e.getBoundingClientRect().top > 150){
            e.classList.add('reveal')
        }
    })
}

document.addEventListener('scroll', reveal)