input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        servos.P0.setAngle(90)
        led.plot(3, 4)
        basic.showLeds(`
            # # # . #
            . . . . .
            # # . # .
            # # # . .
            # . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
	
})
