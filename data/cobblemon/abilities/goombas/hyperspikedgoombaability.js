{
	name: "Hyper Spiked Goomba Ability",
	rating: 2,
    flags: { breakable: 1 },

    onStart(source) {
        let c;
    },
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
    onAfterBoost(boost, target, source, effect) {
        let usedBoost1 = 1;
        let usedBoost2 = 1;
        let i;
        let n = 0;
        for (i in boost) {
            if (source === target && boost[i] >= 1 && usedBoost1 <= 1) {
                if (effect.name != source.lastMove) {
                    usedBoost1 + 1;
                    return;
                }
                n++;
                if (boost[i] >= 2){
                    n++;
                    if (boost[i] >= 3){
                        n++;
                    }
                }
                if (usedBoost1 >= 2) {
                    usedBoost1 + 1;
                }
            }
        }
        if (this.effectState.c !== 0 && this.effectState.c !== 1){
            this.effectState.c = 0;
        }
        for (let m = 1; m <= n; m++) {
            if (source === target && boost[i] >= 1 && usedBoost2 <= 1) {
                if (effect.name != source.lastMove) {
                    usedBoost2 + 1;
                    return;
                }
                if (n + m + this.effectState.c === 2) {
                    this.boost({ atk: 1 }, target, target, null, false, true);
                } else if (n + m + this.effectState.c === 3) {
                    this.boost({ spa: 1 }, target, target, null, false, true);
                } else if (n + m + this.effectState.c === 4) {
                 this.boost({ atk: 1 }, target, target, null, false, true);
                } else if (n + m + this.effectState.c === 5) {
                 this.boost({ spa: 1 }, target, target, null, false, true);
                } else if (n + m + this.effectState.c >= 6) {
                 this.boost({ atk: 1 }, target, target, null, false, true);
                }
                if (usedBoost2 >= 2) {
                    usedBoost2 + 1;
                    return;
                }
            }
        }
    },
    onAfterMove(pokemon) {
      if (this.effectState.c === 1){
        this.effectState.c = 0
      } else {this.effectState.c = 1}
    }
}