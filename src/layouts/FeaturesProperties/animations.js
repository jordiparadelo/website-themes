import anime from "animejs";

const $Section = '#FeaturesProperties'

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
        },
    })
    console.log({ headerTitle, headerChilds })
}
// Media Animation
function mediaAnimation() {
    const media = document.querySelector('.horizontal-media-scroller');
    // const headerChilds = [...headerTitle.children]

    anime({
        targets: `${$Section} .horizontal-media-scroller`,
        translateX: ["100%", "0%"],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(100),
        easing: `cubicBezier(0.22, 1, 0.36, 1)`,
        complete: function (anim) {
            console.log({ completed: anim.completed, targets: anim.targets });
        }
    })
}
function allMediaAnimation() {
    const media = document.querySelector('.horizontal-media-scroller');
    // const headerChilds = [...headerTitle.children]

    anime({
        targets: `${$Section} .horizontal-media-scroller *`,
        translateY: ["100%", "0%"],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(100),
        easing: `cubicBezier(0.22, 1, 0.36, 1)`,
        complete: function (anim) {
            console.log({ completed: anim.completed, targets: anim.targets });
        }
    })
}
// Init Animation
export function initAnimation() {
    titleAnimation()
    mediaAnimation()
}