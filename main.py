def on_forever():
    if pins.digital_read_pin(DigitalPin.P0) > 0:
        pass
    else:
        pass
basic.forever(on_forever)
