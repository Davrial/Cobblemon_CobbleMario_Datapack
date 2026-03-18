{
    name: "Paragoomba Ability Plus",
    rating: 2,
    flags: {},

    onSourceModifyDamage(damage, source, target, move) {
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