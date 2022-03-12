import anime from "animejs";
import ScrollMagic from "scrollmagic";
import { controller } from "../../animations/scrollAnimation"
import { ScrollMagicPluginIndicator } from "scrollmagic-plugins";
// Register Plugin
ScrollMagicPluginIndicator(ScrollMagic);

const $Section = '#Instagram'

// Animation Timeline
const tl = anime.timeline({
    easing: `cubicBezier(0.22, 1, 0.36, 1)`,
    duration: 750,
})

// Idle Animation
function idleAnimation() {
    const headerChilds = document.querySelector(`${$Section} .header *`);
    const instagramGrid = document.querySelectorAll(`${$Section} .images-grid`);
    const gridImages = document.querySelectorAll(`${$Section} .grid_image img`);

    anime.set(gridImages, {
        scale: '1.5',
        opacity: 0
    });
    anime.set(headerChilds, {
        opacity: 0,
    });
    // anime.set(instagramGrid, {
    //     opacity: 0
    // });

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
    const gridImages = document.querySelectorAll(`${$Section} .grid_image img`);

    return {
        targets: gridImages,
        opacity: 1,
        delay: anime.stagger(200),
    }
}

// Init Animation
export function initAnimation() {
    // Grid Scroll on Y axis
    const scrollOnY = anime({
        targets: `${$Section} .grid_image img`,
        easing: `cubicBezier(0.22, 1, 0.36, 1)`,
        translateY: ['10%', '-5%'],
        position: 'relative',
        duration: 1000,
        autoplay: false,
        // update: (anim) => console.log(anim)
    })

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
                .add(imagesAnimation())
                .add(titleAnimation(), '-=600')
        })

    // Scroll Animation scene 
    new ScrollMagic.Scene({
        triggerElement: `${$Section}`,
        duration: '100%',
    })
        .addIndicators({ name: `${$Section} Scroll Indicator` })
        .on("progress", ({ progress }) => scrollOnY.seek(progress * 150))
        .addTo(controller)
}