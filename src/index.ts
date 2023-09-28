import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Newbie');
const player2 = new Character('SpeedRunner');
const player3 = new Character('YourNameHere');
for (let level = 0; level < 5; level += 1) {
  player1.levelUp();
}
const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((battle) => battle.fight());
  return 1;
};

export { 
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
