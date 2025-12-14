({
 		accuracy: 100,
 		basePower: 40,
 		basePowerCallback(pokemon, target, move) {
 		            var statusRevengeBoost = 0;
 		            if (pokemon.status === "slp" || pokemon.status === "burn" || pokemon.status === "psn" || pokemon.status === "tox" || pokemon.status === "frz" || pokemon.status === "par") {
 		             statusRevengeBoost = statusRevengeBoost += 40 };
 		            if (pokemon.volatiles["confusion"]) { statusRevengeBoost += 40 };
 		            if (pokemon.volatiles["attract"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["partiallytrapped"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["disable"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["grudge"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["healblock"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["leechseed"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["nightmare"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["saltcure"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["tarshot"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["telekinesis"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["taunt"]) { statusRevengeBoost += 10 };
 		            if (pokemon.volatiles["torment"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["yawn"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["trapped"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["perishsong"]) { statusRevengeBoost += 20 };
 		            if (pokemon.volatiles["smackdown"]) { statusRevengeBoost += 20 };
        			const bp = move.basePower + ( 20 * pokemon.negativeBoosts() + statusRevengeBoost );
        			this.debug('BP: ' + bp);
        			return bp;
        		},
 		category: "Physical",
 		name: "Revenge Shell",
 		pp: 16,
 		priority: 0,
 		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
 		secondary: {
        			chance: 10,
        			volatileStatus: 'confusion',
        		},
 		target: "allAdjacentFoes",
 		type: "Dark",
 		contestType: "Clever",
})