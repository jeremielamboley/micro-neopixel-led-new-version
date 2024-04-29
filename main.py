def on_button_pressed_a():
    global LEDdirection, LedColorIndex, runningTimeCeiling
    LEDdirection = still
    strip.show_color(LedColors[LedColorIndex])
    if LedColorIndex == 8:
        LedColorIndex = 0
    else:
        LedColorIndex = LedColorIndex + 1
    runningTimeCeiling = input.running_time() + timer
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global LEDdirection, runningTimeCeiling
    LEDdirection = still
    strip.show_rainbow(1, 360)
    runningTimeCeiling = input.running_time() + timer
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global LEDdirection, runningTimeCeiling
    strip.show_rainbow(1, 360)
    LEDdirection = forward
    runningTimeCeiling = input.running_time() + timer
input.on_button_pressed(Button.B, on_button_pressed_b)

runningTimeCeiling = 0
timer = 0
strip: neopixel.Strip = None
LedColorIndex = 0
LEDdirection = 0
still = 0
forward = 0
LedColors: List[number] = []
basic.show_icon(IconNames.HEART)
LedColors = [neopixel.colors(NeoPixelColors.RED),
    neopixel.colors(NeoPixelColors.ORANGE),
    neopixel.colors(NeoPixelColors.YELLOW),
    neopixel.colors(NeoPixelColors.GREEN),
    neopixel.colors(NeoPixelColors.BLUE),
    neopixel.colors(NeoPixelColors.INDIGO),
    neopixel.colors(NeoPixelColors.VIOLET),
    neopixel.colors(NeoPixelColors.PURPLE),
    neopixel.colors(NeoPixelColors.WHITE)]
forward = 1
backward = -1
still = 0
LEDdirection = forward
LedColorIndex = 0
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
timer = 1 * 60000
runningTimeCeiling = timer
strip.set_brightness(40)
strip.show_rainbow(1, 360)

def on_forever():
    strip.rotate(LEDdirection)
    strip.show()
    basic.pause(200)
    if input.running_time() > 600000:
        strip.clear()
basic.forever(on_forever)
