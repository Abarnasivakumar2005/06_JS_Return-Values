// Getting a string for a player’s name

var getPlayerName;

getPlayerName = function (playerName) {
    // Adding prefix and suffix
    var formattedName = "==== " + playerName + " ====";
    return formattedName;
};

console.log(getPlayerName("Kandra")); // Outputs: ==== Kandra ====

/* Further Adventures
 *
 * 1) Update the getPlayerName function
 *    so it adds a prefix and suffix
 *    made up of the = character.
 */

// Updated function to include a border
getPlayerName = function (playerName) {
    // Adding border, prefix, and suffix
    var border = "|";
    var formattedName = border + "\n" + border + " " + playerName + "\n" + border;
    return formattedName;
};

console.log(getPlayerName("Kiki"));    // Outputs the formatted name for Kiki
console.log(getPlayerName("Mahesha")); // Outputs the formatted name for Mahesha
console.log(getPlayerName("Jahver"));  // Outputs the formatted name for Jahver
