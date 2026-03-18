{
    name: "Hyper Paragoomba Ability",
    rating: 2,
    flags: {},

    onStart(source) {
        let c;
    },
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
    onAfterBoost(boost, target, source, effect) {
        let usedBoost1 = 1;
        let usedBoost2 = 1;
        let i;
        let n = 0;
        for (i in boost) {
            if (source === target && boost[i] >= 1 && usedBoost1 <= 1) {
                if (effect.name != source.lastMove) {
                    usedBoost1 + 1;
                    return;
                }
                n++;
                if (boost[i] >= 2){
                    n++;
                    if (boost[i] >= 3){
                        n++;
                    }
                }
                if (usedBoost1 >= 2) {
                    usedBoost1 + 1;
                }
            }
        }
        if (this.effectState.c !== 0 && this.effectState.c !== 1){
            this.effectState.c = 0;
        }
        for (let m = 1; m <= n; m++) {
            if (source === target && boost[i] >= 1 && usedBoost2 <= 1) {
                if (effect.name != source.lastMove) {
                    usedBoost2 + 1;
                    return;
                }
                if (n + m + this.effectState.c === 2) {
                    this.boost({ atk: 1 }, target, target, null, false, true);
                } else if (n + m + this.effectState.c === 3) {
                    this.boost({ spa: 1 }, target, target, null, false, true);
                } else if (n + m + this.effectState.c === 4) {
                 this.boost({ atk: 1 }, target, target, null, false, true);
                } else if (n + m + this.effectState.c === 5) {
                 this.boost({ spa: 1 }, target, target, null, false, true);
                } else if (n + m + this.effectState.c >= 6) {
                 this.boost({ atk: 1 }, target, target, null, false, true);
                }
                if (usedBoost2 >= 2) {
                    usedBoost2 + 1;
                    return;
                }
            }
        }
    },
    onAfterMove(pokemon) {
      if (this.effectState.c === 1){
        this.effectState.c = 0
      } else {this.effectState.c = 1}
    }
}