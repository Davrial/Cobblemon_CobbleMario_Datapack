{
 	name: "Spiked Goomba Ability Plus",
 	rating: 0.5,
    flags: {},

    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
    const fromAboveMoves = [
        		'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'floatyfall', 'fly', 'skyattack', 'headbonk', 'multibonk', 'divekick'
        	];
    	if (fromAboveMoves.includes(move.id) || move.flags["fromabove"]) {
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
}