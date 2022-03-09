import anime from "animejs";
import ScrollMagic from "scrollmagic";
import { controller } from "../../animations/scrollAnimation"

const $Section = '#Welcome'
// export const controller = new ScrollMagic.Controller()

// Animation Timeline
const tl = anime.timeline({
    easing: `cubicBezier(0.22, 1, 0.36, 1)`,
    duration: 750,
})

// Idle Animation
function idleAnimation() {
    const headerTitle = document.querySelector(`${$Section} .header_title`);
    const titleChilds = [...headerTitle.children]
    const headerText = document.querySelector(`${$Section} .header_description`);
    // const propertiesChilds = [...propertiesList.children]

    console.log(headerTitle, titleChilds)

    anime.set([titleChilds, headerText], {
        opacity: 0
    });

}
// Title Animaitons
function titleAnimation() {
    const headerTitle = document.querySelector(`${$Section} .header_title`);
    const titleChilds = [...headerTitle.children]

    return {
        targets: titleChilds,
        translateY: ["20%", "0%"],
        opacity: [0, 1],
        delay: anime.stagger(200),
    }
}
// Text Animaitons
function textAnimation() {
    const headerText = document.querySelector(`${$Section} .header_description`);

    return {
        targets: headerText,
        translateY: ["20%", "0%"],
        opacity: [0, 1],
        delay: anime.stagger(200),
    }
}
// Image Scroll on Y axis
const scrollOnY = anime({
    targets: `${$Section} img`,
    scale: "1.5",
    easing: `cubicBezier(0.22, 1, 0.36, 1)`,
    duration: 1000,
    // autoplay: false
})

// Init Animation
export function initAnimation() {
    // Init Animation State
    idleAnimation()
    // Build a Animation scene 
    new ScrollMagic.Scene({
        triggerElement: `${$Section}`,
        duration: '100%',
        triggerHook: 0.5,
        reverse: false
    })
        .addTo(controller)
        .addIndicators({
            name: `${$Section} Indicator`
        })
        .on('enter', () => {
            tl
                .add(titleAnimation())
                .add(textAnimation(), '-=600')
        })

    const scrollScene = new ScrollMagic.Scene({
        triggerElement: `${$Section}`,
        duration: '100%',
        triggerHook: 0.5,
    })
        .addTo(controller)
        .addIndicators({
            name: `${$Section} Scroll Indicator`
        })
        .on("progress", ({ progress }) => {
            // console.log(scrollOnY, (progress * 100))
            scrollOnY.seek(progress * 100)
        })
}