({
 		accuracy: 100,
 		basePower: 40,
 		category: "Physical",
 		name: "Piercing Blow",
 		pp: 15,
 		priority: 0,
 		flags: {protect: 1, mirror: 1, metronome: 1, hammer: 1},
        onEffectiveness(typeMod, target, type, move) {
         return typeMod + this.dex.getEffectiveness('Fighting', type);
        },
        breaksProtect: true,
        ignoreDefensive: true,
 		target: "normal",
 		type: "Steel",
 		contestType: "Tough",
})