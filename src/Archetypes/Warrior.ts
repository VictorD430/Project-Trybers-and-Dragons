import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  _energyType: EnergyType = 'stamina';
  private static warriorCount = 0;

  constructor(name: string) {
    super(name);
    Warrior.warriorCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return this.warriorCount;
  }
}