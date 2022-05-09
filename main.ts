function init () {
    // Soft reset
    writeByte(addr, 224, 182)
    basic.pause(200)
    // x16 humidity oversampling
    writeByte(addr, 242, 7)
    basic.pause(200)
    // x16 oversampling, normal mode
    writeByte(addr, 244, 183)
    basic.pause(200)
    // 500ms standby time, 16 filter coef
    writeByte(addr, 245, 144)
    basic.pause(200)
}
function readBuffer (addr: number, register: number, len: number) {
    temp[0] = register
    pins.i2cWriteBuffer(addr, temp.slice(0,1), false);
return pins.i2cReadBuffer(addr, len, false)
}
function writeByte (addr: number, register: number, value: number) {
    temp[0] = register
    temp[1] = value
    pins.i2cWriteBuffer(addr, temp, false);
}
let addr = 0
basic.showIcon(IconNames.Heart)
let temp=pins.createBuffer(2)
addr = 118
init()
serial.writeBuffer(readBuffer(addr, 247, 8))
basic.showIcon(IconNames.Yes)
