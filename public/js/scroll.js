const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
let cont = 0;
let vetor = [];

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 0.55));
    target.forEach(function(element) {
        if ((windowTop) > element.offsetTop) {
            let index = vetor.findIndex(val => val == element.offsetTop);
            if (index < 0) {
                vetor.push(element.offsetTop)

            }
            element.classList.add(animationClass);




        } else {
            element.classList.remove(animationClass);
        }
    })
}

animeScroll();

window.addEventListener('scroll', function() {
    if (vetor.length < 8) {
        target.forEach(function(element) {

            if (element.className != animationClass) {
                animeScroll();
                console.log(vetor)
                console.log(vetor.length)
            } else {

            }
        })
    }
})