import Race from './Race';

export default class Elf extends Race {
  private static _count = 0;

  constructor(name: string, dexterity: number, public maxLifePoints = 99) {
    super(name, dexterity);
    Elf._count += 1;
  }

  public static createdRacesInstances() {
    return Elf._count;
  }
}