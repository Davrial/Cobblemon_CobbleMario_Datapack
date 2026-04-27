{
	name: "Koopa Konqueror",
	rating: 3,
    flags: {},

    onModifyMove(move) {
        if (move.type === "Dark" || move.type === "Fire") {
          move.forceSTAB = true;
        }
    }
}