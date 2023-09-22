import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  _energyType: EnergyType = 'mana';
  private static mageCount = 0;

  constructor(name: string) {
    super(name);
    Mage.mageCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
  
  static createdArchetypeInstances(): number {
    return this.mageCount;
  }
}