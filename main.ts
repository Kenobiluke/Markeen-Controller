gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    while (gamePad.keyState(GamerBitPin.P14)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        radio.sendNumber(3)
    }
    basic.clearScreen()
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    while (gamePad.keyState(GamerBitPin.P15)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        radio.sendNumber(4)
    }
    basic.clearScreen()
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    while (gamePad.keyState(GamerBitPin.P13)) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        radio.sendNumber(2)
    }
    basic.clearScreen()
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    while (gamePad.keyState(GamerBitPin.P8)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        radio.sendNumber(1)
    }
    basic.clearScreen()
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    while (gamePad.keyState(GamerBitPin.P1)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        radio.sendNumber(5)
    }
    basic.clearScreen()
    radio.sendNumber(0)
})
gamePad.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    while (gamePad.keyState(GamerBitPin.P2)) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
        radio.sendNumber(6)
    }
    basic.clearScreen()
    radio.sendNumber(0)
})
radio.setGroup(4)
radio.setTransmitPower(7)
