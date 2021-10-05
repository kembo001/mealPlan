var choreographer = new Choreographer({
    animations: [{
        range: [-1, window.innerHeight * 4],
        selector: '#box',
        type: 'scale',
        style: 'opacity',
        from: 1,
        to: .3,
    }]
})

window.addEventListener('scroll', function() {
    choreographer.runAnimationsAt(window.pageYOffset)
})