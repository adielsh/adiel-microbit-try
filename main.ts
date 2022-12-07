input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # # . . #
            # # # . .
            . # . # .
            # # # . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    led.plot(3, 4)
})
