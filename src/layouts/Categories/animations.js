import anime from "animejs";

const $Section = '#Categories'

// Text Animaitons
function titleAnimation() {
    const headerTitle = document.querySelector('.header_title');

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
    // console.log({ headerTitle })
}
// Image Scroll Animations
// const scrollAnimation = anime({
//     targets: `${$Section} .grid_image`,

//     y: ["-50%", "50%"],

//     easing: `cubicBezier(0.22, 1, 0.36, 1)`,
//     autoplay: false,
// })
function scrollAnimation() {
    const allImages = document.querySelectorAll(`${$Section} .grid_image`)
    const sectionHeight = document.querySelector($Section).getBoundingClientRect().height


    return anime({
        targets: allImages,
        translateY: "200",
        easing: `cubicBezier(0.22, 1, 0.36, 1)`,
        autoplay: false,
        // update: () => window.scroll(0, allImages.y)
    })
}
// Init Animation
export function initAnimation() {
    titleAnimation()

    window.onscroll = (e) => {
        const sectionTop = document.querySelector(`${$Section}`).offsetTop;
        const scrollPercentage = Math.round((window.scrollY - sectionTop) / document.querySelector(`${$Section}`).clientHeight * 100)
        if (scrollPercentage < 0 || scrollPercentage > 100) return
        scrollAnimation().seek(scrollPercentage)
        console.log(scrollPercentage, scrollAnimation())
    }
}