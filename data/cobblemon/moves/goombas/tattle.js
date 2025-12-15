({
 		accuracy: 100,
 		basePower: 0,
 		category: "Status",
 		name: "Tattle",
 		pp: 64,
 		priority: 0,
 		flags: {mirror: 1, metronome: 1},
 		onHit(target, source, move) {
 		    this.hint(`Species name: ${target.species.name}. Max HP:  ${target.maxhp}. Current HP: ${target.hp}. Attack: ${target.storedStats.atk}. Special Attack: ${target.storedStats.spa}. Defense: ${target.storedStats.def}. Special Defense: ${target.storedStats.spd}. Speed: ${target.storedStats.spe}. Accuracy Boosts: ${target.boosts.accuracy}. Evasion Boosts: ${target.boosts.evasion}` );
 		    this.add("-singleturn", target, "move: Tattle", "[of] " + source)
 		},
        self: {
            boosts: {
                accuracy: 1
            }
        },
 		secondary: null,
 		target: "normal",
 		type: "Psychic",
 		contestType: "Clever"
})