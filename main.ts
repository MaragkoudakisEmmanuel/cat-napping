input.onButtonPressed(Button.A, function () {
    Loggin = !(Loggin)
    if (Loggin) {
        basic.showIcon(IconNames.Target)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
let Loggin = false
Loggin = false
loops.everyInterval(60000, function () {
    if (Loggin) {
        datalogger.log(
        datalogger.createCV("Temp", input.temperature()),
        datalogger.createCV("Light", input.lightLevel())
        )
    }
})
basic.forever(function () {
	
})
