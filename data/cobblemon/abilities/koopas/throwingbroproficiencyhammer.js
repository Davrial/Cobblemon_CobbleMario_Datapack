{
  name: "Throwing Bro Proficiency - Hammer",
  rating: 3,
  flags: {},
  onStart(pokemon) {
    this.effectState.changeMovesTypes = ["barrage"];
    this.effectState.flingMove = ["fling"];
    let flingItemsCheck = 0;

    this.effectState.flingItems = [
      "hardstone",
      "everstone",
      "floatstone",
      "smoothrock",
      "damprock",
      "icyrock",
      "heatrock",
      "kingsrock",
      "toxicorb",
      "poisonbarb",
      "ironball",
      "iron_block",
      "gold_block",
      "copper_block",
      "waxed_copper_block",
      "magnet",
      "metalcoat",
      "metalalloy",
      "nevermeltice",
      "lightball",
      "electirizer",
      "flameorb",
      "magmarizer",
      "smokeball",
      "eviolite",
      "absorbbulb",
      "miracleseed",
      "mysticwater",
      "deepseatooth",
      "deepseascale"
    ];
    this.effectState.flingItemsRock = [
      "hardstone",
      "everstone",
      "floatstone",
      "heatrock",
      "icyrock",
      "smoothrock",
      "kingsrock"
    ];
    this.effectState.flingItemsPoison = ["toxicorb", "poisonbarb"];
    this.effectState.flingItemsSteel = [
      "ironball",
      "iron_block",
      "gold_block",
      "copper_block",
      "waxed_copper_block",
      "magnet",
      "metalcoat",
      "metalalloy"
    ];
    this.effectState.flingItemsIce = ["nevermeltice"];
    this.effectState.flingItemsElectric = ["lightball", "electirizer"];
    this.effectState.flingItemsFire = ["flameorb", "magmarizer"];
    this.effectState.flingItemsDark = ["smokeball"];
    this.effectState.flingItemsDragon = ["eviolite"];
    this.effectState.flingItemsGrass = ["absorbbulb", "miracleseed"];
    this.effectState.flingItemsWater = ["mysticwater", "deepseatooth", "deepseascale"];
  },

  onModifyMove(move, pokemon) {
    const itemId = pokemon.getItem().id;

    if (!this.effectState.flingItems.includes(itemId)) {flingItemsCheck = 0;}
    else if (this.effectState.flingItems.includes(itemId)) {flingItemsCheck = 1;}
    if (flingItemsCheck = 1) {
        if (this.effectState.flingItemsRock.includes(itemId)) flingItemsCheck = 2;
        if (this.effectState.flingItemsSteel.includes(itemId)) flingItemsCheck = 3;
        if (this.effectState.flingItemsPoison.includes(itemId)) flingItemsCheck = 4;
        if (this.effectState.flingItemsIce.includes(itemId)) flingItemsCheck = 5;
        if (this.effectState.flingItemsFire.includes(itemId)) flingItemsCheck = 6;
        if (this.effectState.flingItemsElectric.includes(itemId)) flingItemsCheck = 7;
        if (this.effectState.flingItemsDark.includes(itemId)) flingItemsCheck = 8;
        if (this.effectState.flingItemsGrass.includes(itemId)) flingItemsCheck = 9;
        if (this.effectState.flingItemsWater.includes(itemId)) flingItemsCheck = 10;
        if (this.effectState.flingItemsDragon.includes(itemId)) flingItemsCheck = 11;
    }

    if (this.effectState.flingMove.includes(move.id)) {
      switch (flingItemsCheck) {
        case 0:
        case 1:
          move.type = "Fighting";
          break;
        case 2:
          move.type = "Rock";
          break;
        case 3:
          move.type = "Steel";
          break;
        case 4:
          move.type = "Poison";
          break;
        case 5:
          move.type = "Ice";
          break;
        case 6:
          move.type = "Fire";
          break;
        case 7:
          move.type = "Electric";
          break;
        case 8:
          move.type = "Dark";
          break;
        case 9:
          move.type = "Grass";
          break;
        case 10:
          move.type = "Water";
          break;
        case 11:
          move.type = "Dragon";
          break;
      }
    }

    if (this.effectState.changeMovesTypes.includes(move.id)) {
      move.type = "Fighting";
    } else if (move.id === "fling" && flingItemsCheck === 0) {
      move.type = "Fighting";
    } else if (move.id === "fling" && flingItemsCheck === 1) {
      move.type = "Fighting";
    }

    if (move.type === "Fighting" || move.flags["hammer"]) {
      move.forceSTAB = true;
    }
  },

  onBasePowerPriority: 19,
  onBasePower(basePower, attacker, defender, move) {
    if (move.flags["hammer"]) {
      this.debug("Hammer Bro boost");
      return this.chainModify(1.3);
    }
  },

  onResidualOrder: 28,
  onResidualSubOrder: 2,
  onResidual(pokemon) {
      let checkStates = [1, 11];
      let checkStatesIncludes = checkStates.includes(flingItemsCheck);
      if (this.effectState.flingItems.includes(pokemon.lastItem) && !pokemon.item && pokemon.lastMove.id === "fling" && checkStatesIncludes) {
        pokemon.setItem(pokemon.lastItem);
        pokemon.lastItem = "";
        this.add("-item", pokemon, pokemon.getItem(), "[from] ability: Throwing Bro Proficiency");
      }
  }
}