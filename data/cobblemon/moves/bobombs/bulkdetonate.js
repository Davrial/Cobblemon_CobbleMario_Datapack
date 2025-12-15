({
 		accuracy: 100,
 		basePower: 250,
 		basePowerCallback(pokemon, target, move) {
              const bp = move.basePower + pokemon.maxhp;
              this.debug("BP: " + bp);
              return bp;
            },
 		category: "Special",
 		name: "Bulk Detonate",
 		pp: 5,
 		priority: 0,
 		flags: {charge: 1, protect: 1, mirror: 1, metronome: 1,  sdexplosion:1, explosive:1},
 		onTryMove(attacker, defender, move) {
              if (attacker.removeVolatile(move.id)) {
                selfdestruct: "always",
                return;
              }
              this.add("-prepare", attacker, move.name);
              this.boost({ spa: 2 }, attacker, attacker, move);
              if (!this.runEvent("ChargeMove", attacker, defender, move)) {
                return;
              }
              attacker.addVolatile("twoturnmove", defender);
              return null;
            },
 		secondary: null,
 		target: "allAdjacent",
 		type: "Fire",
 		contestType: "Tough",
})