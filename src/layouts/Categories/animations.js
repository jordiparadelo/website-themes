import anime from "animejs";
import ScrollMagic from "scrollmagic";
import { controller } from "../../animations/scrollAnimation"
import { ScrollMagicPluginIndicator } from "scrollmagic-plugins";
// Register Plugin
ScrollMagicPluginIndicator(ScrollMagic);

const $Section = '#Categories'

// Animation Timeline
const tl = anime.timeline({
    easing: `cubicBezier(0.22, 1, 0.36, 1)`,
    duration: 750,
})

// Idle Animation
function idleAnimation() {
    const headerChilds = document.querySelectorAll(`${$Section} .header_title *`);
    const categoriesGrid = document.querySelector(`${$Section} .header + *`).children;

    anime.set(categoriesGrid, {
        opacity: 0
    });
    anime.set(headerChilds, {
        opacity: 0
    });

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
// Categoy Images Animaiton
function categoriesAnimation() {
    const categoriesGrid = document.querySelector(`${$Section} .header + *`);
    const categoriesChilds = [...categoriesGrid.children]

    return {
        targets: categoriesChilds,
        translateY: ["20%", "0%"],
        opacity: [0, 1],
        delay: anime.stagger(200),
    }
}
// Categoy List Animaiton
function listAnimation() {
    const categoryListItems = document.querySelectorAll(`${$Section} .category-list *`);

    if (!categoryListItems) return

    return {
        targets: categoryListItems,
        opacity: [0, 1],
        delay: anime.stagger(50),
    }
}

// Init Animation
export function initAnimation() {
    // Grid Scroll on Y axis
    const scrollOnY = anime({
        targets: `${$Section} .grid_image`,
        easing: `cubicBezier(0.22, 1, 0.36, 1)`,
        translateY: '20%',
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
        duration: '1000%',
        triggerHook: 0.5,
        reverse: false
    })
        .addTo(controller)
        // .addIndicators({ name: `${$Section} Indicator` })
        .on('enter', () => {
            tl
                .add(titleAnimation())
                .add(listAnimation(), '-=500')
                .add(categoriesAnimation(), '-=1500')
        })

    // Scroll Animation scene 
    new ScrollMagic.Scene({
        triggerElement: `${$Section}`,
        duration: '100%',
    })
        // .addIndicators({ name: `${$Section} Scroll Indicator` })
        .on("progress", ({ progress }) => scrollOnY.seek(progress * 150))
        .addTo(controller)
}