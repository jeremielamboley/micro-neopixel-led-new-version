function oneColorWipe (colorNumber: number) {
    for (let index = 0; index < numberOfLEDs; index++) {
        strip.setPixelColor(0, LedColors[colorNumber])
        strip.show()
        strip.rotate(forward)
        basic.pause(pauseDuration)
    }
}
function rotateOnePixel (colorNumber: number) {
    strip.setPixelColor(0, LedColors[colorNumber])
    for (let index = 0; index < numberOfLEDs; index++) {
        strip.show()
        strip.rotate(forward)
        basic.pause(pauseDuration)
    }
}
input.onButtonPressed(Button.A, function () {
    strip.clear()
    LEDMode = 0
    runningTimeCeiling = input.runningTime() + timer
    basic.showIcon(IconNames.Heart)
    strip.showRainbow(1, 360)
})
input.onButtonPressed(Button.AB, function () {
    LEDMode = 2
    runningTimeCeiling = input.runningTime() + timer
    basic.showIcon(IconNames.Happy)
    strip.showRainbow(1, 360)
})
input.onButtonPressed(Button.B, function () {
    LEDMode = 1
    runningTimeCeiling = input.runningTime() + timer
    basic.showIcon(IconNames.SmallHeart)
})
function rotatePixelWipe (colorNumber: number) {
    strip.clear()
    strip.setPixelColor(0, LedColors[colorNumber])
    for (let index = 0; index < numberOfLEDs; index++) {
        if (LEDMode == 1) {
            strip.rotate(forward)
            strip.show()
            basic.pause(pauseDuration)
        } else {
        	
        }
    }
    for (let index = 0; index < numberOfLEDs; index++) {
        if (LEDMode == 1) {
            strip.setPixelColor(0, LedColors[colorNumber])
            strip.rotate(forward)
            strip.show()
            basic.pause(pauseDuration)
        } else {
        	
        }
    }
}
let LEDMode = 0
let runningTimeCeiling = 0
let timer = 0
let strip: neopixel.Strip = null
let numberOfLEDs = 0
let forward = 0
let pauseDuration = 0
let LedColors: number[] = []
LedColors = [
neopixel.colors(NeoPixelColors.Red),
neopixel.colors(NeoPixelColors.Yellow),
neopixel.colors(NeoPixelColors.Green),
neopixel.colors(NeoPixelColors.Blue),
neopixel.colors(NeoPixelColors.Purple),
neopixel.colors(NeoPixelColors.White)
]
pauseDuration = 50
let speed = 1
forward = speed
let backward = speed * -1
let LedColorArrayNumber = 0
numberOfLEDs = 22
strip = neopixel.create(DigitalPin.P2, numberOfLEDs, NeoPixelMode.RGB)
timer = 10 * 60000
runningTimeCeiling = timer
LEDMode = 0
strip.showRainbow(1, 360)
basic.forever(function () {
    if (input.runningTime() > runningTimeCeiling) {
        strip.clear()
    } else {
        if (LEDMode == 0) {
            strip.rotate(forward)
            strip.show()
            basic.pause(pauseDuration)
        } else if (LEDMode == 1) {
            while (LEDMode == 1) {
                for (let index = 0; index <= LedColors.length - 1; index++) {
                    rotatePixelWipe(index)
                }
            }
        } else if (LEDMode == 2) {
            strip.rotate(0)
        } else {
        	
        }
    }
})
