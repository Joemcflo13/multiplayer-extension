//% color=#cc87a8 weight=96 icon="\uf0c0"
//% groups='["Multiplayer"]'
namespace Multiplayer {
    /**
     * uses radio to set up the signal
     */
    //% blockId=setup block="Radio connection, radio: $num"
    //% num.min=0 num.max=255
    export function setup(num: number): void {
        radio.setGroup(num)
    }
    /**
     * creats a character
     */
    //% blockId=create block="creat character where? X $x Y $y"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    export function create(x: number, y: number): void {
        let sprite = game.createSprite(x, y)
    }
    /**
     * use this block when you move the character left
     */
    //% blockId=leftse block="Character left by $left"
    //% left.min=1 left.max=4
    export function charleft(left: number): void {
        sprite.set(LedSpriteProperty.X, left) 
        radio.sendNumber(0)
    }
    /**
     * recieves the incoming left and moves player
     */
    //% blockId=leftre block="left receive"
    export function leftse(): void {
        
    }
}
