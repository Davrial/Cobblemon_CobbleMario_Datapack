{
	name: "Koopa Konqueror",
	rating: 4,
    flags: {},

    onModifyMove(move) {
        if (move.type === "Dark" || move.type === "Fire") {
          move.forceSTAB = true;
        }
    }
}