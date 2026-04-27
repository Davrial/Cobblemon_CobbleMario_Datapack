({
 		accuracy: 95,
 		basePower: 120,
 		category: "Physical",
 		name: "Mega Smash",
 		pp: 5,
 		priority: -1,
 		flags: {protect: 1, mirror: 1, metronome: 1, hammer: 1},
        onEffectiveness(typeMod, target, type, move) {
         return typeMod + this.dex.getEffectiveness('Fighting', type);
        },
 		target: "normal",
 		type: "Steel",
 		contestType: "Tough",
})