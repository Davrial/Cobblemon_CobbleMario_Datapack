({
     num: 802,
     accuracy: 100,
     basePower: 100,
     category: "Special",
     name: "Misty Explosion",
     pp: 5,
     priority: 0,
     flags: { protect: 1, mirror: 1, metronome: 1, sdexplosion:1, explosive:1 },
     selfdestruct: "always",
     onBasePower(basePower, source) {
       if (this.field.isTerrain("mistyterrain") && source.isGrounded()) {
         this.debug("misty terrain boost");
         return this.chainModify(1.5);
       }
     },
     secondary: null,
     target: "allAdjacent",
     type: "Fairy"
   })