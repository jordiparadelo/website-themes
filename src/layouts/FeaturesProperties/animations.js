import anime from "animejs";
import ScrollMagic from "scrollmagic";
import { controller } from "../../animations/scrollAnimation"
import { ScrollMagicPluginIndicator } from "scrollmagic-plugins";
// Register Plugin
ScrollMagicPluginIndicator(ScrollMagic);

const $Section = '#FeaturesProperties'

// Animation Timeline
const tl = anime.timeline({
    easing: `cubicBezier(0.22, 1, 0.36, 1)`,
    duration: 750,
})

// Idle Animation
async function idleAnimation() {
    const headerChilds = document.querySelectorAll(`${$Section} .header_title *`);
    let propertiesCards = document.querySelectorAll(`${$Section} .property-card`);

    anime.set(headerChilds, {
        opacity: 0
    });

    await anime.set(propertiesCards, { opacity: 0 });

}

// Text Animaitons
function titleAnimation() {
    const headerTitle = document.querySelector(`${$Section} .header_title`);
    const headerChilds = [...headerTitle.children]

    return {
        targets: headerChilds,
        translateY: ["20%", "0%"],
        opacity: [0, 1],
        delay: anime.stagger(200),
    }
}
// Property List Animaiton
function propertiesAnimation() {
    const propertiesCards = document.querySelectorAll(`${$Section} .property-card`);

    return {
        targets: propertiesCards,
        translateX: ["20%", "0%"],
        opacity: [0, 1],
        delay: anime.stagger(200),
    }
}

// Init Animation
export async function initAnimation() {
    // Init Animation State
    await idleAnimation()
    // Build a Animation scene 
    new ScrollMagic.Scene({
        triggerElement: `${$Section}`,
        duration: '100%',
        triggerHook: 0.5,
        reverse: false
    })
        .addTo(controller)
        // .addIndicators({name: `${$Section} Indicator`})
        .on('enter', () => {
            tl
                .add(titleAnimation())
                .add(propertiesAnimation(), '-=600')
        })
}