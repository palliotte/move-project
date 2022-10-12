Sprite = game.create_sprite(2, 2)

def on_forever():
    Sprite.if_on_edge_bounce()
    if input.button_is_pressed(Button.A):
        Sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    if input.button_is_pressed(Button.B):
        Sprite.change(LedSpriteProperty.Y, -1)
        basic.pause(500)
    if input.is_gesture(Gesture.TILT_LEFT):
        Sprite.change(LedSpriteProperty.X, -1)
        basic.pause(500)
    if input.is_gesture(Gesture.TILT_RIGHT):
        Sprite.change(LedSpriteProperty.X, 1)
        basic.pause(500)
basic.forever(on_forever)
