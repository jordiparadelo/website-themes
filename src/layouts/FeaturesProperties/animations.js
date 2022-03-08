import anime from "animejs";
import ScrollMagic from "scrollmagic";
import { controller } from "../../animations/scrollAnimation"
import { ScrollMagicPluginIndicator } from "scrollmagic-plugins";
// Register Plugin
ScrollMagicPluginIndicator(ScrollMagic);

const $Section = '#FeaturesProperties'

// Text Animaitons
function titleAnimation() {
    const headerTitle = document.querySelector(`${$Section} .header`);
    const headerChilds = [...headerTitle.children]

    anime({
        targets: headerChilds,
        translateY: ["50%", "0%"],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(500),
        easing: `cubicBezier(0.22, 1, 0.36, 1)`,
    })
}

// Media Animation
function mediaAnimation() {
    const media = document.querySelector(`${$Section} .horizontal-media-scroller`);

    anime({
        targets: `${$Section} .horizontal-media-scroller`,
        translateX: ["100%", "0%"],
        opacity: [0, 1],
        duration: 1500,
        delay: anime.stagger(100),
        easing: `cubicBezier(0.22, 1, 0.36, 1)`,
    })
}
function allMediaAnimation() {
    const media = document.querySelector(`${$Section} .horizontal-media-scroller`);
    const mediaChilds = [...media.children]

    anime({
        targets: mediaChilds,
        translateX: ["100%", "0%"],
        duration: 1500,
        delay: anime.stagger(250),
        easing: `cubicBezier(0.22, 1, 0.36, 1)`,
    })
}
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
        .on('enter', () => {
            titleAnimation()
            mediaAnimation()
            allMediaAnimation()
        })
}