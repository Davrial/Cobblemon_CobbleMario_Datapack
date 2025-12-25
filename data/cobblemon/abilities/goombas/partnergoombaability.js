{
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
        const boostedMoves = [
        		'bounce', 'acrobatics', 'headbonk', 'multibonk', 'ironhead', 'headlongrush', 'headsmash'
        	];
      if (move.flags["bite"] || boostedMoves.includes(move.id)) {
        return this.chainModify(1.5);
      }
    },
    flags: {},
	name: "Partner Goomba Ability",
	rating: 4
}