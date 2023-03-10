import { IBus } from '../api/bus.js';
import { uint16, uint8 } from '../api/types.js';
import { IRAM } from '../api/ram.js';
import { ICartridge } from '../api/cartridge.js';
export declare class PPUBus implements IBus {
    cartridge: ICartridge;
    ram: IRAM;
    backgroundPallette: IRAM;
    spritePallette: IRAM;
    readByte(address: uint16): uint8;
    writeByte(address: uint16, data: uint8): void;
    readWord(address: uint16): uint16;
    writeWord(address: uint16, data: uint16): void;
    private parseMirrorAddress;
}
