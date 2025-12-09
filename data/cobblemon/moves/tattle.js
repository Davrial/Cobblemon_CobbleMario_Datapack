({
 		accuracy: 100,
 		basePower: 0,
 		category: "Status",
 		name: "Tattle",
 		pp: 64,
 		priority: 0,
 		flags: {mirror: 1, metronome: 1},
 		onHit(target, source, move) {
 		    this.hint(`Species name: ${target.species.name}. Max HP:  ${target.MaxHP}. Current HP: ${target.HP}. Attack: ${target.atk}. Special Attack: ${target.spa}. Defense: ${target.def}. Special Defense: ${target.spd}. Speed: ${target.spe}. Accuracy Boosts: ${target.boosts.accuracy}. Evasion Boosts: ${target.boosts.evasion}` )
 		}
        self: {
            boosts: {
                accuracy: 1,
            },
        },
 		secondary: null,
 		target: "normal",
 		type: "Normal",
 		contestType: "Clever",
})