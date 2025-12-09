{
    onSourceModifyDamage(damage, source, target, move) {
    	const boostedMoves = [
    		'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'floatyfall', 'fly', 'skyattack'
    	];
    	if (boostedMoves.includes(move.id)) {
    					return this.chainModify(2);
    	}
    },
    flags: {},
	name: "Goomba Ability",
	rating: -1
}