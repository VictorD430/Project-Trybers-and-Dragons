import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  _energyType: EnergyType = 'mana';
  private static necromancerCount = 0;

  constructor(name: string) {
    super(name);
    Necromancer.necromancerCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return this.necromancerCount;
  }
}