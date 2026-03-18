{
 	name: "Hypergoomba Ability Plus",
 	rating: 4
    flags: {},

    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
    	const boostedMoves = [
    		'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'headbonk', 'multibonk'
    	];
    	if (boostedMoves.includes(move.id)) {
            return this.chainModify(1.3);
    	}
    },
    onAfterEachBoost(boost, target, source, effect) {
      let usedBoost = 1;
      let i;
      for (i in boost) {
        if (source === target && boost[i] >= 1 && usedBoost <= 1) {
            if (effect.name != source.lastMove) {
                usedBoost + 1;
                return;
            }
            this.boost({ spa: 1 }, target, target, null, false, true);
            if (boost[i] >= 2){
                this.boost({ spa: 1 }, target, target, null, false, true);
                if (boost[i] >= 3){
                    this.boost({ spa: 1 }, target, target, null, false, true);
                }
            }
            if (usedBoost >= 2) {
                usedBoost + 1;
                return;
            }
            return;
        }
      }
    },
    onEnd(pokemon) {
      usedBoost = 1;
    }
}