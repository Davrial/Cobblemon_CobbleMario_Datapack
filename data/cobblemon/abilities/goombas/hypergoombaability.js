{
    onSourceModifyDamage(damage, source, target, move) {
    	const boostedMoves = [
    		'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'floatyfall', 'fly', 'skyattack',  'headbonk', 'multibonk', 'divekick'
    	];
    	if (boostedMoves.includes(move.id) || move.flags["fromabove"]) {
    					return this.chainModify(1.5);
    	}
    },
    onAfterEachBoost(boost, target, source, effect) {
      let usedBoost = false;
      let i;
      for (i in boost) {
        if (boost[i] === 1) {
          usedBoost = true;
        }
      }
      if (usedBoost) {
        this.boost({ spa: 1 }, target, target, null, false, true);
        usedBoost = false;
        return;
      }
    },
    flags: {},
	name: "Hypergoomba Ability",
	rating: -1
}