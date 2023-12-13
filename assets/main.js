gsap.set('img', {
    opacity: 0
})

gsap.to('.image-v1', {
    opacity: 1,
    duration: 3,
    repeat: 0
})

gsap.to('.image-v2', {
    opacity: 0.4
})

gsap.set('.feature-section-item', {
    opacity: 0,
})

gsap.to('.feature-section-item', {
    opacity: 1,
    duration: 3,
    scrollTrigger: {
        trigger: '.feature-section'
    },
    stagger: 0.5
})

easyScrollDots({
    'fixedNav': false,
    'fixedNavId': '',
    'fixedNavUpward': false,
    'offset': 0
  });
