// turntable user id of the main bot admin
exports.AdminId = '4efac12e590ca23e20002270';

// whether or not the bot should auto-awesome every song played
exports.AutoBop = false;

// whether or not dj automation should be on
exports.AutoDJ = false;
// what the bot should say before entering the booth, null if you want nothing to be said
exports.AutoDJEnterMessage = 'Looks like you folks could use another DJ!';
// what the bot should say before exiting the booth, null if you want nothing to be said
exports.AutoDJExitMessage = 'Guess I can hop out now. Real people pick better music anyways.';
// bot will enter the booth if the number of current djs is equal to or below this number
// set to -1 if you want to manually put the bot in the booth
exports.AutoDJMin = 2;
// bot will exit the booth when the number of current djs is equal to or greater than this
// number, set to 6 if you want to manually remove the bot from the booth
// this number should be at least 2 greater than the min
exports.AutoDJMax = 5;

// perform booth enforcement, bot needs to be a room moderator for this to work
exports.BoothEnforce = false;
// maximum time a dj can be idle, < 1 for none
exports.BoothIdleLimit = 30;
// message to say when removing djs for being idle, null for no message
exports.BoothIdleLimitMessage = 'You have been removed from the booth for being inactive for too long. Please wait 5 minutes before attempting to reenter the booth.';
// minimum amount of time in minutes before someone can get back into the booth, < 1 for none
exports.BoothRateLimit = 5;
// song limit, < 1 for none
exports.BoothSongLimit = 10;
// message to say when removing djs for hitting the song limit, null for no message
exports.BoothSongLimitMessage = 'You have played the maximum number of songs. Please wait 5 minutes before attempting to reenter the booth.';

// auth code for the bot to use, should be 'auth+live+xxxxxxxx'
exports.BotAuth = 'xbyRaogDmbfOCaZySylddjab';
// turntable user id of the bot
exports.BotId = '50a20d96eb35c12d0d0e739c';
// turntable room id where the bot should be
exports.BotRoom = '50a208a7eb35c12d0d0e739a';

exports.BoothBan = false;