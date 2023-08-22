gsap.from(".nav .icon", {
    opacity: 0,
    y: 20,
    duration: 1
})
gsap.from(".nav h1", {
    opacity: 0,
    y: 20,
    duration: 1
})
gsap.from("#img1, #img2, #img3, #img4, #img5", {
    opacity: 0,
    y: 80,
    duration: 1,
    delay: 1,
})
gsap.from(".txt", {
    opacity: 0,
    width: "0%",
    duration: 2,
    delay: 3
})
gsap.from(".left-arrow",
    {
        opacity: 0,
        duration: 1,
        delay: 4.5,
        duration: 1,
        y: 50
    })
gsap.from(".right-arrow",
    {
        opacity: 0,
        duration: 1,
        delay: 4.5,
        duration: 1,
        y: 50
    })
gsap.from(".social i", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.5
})
gsap.from(".bottom h1", {
    opacity: 0,
   x: -50,
    duration: 1,
    delay: 1.5
})