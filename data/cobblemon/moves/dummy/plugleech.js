({
  accuracy: 100,
  basePower: 60,
  category: "Physical",
  name: "Plug Leech",
  pp: 10,
  priority: 0,
  flags: { contact: 1, protect: 1, mirror: 1, heal: 1, metronome: 1 },
  drain: [1, 2],
     onEffectiveness(typeMod, target, type) {
     if (type === "Electric")
       return 1;
   },
  secondary: null,
  target: "normal",
  type: "Electric",
  contestType: "Tough",
  onAfterHit(target, source, move) {
    if (!source.volatiles['charge']) {
      source.addVolatile('charge', source, move);
      this.add(`${source.name} se sobrecargó de energía tras absorber electricidad!`);
    }
  },
})