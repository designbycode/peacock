interface PeacockOptions {
    baseColor: string;
    upSteps?: number;
    downSteps?: number;
    stepAmount?: number;
    hueShift?: number;
}
interface PeacockScale {
    [key: string]: string;
}
export declare function peacock({ baseColor, upSteps, downSteps, stepAmount, hueShift }: PeacockOptions): PeacockScale;
export {};
