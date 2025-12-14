{
    onSourceModifyDamage(damage, source, target, move) {
      let mod = 1;
      if (move.type === "Fighting")
        mod *= 2;
      return this.chainModify(mod);
    },


    const nonContactMoves = [
        'woodhammer'
    ];
    const changeMovesTypes = [
        'barrage'
    ];
    const flingMove = [
        'fling'
    ];
    const flingItems = [
        'ironball', 'hardstone', 'nevermeltice', 'flameorb', 'everstone', 'floatstone', 'heatrock', 'icyrock', 'lightball', 'smokeball', 'smoothrock', 'toxicorb', 'poisonbarb', 'damprock', 'eviolite', 'iron_block', 'gold_block', 'copper_block', 'waxed_copper_block'
    ];
    const flingItemsRock = [
        'hardstone', 'everstone', 'floatstone', 'heatrock', 'icyrock', 'smoothrock','poisonbarb', 'eviolite'
    ];
    const flingItemsPoison = [
        'toxicorb', 'poisonbarb'
    ];
    const flingItemsSteel = [
        'ironball', 'iron_block', 'gold_block', 'copper_block', 'waxed_copper_block'
    ];
    const flingItemsIce = [
        'nevermeltice'
    ];
    const flingItemsElectric = [
        'lightball'
    ];
    const flingItemsFire = [
        'flameorb'
    ];
    const flingItemsDark = [
        'smokeball'
    ];
    const flingItemsDragon = [
        'eviolite'
    ];
    var flingItemsCheck = 0
    onStart(pokemon) {
      if (flingItems.includes(item.id))
        flingItemsCheck = 1
      if (flingItemsRock.includes(item.id))
        flingItemsCheck = 2
      if (flingItemsSteel.includes(item.id))
        flingItemsCheck = 3
      if (flingItemsPoison.includes(item.id))
        flingItemsCheck = 4
      if (flingItemsIce.includes(item.id))
        flingItemsCheck = 5
      if (flingItemsFire.includes(item.id))
        flingItemsCheck = 6
      if (flingItemsElectric.includes(item.id))
        flingItemsCheck = 7
      if (flingItemsDark.includes(item.id))
        flingItemsCheck = 8
      if (flingItemsDragon.includes(item.id))
        flingItemsCheck = 9
    },
    onModifyMove(move) {
        if (nonContactMoves.includes(move.id) || move.flags["throwingbrosmove"]) {
          delete move.flags["contact"];
        }
        if (changeMovesTypes.includes(move.id)) {
            move.type = "Fighting";
        } else if (move.type === "Normal" && flingItemsCheck === 0) {
            move.type = "Fighting";
        }
        if (flingMove.includes(move.id)) {
            if (flingItemsCheck === 0) {
                move.type = "Fighting";
            } else if (flingItemsCheck === 1) {
                move.type = "Fighting";
            } else if (flingItemsCheck === 2) {
                move.type = "Rock";
            } else if (flingItemsCheck === 3) {
                move.type = "Steel";
            } else if (flingItemsCheck === 4) {
                move.type = "Poison";
            } else if (flingItemsCheck === 5) {
                move.type = "Ice";
            } else if (flingItemsCheck === 6) {
                move.type = "Fire";
            } else if (flingItemsCheck === 7) {
                move.type = "Electric";
            } else if (flingItemsCheck === 8) {
                move.type = "Dark";
            } else if (flingItemsCheck === 9) {
                move.type = "Dragon";
            }
        }
        if (move.type === "Fighting") {
          move.forceSTAB = true;
        }
    },
    flags: {},
	name: "Throwing Bro Template Ability",
	rating: 3
}