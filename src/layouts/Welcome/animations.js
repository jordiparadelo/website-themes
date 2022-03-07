import anime from "animejs";

const $Section = '#Welcome'

// Text Animaitons
function titleAnimation() {
    const headerTitle = document.querySelector('.header_title');
    const headerChilds = [...headerTitle.children]

    anime({
        targets: `${$Section} .header *`,
        translateY: ["50%", "0%"],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(100),
        easing: `cubicBezier(0.22, 1, 0.36, 1)`,
        complete: function (anim) {
            console.log({ completed: anim.completed, targets: anim.targets });
        }
    })
    // console.log({ headerTitle, headerChilds })
}
// Init Animation
export function initAnimation() {
    titleAnimation()
}