{
	name: "Koopa Ability",
	rating: -1,
    flags: {},

    onStart(pokemon) {
            this.effectState.koopaFlipped = false;
            this.effectState.koopaFlippedCount = 0;
    },

    onHit(target, source, move) {
      const fromAboveMoves1 = [
        'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'floatyfall', 'fly', 'skyattack'
      ];
      if (fromAboveMoves1.includes(move.id) || move.flags["fromabove"] || move.flags["frombelow"]) {
        if (this.effectState.koopaFlipped === false) {
              this.effectState.koopaFlipped = true;
              this.effectState.koopaFlippedCount = 2;
              this.boost({ def: -6, spd: -6, spe: -6 });
              target.addVolatile("flinch");
        }
      }
    },

    onResidualOrder: 1,
    onResidualSubOrder: 1,
    onResidual(pokemon) {
        if (this.effectState.koopaFlipped === true && this.effectState.koopaFlippedCount > 0) {
            this.effectState.koopaFlippedCount--;
            pokemon.addVolatile("flinch");
        }
        else if (this.effectState.koopaFlipped === true && this.effectState.koopaFlippedCount === 0){
            this.effectState.koopaFlipped === false;
            this.add("-end", pokemon, "Koopa Ability", "[silent]");
        }
    }
}