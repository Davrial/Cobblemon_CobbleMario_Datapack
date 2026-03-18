{
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
    onSourceModifyDamage(damage, source, target, move) {
    	const fromAboveMoves2 = [
    		'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'floatyfall', 'fly', 'skyattack', 'headbonk', 'multibonk', 'divekick'
    	];
    	if (fromAboveMoves2.includes(move.id) || move.flags["fromabove"]) {
    	    if (source.hasItem("heavydutyboots") ||  source.hasItem("protectivepads") || source.hasItem("spikeshieldbadgecobblemon")) {
    			return this.chainModify(1.5);
    		}
    		else {
    		    return this.chainModify(0);
    		}
    	}
    },
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
    },

	name: "Hyper Spiked Goomba Ability",
	rating: 2,
    flags: {}
}