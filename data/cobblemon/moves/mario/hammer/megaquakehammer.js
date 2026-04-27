({
 		accuracy: 90,
 		basePower: 140,
 		category: "Physical",
 		name: "Mega Quake Hammer",
 		pp: 5,
 		priority: -1,
 		flags: {protect: 1, mirror: 1, metronome: 1, nonsky: 1, hammer: 1, frombelow: 1},
        secondary: {
          chance: 30,
          volatileStatus: "flinch"
        },
        self: {
          boosts: {
            atk: -1, spe: -1
          }
        },
        ignoreEvasion: true,
        ignoreDefensive: true,
        target: "allAdjacentFoes",
 		type: "Ground",
 		contestType: "Tough",
})