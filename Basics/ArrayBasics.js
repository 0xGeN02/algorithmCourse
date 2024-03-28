const a = new ArrayBuffer(6)
console.log(a)
//ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

const a8 = new Uint8Array(a)
console.log(a8)
//Uint8Array [ 0, 0, 0, 0, 0, 0 ]

a8[0]= 45
a8[2] = 100
console.log(a)
//ArrayBuffer { [Uint8Contents]: <2d 00 64 00 00 00>, byteLength: 6 }
//We overwride the first and third byte of the ArrayBuffer

const a16 = new Uint16Array(a)
a16[2] = 0x4545
console.log(a)
//ArrayBuffer { [Uint8Contents]: <2d 00 64 00 45 45>, byteLength: 6 }
//We changed the interpretation of the bit8 array into a bit16 array so the a16[1] will be the same as the a8[2] and a16[2] will be the same as a8[3]

a16[4] = 0x2312
console.log(a)
//ArrayBuffer { [Uint8Contents]: <2d 00 64 00 45 45>, byteLength: 6 }
//The last two bytes are not changed because the Uint16Array length do not match the ArrayBuffer length

