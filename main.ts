controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 1) {
        info.changeScoreBy(1)
        info.startCountdown(10)
    }
    generate()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
        info.startCountdown(10)
    }
    generate()
})
function generate () {
    randomPick = randint(0, 1)
    if (randomPick == 0) {
        mySprite.sayText("push A")
    }
    if (randomPick == 1) {
        mySprite.sayText("push B")
    }
}
let randomPick = 0
let mySprite: Sprite = null
game.splash("Push A or B as directed")
mySprite = sprites.create(img`
    ...ffffff..........ccc..
    ...ff22ccff.......c44f..
    ....fffccccfff...c442f..
    ....cc24442222ccc4422f..
    ...c99b222222222cc22fc..
    ..c999111b222222222222c.
    .c2bb11199222ccccccc222f
    c22222222222c222cccfffff
    f22222222222442222ccc...
    .f222222222224442222c...
    ..ff2222222cffc44222c...
    ....fffffffcffffcccc....
    .........f2c2ffff.......
    .........fcc2ffff.......
    ..........ffffff........
    ........................
    `, SpriteKind.Player)
info.startCountdown(20)
generate()
