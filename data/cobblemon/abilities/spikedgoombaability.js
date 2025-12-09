{
    onSourceModifyDamage(damage, source, target, move) {
    	const boostedMoves = [
    		'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'floatyfall', 'fly', 'skyattack'
    	];
    	if (boostedMoves.includes(move.id)) {
    					return this.chainModify(2);
    	}
    },
    onDamagingHit(damage, target, source, move) {
      	if (boostedMoves.includes(move.id)) {
      		this.damage(source.baseMaxhp / 6, source, target);
      	}
    },
	name: "Spiked Goomba Ability",
	rating: 0.5
}