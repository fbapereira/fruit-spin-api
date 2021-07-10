export enum SlotMachineItem {
  cherry = 0,
  lemon = 1,
  apple = 2,
  banana = 3,
}

export interface SlotMachine {
  reels: SlotMachineItem[][]
}
