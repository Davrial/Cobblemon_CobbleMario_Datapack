{
    name: "Paragloomba Ability",
    rating: -1,
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
        if (move.type === "Dark") {
            this.boost({ atk: 2 });
        }
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
    onTryBoost(boost, target, source, effect) {
      if (effect.name === "Intimidate" && boost.atk) {
        delete boost.atk;
        this.add("-fail", target, "unboost", "Attack", "[from] ability: Gloomba Ability", "[of] " + target);
      }
    }
}