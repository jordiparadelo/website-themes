import anime from "animejs";
import ScrollMagic from "scrollmagic";
import { controller } from "../../animations/scrollAnimation"

const $Section = '#Welcome'
// export const controller = new ScrollMagic.Controller()

// Text Animaitons
function titleAnimation() {
    const headerTitle = document.querySelector(`${$Section} .header`);
    const headerChilds = [...headerTitle.children]

    return anime({
        targets: headerChilds,
        translateY: ["50%", "0%"],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(500),
        easing: `cubicBezier(0.22, 1, 0.36, 1)`,
    })
    // console.log({ headerTitle, headerChilds })
}

const imageAnimation = anime({
    targets: `${$Section} img`,
    scale: 2,
    duration: 1000,
    easing: 'linear',
})
// Init Animation
export function initAnimation() {
    // Build a scene 
    new ScrollMagic.Scene({
        triggerElement: `${$Section}`,
        duration: '100%',
        triggerHook: 0.2,
        reverse: false
    })
        .addTo(controller)
        .addIndicators({
            name: `${$Section} Indicator`
        })
        .on('enter', () => titleAnimation().restart)

    new ScrollMagic.Scene({
        triggerElement: `${$Section}`,
        duration: '100%',
        triggerHook: 0.2,
        reverse: false
    })
        .addTo(controller)
        .addIndicators({
            name: `${$Section} Indicator`
        })
        .on('progress', (progress) => {
            console.log(progress)
            imageAnimation.seek(progress * 1000)
        })
}