input.onButtonPressed(Button.B, function () {
    basic.showNumber(Counter)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Counter += 1
    basic.showLeds(`
        . . . . #
        . . . # #
        . # . . #
        # # # . #
        . # . . #
        `)
    basic.pause(500)
    basic.clearScreen()
})
let Counter = 0
Counter = 0
basic.forever(function () {
    basic.showIcon(IconNames.Asleep)
})
