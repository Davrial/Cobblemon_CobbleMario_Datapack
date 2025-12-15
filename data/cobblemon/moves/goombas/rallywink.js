({
 		accuracy: true,
 		basePower: 0,
 		category: "Status",
 		name: "Rally Wink",
 		pp: 16,
 		priority: 0,
		flags: {protect: 1, bypasssub: 1, allyanim: 1, failinstruct: 1},
        onHit(target, source) {
              if (!target.lastMove || target.volatiles["dynamax"])
                return false;
              const lastMove = target.lastMove;
              const moveIndex = target.moves.indexOf(lastMove.id);
              if (lastMove.flags["failinstruct"] || lastMove.isZ || lastMove.isMax || lastMove.flags["charge"] || lastMove.flags["recharge"] || target.volatiles["beakblast"] || target.volatiles["focuspunch"] || target.volatiles["shelltrap"] || target.moveSlots[moveIndex] && target.moveSlots[moveIndex].pp <= 0) {
                return false;
              }
              this.add("-singleturn", target, "move: Instruct", "[of] " + source);
              this.queue.prioritizeAction(this.queue.resolveAction({
                choice: "move",
                pokemon: target,
                moveid: target.lastMove.id,
                targetLoc: target.lastMoveTargetLoc
              })[0]);
            },
 		secondary: null,
 		target: "adjacentAlly",
 		type: "Fairy",
 		zMove: {effect: 'clearnegativeboost'},
 		contestType: "Beautiful",
})