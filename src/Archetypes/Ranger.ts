import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  _energyType: EnergyType = 'stamina';
  private static rangerCount = 0;

  constructor(name: string) {
    super(name);
    Ranger.rangerCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return this.rangerCount;
  }
}