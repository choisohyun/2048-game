export type BlockType = {
    id: string;
    position: [number, number];
    value: number;
    mergeWith?: number;
};