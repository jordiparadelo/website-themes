import anime from "animejs";
import ScrollMagic from "scrollmagic";
import { controller } from "../../animations/scrollAnimation"
import { ScrollMagicPluginIndicator } from "scrollmagic-plugins";
// Register Plugin
ScrollMagicPluginIndicator(ScrollMagic);

const $Section = '#Discover'

// Animation Timeline
const tl = anime.timeline({
    easing: `cubicBezier(0.22, 1, 0.36, 1)`,
    duration: 750,
})

// Idle Animation
function idleAnimation() {
    const headerChilds = document.querySelector(`${$Section} .header *`);
    const galleryImages = document.querySelectorAll(`${$Section} .image-gallery`);


    anime.set(headerChilds, {
        opacity: 0
    });
    anime.set(galleryImages, {
        opacity: 0
    });

}
// Text Animaitons
function titleAnimation() {
    const headerTitle = document.querySelector(`${$Section} .header`);
    const headerChilds = [...headerTitle.children]

    return {
        targets: headerChilds,
        translateY: ["20%", "0%"],
        opacity: [0, 1],
        delay: anime.stagger(200),
    }
}
// Property List Animaiton
function imagesAnimation() {
    const galleryImages = document.querySelectorAll(`${$Section} .image-gallery`);

    return {
        targets: galleryImages,
        translateY: ["20%", "0%"],
        opacity: [0, 1],
        delay: anime.stagger(200),
    }
}

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
        // .addIndicators({name: `${$Section} Indicator`})
        .on('enter', () => {
            tl
                .add(titleAnimation())
                .add(imagesAnimation(), '-=600')
        })
}