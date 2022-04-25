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
        continu = true
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
        basic.showNumber(pins.analogReadPin(AnalogPin.P1))
        if (pins.analogReadPin(AnalogPin.P1) == 3) {
            servos.P2.setAngle(65)
        } else if (pins.analogReadPin(AnalogPin.P1) == 2) {
            servos.P2.setAngle(115)
        }
        
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    servos.P2.setAngle(90)
    
})
