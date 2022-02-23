function shout(string) {
    return string.toUpperCase();
}

function whisper(Hello) {
    return Hello.toLowerCase();
}

function logShout (Hello) {
    console.log(Hello.toUpperCase());
}

function logWhisper (Hello) {
    console.log(Hello.toLowerCase());
}

function sayHiToHeadphonedRoommate(greeting) {
    var cantAnswer = "I can't hear you!";
    var yesAnswer = "YES INDEED!";
    var loveAnswer = "I would love to!";
    if (greeting.toLowerCase(greeting) ===greeting) {
        return cantAnswer;
    }
    else if (greeting.toUpperCase(greeting) ===greeting) {
        return yesAnswer;
    }
    else if ("Let's have dinner together!" ===greeting) {
        return loveAnswer
    }
}