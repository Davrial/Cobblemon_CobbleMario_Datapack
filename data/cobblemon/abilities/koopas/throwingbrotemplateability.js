{
    onStart(pokemon) {
        this.effectState.nonContactMoves = [
            'woodhammer'
        ];
        this.effectState.changeMovesTypes = [
            'barrage'
        ];
        this.effectState.flingMove = [
            'fling'
        ];
        this.effectState.flingItems = [
            'ironball', 'hardstone', 'nevermeltice', 'flameorb', 'everstone', 'floatstone', 'heatrock', 'icyrock', 'lightball', 'smokeball', 'smoothrock', 'toxicorb', 'poisonbarb', 'damprock', 'eviolite', 'iron_block', 'gold_block', 'copper_block', 'waxed_copper_block'
        ];
        this.effectState.flingItemsRock = [
            'hardstone', 'everstone', 'floatstone', 'heatrock', 'icyrock', 'smoothrock','poisonbarb', 'eviolite'
        ];
        this.effectState.flingItemsPoison = [
            'toxicorb', 'poisonbarb'
        ];
        this.effectState.flingItemsSteel = [
            'ironball', 'iron_block', 'gold_block', 'copper_block', 'waxed_copper_block'
        ];
        this.effectState.flingItemsIce = [
            'nevermeltice'
        ];
        this.effectState.flingItemsElectric = [
            'lightball'
        ];
        this.effectState.flingItemsFire = [
            'flameorb'
        ];
        this.effectState.flingItemsDark = [
            'smokeball'
        ];
        this.effectState.flingItemsDragon = [
            'eviolite'
        ];
        this.effectState.flingItemsCheck = 0;
        if (this.effectState.flingItems.includes(item.id)) {
                this.effectState.flingItemsCheck = 1;
        }
        if (this.effectState.flingItemsRock.includes(item.id)) {
                this.effectState.flingItemsCheck = 2;
        }
        if (this.effectState.flingItemsSteel.includes(item.id)) {
                this.effectState.flingItemsCheck = 3;
        }
        if (this.effectState.flingItemsPoison.includes(item.id)) {
                this.effectState.flingItemsCheck = 4;
        }
        if (this.effectState.flingItemsIce.includes(item.id)) {
                this.effectState.flingItemsCheck = 5;
        }
        if (this.effectState.flingItemsFire.includes(item.id)) {
                this.effectState.flingItemsCheck = 6;
        }
        if (this.effectState.flingItemsElectric.includes(item.id)) {
                this.effectState.flingItemsCheck = 7;
        }
        if (this.effectState.flingItemsDark.includes(item.id)) {
                this.effectState.flingItemsCheck = 8;
        }
        if (this.effectState.flingItemsDragon.includes(item.id)) {
                this.effectState.flingItemsCheck = 9;
        }
    },
    onSourceModifyDamage(damage, source, target, move) {
      if (move.type === "Fighting") {
        return this.chainModify(2);
      }
    },
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Fighting") {
        return this.chainModify(1.5);
      }
    },
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Fighting") {
        return this.chainModify(1.5);
      }
    },

    onModifyMove(move) {
        if (nonContactMoves.includes(move.id) || move.flags["throwingbrosmove"]) {
          delete move.flags["contact"];
        }
        if (changeMovesTypes.includes(move.id)) {
            move.type = "Fighting";
        } else if (move.type === "Normal" && flingItemsCheck === 0) {
            move.type = "Fighting";
        }
        if (flingMove.includes(move.id)) {
            if (this.effectState.flingItemsCheck === 0) {
                move.type = "Fighting";
            } else if (this.effectState.flingItemsCheck === 1) {
                move.type = "Fighting";
            } else if (this.effectState.flingItemsCheck === 2) {
                move.type = "Rock";
            } else if (this.effectState.flingItemsCheck === 3) {
                move.type = "Steel";
            } else if (this.effectState.flingItemsCheck === 4) {
                move.type = "Poison";
            } else if (this.effectState.flingItemsCheck === 5) {
                move.type = "Ice";
            } else if (this.effectState.flingItemsCheck === 6) {
                move.type = "Fire";
            } else if (this.effectState.flingItemsCheck === 7) {
                move.type = "Electric";
            } else if (this.effectState.flingItemsCheck === 8) {
                move.type = "Dark";
            } else if (this.effectState.flingItemsCheck === 9) {
                move.type = "Dragon";
            }
        }
        if (move.type === "Fighting") {
          move.forceSTAB = true;
        }
    },
    flags: {},
	name: "Throwing Bro Template Ability",
	rating: 3
}