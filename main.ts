let Sprite = game.createSprite(2, 2)
basic.forever(function on_forever() {
    Sprite.ifOnEdgeBounce()
    if (input.buttonIsPressed(Button.A)) {
        Sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    
    if (input.buttonIsPressed(Button.B)) {
        Sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    }
    
    if (input.isGesture(Gesture.TiltLeft)) {
        Sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    }
    
    if (input.isGesture(Gesture.TiltRight)) {
        Sprite.change(LedSpriteProperty.X, 1)
        basic.pause(500)
    }
    
})
