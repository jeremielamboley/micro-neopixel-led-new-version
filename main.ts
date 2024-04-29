input.onButtonPressed(Button.A, function () {
    LEDdirection = still
    strip.showColor(LedColors[LedColorIndex])
    if (LedColorIndex == 8) {
        LedColorIndex = 0
    } else {
        LedColorIndex = LedColorIndex + 1
    }
    runningTimeCeiling = input.runningTime() + timer
})
input.onButtonPressed(Button.AB, function () {
    LEDdirection = still
    strip.showRainbow(1, 360)
    runningTimeCeiling = input.runningTime() + timer
})
input.onButtonPressed(Button.B, function () {
    strip.showRainbow(1, 360)
    LEDdirection = forward
    runningTimeCeiling = input.runningTime() + timer
})
let runningTimeCeiling = 0
let timer = 0
let strip: neopixel.Strip = null
let LedColorIndex = 0
let LEDdirection = 0
let still = 0
let forward = 0
let LedColors: number[] = []
basic.showIcon(IconNames.Heart)
LedColors = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Orange),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Indigo),
neopixel.colors(NeoPixelColors.Violet),
neopixel.colors(NeoPixelColors.Purple),
neopixel.colors(NeoPixelColors.White)
]
forward = 1
let backward = -1
still = 0
LEDdirection = forward
LedColorIndex = 0
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
timer = 1 * 60000
runningTimeCeiling = timer
strip.setBrightness(40)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.rotate(LEDdirection)
    strip.show()
    basic.pause(200)
    if (input.runningTime() > runningTimeCeiling) {
        strip.clear()
    }
})
