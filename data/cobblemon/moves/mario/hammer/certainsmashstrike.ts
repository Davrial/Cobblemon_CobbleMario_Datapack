// This move uses Typescript-only typing helpers.
// You MUST use "Cobblemon: Package Addon Zip" before putting this addon into the game.
import type { MoveData } from "../../../../../.cobblemon-schema-tools/move-types";

({
 		accuracy: true,
 		basePower: 40,
 		category: "Physical",
 		name: "Certain Smash Strike",
 		pp: 20,
 		priority: 0,
 		flags: {protect: 1, mirror: 1, metronome: 1, hammer: 1},
 		target: "normal",
 		type: "Fighting",
 		contestType: "Tough",
} satisfies MoveData);
