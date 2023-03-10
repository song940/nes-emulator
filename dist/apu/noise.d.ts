import { uint16, uint8 } from '../api/types.js';
import { IChannel } from '../api/apu.js';
export declare class Noise implements IChannel {
    volume: number;
    lengthCounter: number;
    private isLengthCounterHalt;
    private isConstantVolume;
    private envelopeValue;
    private envelopeVolume;
    private envelopeCounter;
    private isLoopNoise;
    private noisePeriod;
    private internalTimer;
    private enable;
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    clock(): void;
    processEnvelope(): void;
    processLinearCounter(): void;
    processLengthCounter(): void;
    processSweep(): void;
    write(offset: uint16, data: uint8): void;
    private step;
}
