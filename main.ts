//% color=#7a2a2a
//% groups='["Multiplayer"]'
namespace Multiplayer {
    /**
     * uses radio to set up the signal
     */
    //% blockId=setup block="Radio connection, radio: $num"
    export function setup(num: number): void {
        radio.setGroup(num)
    }

}
