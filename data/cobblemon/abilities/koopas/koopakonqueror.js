{
    onModifyMove(move) {
        if (move.type === "Dark" || move.type === "Fire") {
          move.forceSTAB = true;
        }
    },
    flags: {},
	name: "Koopa Konqueror",
	rating: 4
}