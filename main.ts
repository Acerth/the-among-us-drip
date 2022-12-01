enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showNumber(0)
        RightWheelStatus = 1
    }
    if (receivedNumber == 1) {
        basic.showNumber(1)
        LeftWheelStatus = 1
    }
    if (receivedNumber == 2) {
        basic.showNumber(2)
        BothWheelStatus = 1
    }
    if (receivedNumber == 3) {
        basic.showNumber(3)
        BothWheelStatus = 0
        LeftWheelStatus = 0
        RightWheelStatus = 0
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
    servos.P2.run(-50)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0)
    servos.P1.run(0)
    servos.P2.run(0)
    servos.P1.stop()
    servos.P2.stop()
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Sixteenth))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
})
let BothWheelStatus = 0
let LeftWheelStatus = 0
let RightWheelStatus = 0
radio.setGroup(69)
basic.showNumber(0)
loops.everyInterval(1, function () {
    if (RightWheelStatus == 1) {
        servos.P1.run(-50)
    }
    if (RightWheelStatus == 0) {
        servos.P1.stop()
    }
    if (LeftWheelStatus == 1) {
        servos.P2.run(50)
    }
    if (LeftWheelStatus == 0) {
        servos.P2.stop()
    }
    if (BothWheelStatus == 1) {
        servos.P1.run(-50)
        servos.P2.run(50)
    }
    if (BothWheelStatus == 0) {
        servos.P1.stop()
        servos.P2.stop()
    }
})
