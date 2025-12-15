{
    onModifyMove(move) {
        if (move.flags["explosive"]){
          move.forceSTAB = true;
        }
    },
    onSourceModifyAtkPriority: 5,
    onSourceModifyAtk(atk, attacker, defender, move) {
      if (move.flags["explosive"] || move.type === "Fire") {
        return this.chainModify(2);
      }
    },
    onSourceModifySpAPriority: 5,
    onSourceModifySpA(atk, attacker, defender, move) {
      if (move.flags["explosive"] || move.type === "Fire") {
        return this.chainModify(2);
      }
    },
    onModifyAtk(atk, attacker, defender, move) {
      if (move.flags["explosive"]) {
        return this.chainModify(1.3);
      }
    },
    onModifySpA(atk, attacker, defender, move) {
      if (move.flags["explosive"]) {
        return this.chainModify(1.3);
      }
    },
    onDamagingHitOrder: 1,
        onDamagingHit(damage, target, source, move) {
          if (!target.hp && this.checkMoveMakesContact(move, source, target, true)) {
            this.damage(target.baseMaxhp / 4, source, target);
          } else if (!target.hp && target.isAdjacent(move, source, target, true)) {
             this.damage(target.baseMaxhp / 4, source, target);
           }
        },
    flags: {},
	name: "Basic Bobomb Ability",
	rating: 3
}