//% color=#24823d weight=75 icon="\uf0c0"
//% groups='["Multiplayer"]'
namespace Multiplayer {
    let sprite: game.LedSprite
    /**
     * uses radio to set up the signal
     */
    //% blockId=setup block="Radio number: $num" weight=100
    //% num.min=0 num.max=255
    export function setup(num: number): void {
        radio.setGroup(num)
    }
    /**
     * creats a character
     */
    //% blockId=create block="create $num=variables_get(sprite) where? X $x Y $y" weight=99
    //% x.min=0 x.max=4 y.min=0 y.max=4
    export function create(num: number, x: number, y: number): void {
        let sprite = game.createSprite(x, y)
    }
    /**
     * use this block when you move the character left
     */
    //% blockId=move_send block="Move $num=variables_get(sprite) with gestures" weight=98
    export function movesend(num: number): void {
        
        if (!sprite) {
            if (Gesture.LogoDown) {
                sprite.change(LedSpriteProperty.Y, -1)
            } else if (Gesture.LogoUp) {
                sprite.change(LedSpriteProperty.Y, 1)
            } else if (Gesture.TiltLeft) {
                sprite.change(LedSpriteProperty.X, -1)
            } else if (Gesture.TiltRight) {
                sprite.change(LedSpriteProperty.X, 1)
            }
        }
    }
    /**
     * Put this in the on number recive block.
     */
    //% blockId=move_recive block="Move $num=variables_get(othersprite) recive" weight=97
    export function moverecive(): void {
        
    }
}
