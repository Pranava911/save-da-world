servos.P2.setAngle(90)
let _continue = false
while (_continue == false) {
    basic.showLeds(`
        # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
    `)
    if (input.logoIsPressed()) {
        _continue = true
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
    if (_continue == true) {
        //  If dim,
        //  turn on light
        //  else if bright,
        //  turn off light
        if (pins.analogReadPin(AnalogPin.P1) < 0) {
            servos.P2.setAngle(45)
        } else if (pins.analogReadPin(AnalogPin.P1) > 0) {
            servos.P2.setAngle(135)
        }
        
    }
    
})
