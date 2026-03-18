{
 	name: "Spiked Gloomba Ability Plus",
 	rating: 2,
    flags: {},

    onDamagingHitOrder: 1,
    flags: { breakable: 1 },
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
    	if (spikedMoves.includes(move.id)) {
            return this.chainModify(1.5);
    	}
    }
    onDamagingHit(damage, target, source, move) {
      if (move.type === "Dark") {
        this.boost({ atk: 2 });
      }
    },
    onTryBoost(boost, target, source, effect) {
      if (effect.name === "Intimidate" && boost.atk) {
        delete boost.atk;
        this.add("-fail", target, "unboost", "Attack", "[from] ability: Gloomba Ability", "[of] " + target);
      }
    }
}