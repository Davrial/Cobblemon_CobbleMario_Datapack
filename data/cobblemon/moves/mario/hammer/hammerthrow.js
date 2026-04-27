({
 		accuracy: 100,
 		basePower: 40,
 		category: "Physical",
 		name: "Hammer Throw",
 		pp: 20,
 		priority: 0,
 		flags: {protect: 1, mirror: 1, metronome: 1, fromabove: 1, hammer: 1},
 		secondary: null,
        onEffectiveness(typeMod, target, type) {
          if (type === "Flying" || !target.isGrounded())
            return 1;
        },
 		target: "any",
 		type: "Fighting",
 		contestType: "Cool",
})