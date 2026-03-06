{
  name: "Limit Break",
  num: 9001,

  onStart(pokemon) {
    pokemon.m = pokemon.m || {};
    if (!pokemon.m.limit) pokemon.m.limit = { p: 0, cap: 100 };
    this.add("-ability", pokemon, "Limit Break");
  },

  onSwitchIn(pokemon) {
    pokemon.m = pokemon.m || {};
    if (!pokemon.m.limit) pokemon.m.limit = { p: 0, cap: 100 };
  },

  onTrySetAbility(ability, target, source, effect) {
    if (target && source && target !== source) return false;
  },

  onAfterMoveSelf(source, target, move) {
    if (!source?.m?.limit || !move) return;
    const gain = (move.basePower && move.category !== "Status") ? 20 : 10;
    source.m.limit.p = Math.min(source.m.limit.cap, source.m.limit.p + gain);
  },

  onDamagingHit(damage, target, source, move) {
    if (!target?.m?.limit || !damage || !target.maxhp) return;
    const gain = Math.floor((damage * 50) / target.maxhp);
    target.m.limit.p = Math.min(target.m.limit.cap, target.m.limit.p + gain);
  }
}