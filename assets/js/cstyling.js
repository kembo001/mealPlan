var choreographer = new Choreographer({
    animations: [{
        range: [-1, window.innerHeight * 4],
        selector: '#box',
        type: 'scale',
        style: 'opacity',
        from: .2,
        to: 1,
    }]
})

window.addEventListener('scroll', function() {
    choreographer.runAnimationsAt(window.pageYOffset)
})