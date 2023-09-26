import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player01: Fighter;
  private _monster: SimpleFighter[];

  constructor(player01: Fighter, monster: SimpleFighter[]) {
    super(player01);
    this._player01 = player01;
    this._monster = monster;
  }

  override fight(): number {
    this._monster.forEach((monster) => {
      if (monster.lifePoints > -1 && this._player01.lifePoints > -1) {
        monster.attack(this._player01);
        this._player01.attack(monster);
      }
    });
    return super.fight();
  }
}