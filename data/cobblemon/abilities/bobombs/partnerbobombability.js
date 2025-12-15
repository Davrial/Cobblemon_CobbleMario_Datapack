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
        return this.chainModify(1.2);
      }
    },
    onModifySpA(atk, attacker, defender, move) {
      if (move.flags["explosive"]) {
        return this.chainModify(1.2);
      }
    },
    onModifyMove(move) {
        if (move.flags["sdexplosion"]){
          selfdestruct: "false";
        }
    },
    onModifyAtk(atk, attacker, defender, move) {
      if (move.flags["sdexplosion"]) {
        return this.chainModify(0.5);
      }
    },
    onModifySpA(atk, attacker, defender, move) {
      if (move.flags["sdexplosion"]) {
        return this.chainModify(0.5);
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
	name: "Partner Bobomb Ability",
	rating: 3
}