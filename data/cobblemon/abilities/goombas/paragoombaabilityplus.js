{
    name: "Paragoomba Ability Plus",
    rating: 2,
    flags: {},

    onStart(pokemon) {
      this.boost({ evasion: 1 }, pokemon);
      this.boost({ spe: 1 }, pokemon);
    },

    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
        const boostedMoves = [
            'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics',
            'floatyfall', 'fly', 'skyattack', 'divekick'
        ];
        if (boostedMoves.includes(move.id)) {
            this.debug('Paragoomba Ability boost');
            return this.chainModify(1.3);
        }
    }
}