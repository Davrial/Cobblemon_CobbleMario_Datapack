({
 		accuracy: 100,
 		basePower: 40,
 		category: "Physical",
 		name: "Shrink Smash",
 		pp: 20,
 		priority: 0,
 		flags: {protect: 1, mirror: 1, metronome: 1, nonsky: 1, hammer: 1},
 		secondary: {
                    chance: 100,
                    volatileStatus: "minimize"
                   },
                   {
                     chance: 100,
                     boosts: {
                       atk: -2
                     }
                   }
        onEffectiveness(typeMod, target, type, move) {
         return typeMod + this.dex.getEffectiveness('Fighting', type);
        },
 		target: "normal",
 		type: "Fairy",
 		contestType: "Clever",
})