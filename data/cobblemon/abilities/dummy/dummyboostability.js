{
    name: "Dummy Boost Ability",
    rating: 0,
    flags: {},

    onAfterEachBoost(boost, target, source, effect) {
      let i;
      this.hint(`onAfterEachBoost boost i value: ${boost[i]}`);
      for (i in boost) {
              this.hint(`onAfterEachBoost i value within for loop: ${i}`);
      }
    },
    onAfterBoost(boost, target, source, effect) {
      let b;
      let n = 0;
      for (b in boost) {
              this.hint(`onAfterBoost b value within for loop: ${b}`);
              n++;
      }
      this.hint(`onAfterBoost n value: ${n}`);
    }
}