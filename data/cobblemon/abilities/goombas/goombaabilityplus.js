{
	name: "Goomba Ability Plus",
	rating: 2.5,
    flags: {},

    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
    	const boostedMoves = [
    		'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'floatyfall', 'fly', 'skyattack',  'headbonk', 'multibonk', 'divekick'
    	];
    	if (boostedMoves.includes(move.id) || move.flags["fromabove"] || move.flags["bite"]) {
            return this.chainModify(1.5);
    	}
    }
}