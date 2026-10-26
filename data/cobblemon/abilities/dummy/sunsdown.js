{
    onStart(pokemon) {
      if (pokemon.baseSpecies.baseSpecies !== "Solrock" || pokemon.transformed)
        return;
      if (pokemon.hp > pokemon.maxhp / 2) {
        if (pokemon.species.forme !== "Meteor") {
          pokemon.formeChange("Solrock-Meteor");
        }
      } else {
        if (pokemon.species.forme === "Meteor") {
          pokemon.formeChange(pokemon.set.species);
        }
      }
    },
    onResidualOrder: 29,
    onResidual(pokemon) {
      if (pokemon.baseSpecies.baseSpecies !== "Solrock" || pokemon.transformed || !pokemon.hp)
        return;
      if (pokemon.hp > pokemon.maxhp / 2) {
        if (pokemon.species.forme !== "Meteor") {
          pokemon.formeChange("Solrock-Meteor");
        }
      } else {
        if (pokemon.species.forme === "Meteor") {
          pokemon.formeChange(pokemon.set.species);
        }
      }
    },
    onSetStatus(status, target, source, effect) {
      if (target.species.id !== "solrockmeteor" || target.transformed)
        return;
      if (effect?.status) {
        this.add("-immune", target, "[from] ability: Shields Down");
      }
      return false;
    },
    onTryAddVolatile(status, target) {
      if (target.species.id !== "solrockmeteor" || target.transformed)
        return;
      if (status.id !== "yawn")
        return;
      this.add("-immune", target, "[from] ability: Shields Down");
      return null;
    },
    flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, cantsuppress: 1 },
    name: "Suns Down",
    rating: 3
  }