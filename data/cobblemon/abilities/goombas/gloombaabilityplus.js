{
 	name: "Gloomba Ability Plus",
 	rating: 3.5,
    flags: { breakable: 1 },

    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
    	const boostedMoves = [
    		'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'headbonk', 'multibonk'
    	];
    	if (boostedMoves.includes(move.id) || move.flags["bite"]) {
            return this.chainModify(1.5);
    	}
    },
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