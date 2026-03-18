{
    name: "Hyper Paragoomba Ability",
    rating: 2,
    flags: {},

    onSourceModifyDamage(damage, source, target, move) {
        const boostedMoves = [
            'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',
            'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics',
            'floatyfall', 'fly', 'skyattack', 'headbonk', 'multibonk', 'divekick'
        ];
        if (boostedMoves.includes(move.id) || move.flags['fromabove']) {
            this.debug('Paragoomba Ability boost');
            return this.chainModify(1.5);
        }
    },
    onDamagingHit(damage, target, source, move) {
        if (target.species.id === 'goombaparagoombaflying') {
            this.add('-activate', target, 'ability: Paragoomba Ability');
            this.effectState.paragoombagrounded = true;
        }
    },
    onUpdate(pokemon) {
        if (pokemon.species.id === 'goombaparagoombaflying' && this.effectState.paragoombagrounded) {
            this.hint('Paragoomba is now grounded!');
            const speciesid = pokemon.species.id === "goomba" ? "Goomba-Paragoomba-Grounded" : "Goomba-Paragoomba-Grounded";
            pokemon.formeChange(speciesid, this.effect, true);
        }
    },
    onAfterEachBoost(boost, target, source, effect) {
      let usedBoost = 1;
      let i;
      let boostStep = true;
      for (i in boost) {
        if (source === target && boost[i] >= 1 && usedBoost <= 1) {
            if (effect.name != source.lastMove) {
                usedBoost + 1;
                return;
            }
            if (boostStep) {
                this.boost({ spa: 1 }, target, target, null, false, true);
                if (boost[i] >= 2){
                    this.boost({ atk: 1 }, target, target, null, false, true);
                    if (boost[i] >= 3){
                        this.boost({ spa: 1 }, target, target, null, false, true);
                    }
                }
                boostStep = !boostStep;
            } else {
                this.boost({ atk: 1 }, target, target, null, false, true);
                if (boost[i] >= 2){
                    this.boost({ spa: 1 }, target, target, null, false, true);
                    if (boost[i] >= 3){
                        this.boost({ atk: 1 }, target, target, null, false, true);
                    }
                }
                boostStep = !boostStep;
            }
            if (usedBoost >= 2) {
                usedBoost + 1;
                return;
            }
        }
      }
    },
    onEnd(pokemon) {
      usedBoost = 1;
    }
}