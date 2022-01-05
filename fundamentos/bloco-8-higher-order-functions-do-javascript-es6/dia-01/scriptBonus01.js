const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};
  
const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};
  
const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };
const min = 15;

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const mageStuff = (mage) => {
    if (mage.mana < 15) {
        return 'Não possui mana suficiente';
    }
    return { 
        damage: randomNumber(mage.intelligence, (mage.intelligence * 2)),
        manaCost: 15,
    }
}

const dragonDamage = randomNumber(min, dragon.strength);
const warriorDamage = randomNumber(warrior.strength, (warrior.strength * warrior.weaponDmg));

const gameActions = {
    warriorTurn: (warriorDamage, dragon) => {
        warrior.damage = warriorDamage;
        dragon.healthPoints -= warrior.damage;
    },
    mageTurn: (mageStuff, dragon) => {
        mage.damage = mageStuff(mage).damage;
        mage.mana -= mageStuff(mage).manaCost;
        dragon.healthPoints -= mage.damage;
    },
    dragonTurn: (dragonDamage, mage, warrior) => {
        dragon.damage = dragonDamage;
        mage.healthPoints -= dragon.damage;
        warrior.healthPoints -= dragon.damage;
    },
    final: () => {
        gameActions.warriorTurn(warriorDamage, dragon);
        gameActions.mageTurn(mageStuff, dragon);
        gameActions.dragonTurn(dragonDamage, mage, warrior);
        console.log(battleMembers);
    }
  };

  console.log(battleMembers);
  gameActions.final();