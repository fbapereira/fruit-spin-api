export enum SlotMachineItem {
  cherry = 'cherry',
  lemon = 'lemon',
  apple = 'apple',
  banana = 'banana',
}

export interface SlotMachine {
  reels: SlotMachineItem[][];
}
