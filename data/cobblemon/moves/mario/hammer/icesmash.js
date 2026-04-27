({
 		accuracy: 100,
 		basePower: 40,
 		category: "Physical",
 		name: "Ice Smash",
 		pp: 15,
 		priority: 0,
 		flags: {protect: 1, mirror: 1, metronome: 1, hammer: 1},
 		secondary: {
                    chance: 10,
                    status: "frz"
                   },
        onEffectiveness(typeMod, target, type, move) {
         return typeMod + this.dex.getEffectiveness('Fighting', type);
        },
 		target: "normal",
 		type: "Ice",
 		contestType: "Clever",
})