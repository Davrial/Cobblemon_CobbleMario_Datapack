({
      accuracy: true,
      basePower: 0,
      category: "Status",
      name: "Dummy Heal",
      pp: 99,
      priority: -6,
      flags: { heal: 1, bypasssub: 1},
      onHit(pokemon) {
        this.hint(`This turn the dummy took ${pokemon.baseMaxhp - pokemon.hp} damage.`);
        this.heal(pokemon.baseMaxhp / 1.1);
      },
      secondary: null,
      target: "self",
      type: "Normal"
    })