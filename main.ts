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
     * creats a character
     * @param x Side to side. eg: 2
     * @param y Up and down. eg: 2
     */
    export class Player { }
    //% blockSetVariable=player
    //% blockId=create_player group="Set-up"
    //% block="Create sprite at X $x Y %y" weight=99
    //% x.min=0 x.max=4 y.min=0 y.max=4
    export function create(x: number, y: number): Player {
        let player = game.createSprite(x, y)
        return undefined;
    }

    /**
     * use this block when you move the character left. put this in the forever block.
     */
    //% blockId=move_send block="Move $num=variables_get(player) with gestures" 
    //% weight=97 group="Moving Players"
    export function movesend(num: Player): void {
            while (true) {
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
    //% blockId=move_recive block="Move $num=variables_get(player2) recive"
    //% weight=96 group="Moving Players"
    export function moverecive(num: Player2): void {
        if (num == 1) {
            player2.change(LedSpriteProperty.Y, -1)
        } else if (num == 2) {
            player2.change(LedSpriteProperty.Y, 1)
        } else if (num == 3) {
            player2.change(LedSpriteProperty.X, -1)
        } else if (num == 4) {
            player2.change(LedSpriteProperty.X, 1)
        }
    }
    /**
     * Where do you want to create player2?
     * @param x the side to side. eg: 2
     * @param y the up and down. eg: 2
     */
    export class Player2 { }
    //% blockSetVariable=player2
    //% blockId=create_player2 group="Set-up"
    //% block="Create sprite at X $x Y %y" weight=98
    //% x.min=0 x.max=4 y.min=0 y.max=4
    export function createplayer2(x: number, y: number): Player2 {
        let player2 = game.createSprite(x, y)
        return undefined;
    }
}
