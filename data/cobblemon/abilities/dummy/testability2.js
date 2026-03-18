{
    onSourceModifyDamage(damage, source, target, move) {
    	const boostedMoves = [
    		'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'floatyfall', 'fly', 'skyattack',  'headbonk', 'multibonk', 'divekick'
    	];
    	if (boostedMoves.includes(move.id) || move.flags["fromabove"]) {
    					return this.chainModify(1.5);
    	}
    },
    onAfterBoost(boost, target, source, effect) {
        let usedBoost = 1;
        let i;
        let n = 0;
        this.hint(`start onAfterBoost n value: ${n}`);
        for (i in boost) {
            if (source === target && boost[i] >= 1 && usedBoost <= 1) {
                n++;
                if (boost[i] >= 2){
                    n++;
                    if (boost[i] >= 3){
                        n++;
                    }
                }
                if (usedBoost >= 2) {
                    usedBoost + 1;
                }
            }
        }
        this.hint(`end onAfterBoost n value: ${n}`);
    },
    onEnd(pokemon) {
      usedBoost = 1;
    },

	name: "Test Ability 2",
	rating: 2,
    flags: {}
}