_continu = False
continu = False
servos.P2.set_angle(90)
while continu == False:
    basic.show_leds("""
        # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
    """)
    if input.logo_is_pressed():
        continu = True
basic.show_leds("""
    . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
""")
basic.pause(1000)

def on_forever():
    if continu == True:
        # If dim,
        # turn on light
        # else if bright,
        # turn off light
        basic.show_number(pins.analog_read_pin(AnalogPin.P0))
        if pins.analog_read_pin(AnalogPin.P1) < 400:
            servos.P2.set_angle(45)
        elif pins.analog_read_pin(AnalogPin.P1) > 1000:
            servos.P2.set_angle(135)
basic.forever(on_forever)
