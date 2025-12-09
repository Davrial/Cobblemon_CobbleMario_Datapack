({
 		accuracy: 100,
 		basePower: 40,
 		basePowerCallback(pokemon, target, move) {
        			const bp = move.basePower + 20 * pokemon.negativeBoosts();
        			this.debug('BP: ' + bp);
        			return bp;
        		},
 		category: "Physical",
 		name: "Dizzy Shell",
 		pp: 16,
 		priority: 0,
 		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
 		secondary: {
        			chance: 10,
        			volatileStatus: 'confusion',
        		},
 		target: "allAdjacentFoes",
 		type: "Dark",
 		contestType: "Clever",
})