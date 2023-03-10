import { ICPU } from '../api/cpu.js';
import { IBus } from '../api/bus.js';
export declare class CPU implements ICPU {
    bus: IBus;
    suspendCycles: number;
    private clocks;
    private deferCycles;
    private readonly registers;
    private readonly instructionMap;
    private readonly addressingModeMap;
    reset(): void;
    clock(): void;
    irq(): void;
    nmi(): void;
    private setFlag;
    private isFlagSet;
    private step;
    private pushWord;
    private pushByte;
    private popWord;
    private popByte;
    private setNZFlag;
    private getData;
    private absolute;
    private absoluteX;
    private absoluteY;
    private accumulator;
    private immediate;
    private implicit;
    private indirect;
    private indirectYIndexed;
    private relative;
    private xIndexedIndirect;
    private zeroPage;
    private zeroPageX;
    private zeroPageY;
    private adc;
    private and;
    private asl;
    private bcc;
    private bcs;
    private beq;
    private bit;
    private bmi;
    private bne;
    private bpl;
    private brk;
    private bvc;
    private bvs;
    private clc;
    private cld;
    private cli;
    private clv;
    private cmp;
    private cpx;
    private cpy;
    private dec;
    private dex;
    private dey;
    private eor;
    private inc;
    private inx;
    private iny;
    private jmp;
    private jsr;
    private lda;
    private ldx;
    private ldy;
    private lsr;
    private nop;
    private ora;
    private pha;
    private php;
    private pla;
    private plp;
    private rol;
    private ror;
    private rti;
    private rts;
    private sbc;
    private sec;
    private sed;
    private sei;
    private sta;
    private stx;
    private sty;
    private tax;
    private tay;
    private tsx;
    private txa;
    private txs;
    private tya;
    private dcp;
    private isc;
    private lax;
    private rla;
    private rra;
    private sax;
    private slo;
    private sre;
    private isCrossPage;
}
