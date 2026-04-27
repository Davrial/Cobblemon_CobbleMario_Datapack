({
 		accuracy: 100,
 		basePower: 40,
 		category: "Physical",
 		name: "Head Rattle",
 		pp: 20,
 		priority: 0,
 		flags: {protect: 1, mirror: 1, metronome: 1, nonsky: 1, hammer: 1},
 		secondary: {
                    chance: 90,
                    volatileStatus: "confusion"
                   },
        onEffectiveness(typeMod, target, type, move) {
         return typeMod + this.dex.getEffectiveness('Fighting', type);
        },
 		target: "normal",
 		type: "Psychic",
 		contestType: "Clever",
})