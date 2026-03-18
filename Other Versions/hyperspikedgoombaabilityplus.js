{
	name: "Hyper Spiked Goomba Ability Plus",
	rating: 2,
    flags: {},

    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
        const fromAboveMoves1 = [
        		'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'floatyfall', 'fly', 'skyattack', 'headbonk', 'multibonk', 'divekick'
        	];
    	if (fromAboveMoves1.includes(move.id) || move.flags["fromabove"]) {
    	    if (source.hasItem("heavydutyboots") ||  source.hasItem("protectivepads") || source.hasItem("spikeshieldbadgecobblemon")) {
            return;
            } else {
            this.damage(source.baseMaxhp / 8, source, target);
            }
      }
    },
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
    	const spikedMoves = [
    		'bodyslam', 'flyingpress', 'heavyslam', 'bounce', 'acrobatics', 'headbonk', 'multibonk'
    	];
    	if (spikedMoves.includes(move.id)) {
            return this.chainModify(1.5);
    	}
    }
    onAfterEachBoost(boost, target, source, effect) {
      let usedBoost = 1;
      let i;
      let boostStep = true;
      for (i in boost) {
        if (source === target && boost[i] >= 1 && usedBoost <= 1) {
            if (effect.name != source.lastMove) {
                usedBoost + 1;
                return;
            }
            if (boostStep) {
                this.boost({ spa: 1 }, target, target, null, false, true);
                if (boost[i] >= 2){
                    this.boost({ atk: 1 }, target, target, null, false, true);
                    if (boost[i] >= 3){
                        this.boost({ spa: 1 }, target, target, null, false, true);
                    }
                }
                boostStep = !boostStep;
            } else {
                this.boost({ atk: 1 }, target, target, null, false, true);
                if (boost[i] >= 2){
                    this.boost({ spa: 1 }, target, target, null, false, true);
                    if (boost[i] >= 3){
                        this.boost({ atk: 1 }, target, target, null, false, true);
                    }
                }
                boostStep = !boostStep;
            }
            if (usedBoost >= 2) {
                usedBoost + 1;
                return;
            }
        }
      }
    },
    onEnd(pokemon) {
      usedBoost = 1;
    }
}