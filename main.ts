let _continu = false
let continu = false
servos.P2.setAngle(90)
while (continu == false) {
    basic.showLeds(`
        # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
    `)
    if (input.logoIsPressed()) {
        _continu = true
    }
    
}
basic.showLeds(`
    . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
`)
basic.pause(1000)
basic.forever(function on_forever() {
    if (continu == true) {
        //  If dim,
        //  turn on light
        //  else if bright,
        //  turn off light
        basic.showNumber(pins.analogReadPin(AnalogPin.P0))
        if (pins.analogReadPin(AnalogPin.P1) < 400) {
            servos.P2.setAngle(45)
        } else if (pins.analogReadPin(AnalogPin.P1) > 1000) {
            servos.P2.setAngle(135)
        }
        
    }
    
})
