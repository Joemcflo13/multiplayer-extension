//% color=#24823d weight=75 icon="\uf0c0"
//% groups='["Set-up", "Moving Players"]'
namespace Multiplayer {
    let player: game.LedSprite
    let player2: game.LedSprite
    /**
     * uses radio to set up the signal
     */
    //% blockId=setup block="Radio number: $num"
    //% weight=100 group="Set-up"
    //% num.min=0 num.max=255
    export function setup(num: number): void {
        radio.setGroup(num)
    }

    /**
     * Creates a character
     */
    export class Player { }
    //% blockSetVariable=player
    //% blockId=create_player group="Set-up"
    //% block="Create sprite at X $x Y %y" weight=99
    //% x.min=0 x.max=4 y.min=0 y.max=4
    /**
     * @param x Side to side. eg: 0
     * @param y Up and down. eg: 2
     */
    export function createPlayer(x: number, y: number): Player {
        let player = game.createSprite(x, y)
        return undefined;
    }

    /**
     * use this block when you move the character left. put this in the forever block.
     */
    //% blockId=move_send block="Move $sprite=variables_get(player) with gestures" 
    //% weight=97 group="Moving Players"
    export function movesend(sprite: any): void {
            if (!player) {
                basic.showLeds(`
                    # # . # #
                    # # . # #
                    . . . . .
                    . # # # .
                    # . . . #
                `)
                control.reset()
            }
            if (player) {
                if (Gesture.LogoDown) {
                    player.change(LedSpriteProperty.Y, -1)
                    radio.sendNumber(1)
                } else if (Gesture.LogoUp) {
                    player.change(LedSpriteProperty.Y, 1)
                    radio.sendNumber(2)
                } else if (Gesture.TiltLeft) {
                    player.change(LedSpriteProperty.X, -1)
                    radio.sendNumber(3)
                } else if (Gesture.TiltRight) {
                    player.change(LedSpriteProperty.X, 1)
                    radio.sendNumber(4)
                }
            }
        }
        
    /**
     * Put this in the on number recive block. or else it wont work.
     */
    //% blockId=move_recive block="Move $sprite2=variables_get(player2) $receive=variables_get(receivedNumber)"
    //% weight=96 group="Moving Players"
    export function movereceive(sprite2: any, receive: number): void {
        if (!receive) {
            basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
            control.reset()
        }
        if (receive){
            if (receive == 1) {
                player2.change(LedSpriteProperty.Y, -1)
            } else if (receive == 2) {
                player2.change(LedSpriteProperty.Y, 1)
            } else if (receive == 3) {
                player2.change(LedSpriteProperty.X, -1)
            } else if (receive == 4) {
                player2.change(LedSpriteProperty.X, 1)
            }
        }
    }
    /**
     * Where do you want to create player2?
     */
    export class Player2 { }
    //% blockSetVariable=player2
    //% blockId=create_player2 group="Set-up"
    //% block="Create sprite at X $x Y %y" weight=98
    //% x.min=0 x.max=4 y.min=0 y.max=4
    /**
     * @param x Side to side. eg: 4
     * @param y Up and down. eg: 2
     */
    export function createplayer2(x: number, y: number): Player2 {
        let player2 = game.createSprite(x, y)
        return undefined;
    }
}
