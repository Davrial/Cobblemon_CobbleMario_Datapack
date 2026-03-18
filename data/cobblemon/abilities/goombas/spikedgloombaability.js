{
	name: "Spiked Gloomba Ability",
	rating: 2,
    flags: { breakable: 1 },

    onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
    const fromAboveMoves1 = [
                'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'floatyfall', 'fly', 'skyattack', 'headbonk', 'multibonk', 'divekick'
            ];
        if (fromAboveMoves1.includes(move.id) || move.flags["fromabove"]) {
            if (source.hasItem("heavydutyboots") ||  source.hasItem("protectivepads") || source.hasItem("spikeshieldbadgecobblemon")) {
            return;
            } else {
            this.damage(source.baseMaxhp / 8, source, target);
            }
      }
    },
    onSourceModifyDamage(damage, source, target, move) {
        const fromAboveMoves2 = [
            'stomp', 'bodyslam', 'flyingpress', 'heavyslam', 'maliciousmoonsault',  'jumpkick', 'highjumpkick', 'bounce', 'supersonicskystrike', 'acrobatics', 'floatyfall', 'fly', 'skyattack', 'headbonk', 'multibonk', 'divekick'
        ];
        if (fromAboveMoves2.includes(move.id) || move.flags["fromabove"]) {
            if (source.hasItem("heavydutyboots") ||  source.hasItem("protectivepads") || source.hasItem("spikeshieldbadgecobblemon")) {
                return this.chainModify(1.5);
            }
            else {
                return this.chainModify(0);
            }
        }
    },
    onDamagingHit(damage, target, source, move) {
      if (move.type === "Dark") {
        this.boost({ atk: 2 });
      }
    },
    onTryBoost(boost, target, source, effect) {
      if (effect.name === "Intimidate" && boost.atk) {
        delete boost.atk;
        this.add("-fail", target, "unboost", "Attack", "[from] ability: Gloomba Ability", "[of] " + target);
      }
    }
}