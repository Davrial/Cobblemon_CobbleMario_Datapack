{
    onHit(target, source, move) {
      const fromAboveMoves1 = [
        'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'floatyfall', 'fly', 'skyattack'
      ];
      if (fromAboveMoves1.includes(move.id) || move.flags["fromabove"]) {
        if (!target.volatiles["koopaflipped"]) {
              target.addVolatile("koopaflipped");
              target.trySetStatus("par", target);
        }
      }
    },
    onEnd(pokemon) {
      delete pokemon.volatiles["koopaflipped"];
      if (pokemon.status === "par" || pokemon.status === "slp") {
              pokemon.cureStatus();
      }
      this.add("-end", pokemon, "Koopa Ability", "[silent]");
    },
    condition: {
      duration: 3,
      onResidualOrder: 28,
      onResidualSubOrder: 2,
      onStart(target) {
        this.add("-start", target, "ability: Koopa Ability");
      },
      onModifyDefPriority: 5,
      onModifyDef(atk, pokemon) {
        return this.chainModify(0.5);
      },
      onEnd(target) {
        this.add("-end", target, "Koopa Ability");
      }
    },
    flags: {},
	name: "Koopa Ability",
	rating: -1
}