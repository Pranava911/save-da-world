servos.P2.set_angle(90)
continu = False
while continu == False:
    basic.show_leds("""
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
    """)
    if input.logo_is_pressed():
        _continue = True
basic.show_leds("""
    . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
""")
basic.pause(1000)

def on_forever():
    if _continue == True:
        # If dim,
        # turn on light
        # else if bright,
        # turn off light
        if pins.analog_read_pin(AnalogPin.P1) < 0:
            servos.P2.set_angle(45)
        elif pins.analog_read_pin(AnalogPin.P1) > 0:
            servos.P2.set_angle(135)
basic.forever(on_forever)
