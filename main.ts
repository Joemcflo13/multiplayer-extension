//% color=#24823d weight=75 icon="\uf0c0"
//% groups='["Multiplayer"]'
namespace Multiplayer {
    let player: game.LedSprite
    let player2: game.LedSprite
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
     * @param x Side to side. eg: 2
     * @param y Up and down. eg: 2
     */
    //% blockId=create block="create $num=variables_get(player) where? X $x Y $y" weight=99
    //% x.min=0 x.max=4 y.min=0 y.max=4
    export function create(num: number, x: number, y: number): void {
        let player = game.createSprite(x, y)
    }
    /**
     * use this block when you move the character left. put this in the forever block.
     */
    //% blockId=move_send block="Move $num=variables_get(player) with gestures" weight=98
    export function movesend(num: number): void {
        if (!player) {
            if (Gesture.LogoDown) {
                player.change(LedSpriteProperty.Y, -1)
            } else if (Gesture.LogoUp) {
                player.change(LedSpriteProperty.Y, 1)
            } else if (Gesture.TiltLeft) {
                player.change(LedSpriteProperty.X, -1)
            } else if (Gesture.TiltRight) {
                player.change(LedSpriteProperty.X, 1)
            }
        }
    }
    /**
     * Put this in the on number recive block. or else it wont work.
     */
    //% blockId=move_recive block="Move $num=variables_get(player2) recive" weight=97
    export function moverecive(num: number): void {
        
    }
}
