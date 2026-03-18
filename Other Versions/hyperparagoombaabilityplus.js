{
    name: "Hyper Paragoomba Ability Plus",
    rating: 3.5,
    flags: {},

    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
        const boostedMoves = [
            'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics',
            'floatyfall', 'fly', 'skyattack', 'divekick'
        ];
        if (boostedMoves.includes(move.id) || move.flags['fromabove']) {
            return this.chainModify(1.3);
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