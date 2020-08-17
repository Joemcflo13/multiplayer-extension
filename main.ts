//% color=#cc87a8 weight=97 icon=\uf0c0
//% groups='["Multiplayer"]'
namespace Multiplayer {
    /**
     * uses radio to set up the signal
     */
    //% blockId=setup block="Radio connection, radio: $num"
    export function setup(num: number): void {
        radio.setGroup(num)
    }
    /**
     * 
     */
    //% blockId= block=""
    export function (): {

    }
}
