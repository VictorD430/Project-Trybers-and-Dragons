import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  public _energyType: EnergyType = 'stamina';
  private static _count = 0;

  constructor(name: string) {
    super(name);
    Ranger._count += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return Ranger._count;
  }
}