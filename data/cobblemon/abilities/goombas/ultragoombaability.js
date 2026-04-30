{
 	name: "Ultragoomba Ability",
 	rating: 3,
    flags: { breakable: 1 },

    onStart(pokemon) {
      this.boost({ evasion: 1, spe: 1 }, pokemon, pokemon, null, true);
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
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
    	const spikedMoves = [
    		'bodyslam', 'flyingpress', 'heavyslam', 'bounce', 'acrobatics', 'headbonk', 'multibonk'
    	];
    	const flyingMoves = [
            'highjumpkick', 'supersonicskystrike',
            'floatyfall', 'fly', 'skyattack', 'divekick'
    	];
    	if (spikedMoves.includes(move.id)) {
            return this.chainModify(1.5);
    	}
    	if (flyingMoves.includes(move.id)) {
            return this.chainModify(1.3);
        }
    }
}