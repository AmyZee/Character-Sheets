//TEXTLIBRARY.JS
//Max line length: ~22-40 characters (non-monospace font)
//Max lines: 4
// \n = newline character
// {wait} = wait a while
// {wait.} = wait for twice as long than {wait} (don't use {wait}{wait}, because that makes the waiting time x4)

//INTRO SCREEN
var play1 = ["amy","Begin the game."]

var introtext1 = ["man","My girlfriend went to summer school."]
var introtext2 = ["man","She sent me weekly e-mails about\nhow she loves it so much there,{wait}\ndoing lots of activities with friends,{wait}\nespecially swimming."]
var introtext3 = ["man","Which is odd, as she hates water.\nOr she did,{wait} a month ago."]
var introtext4 = ["man","Lately, her e-mails became shorter,\nless bubbly,{wait} more formal, . . .{wait.}\n. . .{wait.} more distant."]
var introtext5 = ["man","So I went to investigate."]

//

var intro1 = ["man","I need to get inside and save my girlfriend."]
var intro2 = ["man","I can't climb over the fence.\nIt is too high."]
var continuationText1 = ["man","I really have to save my girlfriend.\nThis school is evil, I'm sure of it!"]
var noShovelText1 = ["man","I can't go through such a small hole.\nMaybe if it was bigger, I'd fit."]
var shovelPickupText1 = ["man","Ah! A shovel! This might come in handy."]

/*shovelTargetEnd*/ var shovelTextEnd1 = ["man","I'm digging it. The hole is bigger.\nNow I can get inside."]

/*girlfriendFound*/
var girlfriendFound1 = ["man-yell", "Girlfriend, there you are! I am here for you!"]
var girlfriendFound2 = ["girlfriend-charmed", "Hm? Oh hi, dear! What are you doing here?"]
var girlfriendFound3 = ["man-yell", "What have they done to you?"]
var girlfriendFound4 = ["girlfriend-charmed", "This school has made me happy!{wait}\nI will happily serve under the empire's\ncontrol.{wait} Are you here to join us\nin our eternal happiness?"]

var vampiregirlIntro1 = ["vampiregirl", "Hmm... the air suddenly feels off.\nI think I'm going to take a small walk."]

var panicAtGirlFriendGameOver1 = ["man-yell", "Girlfriend, there you are! I am here for you!"]
var panicAtGirlFriendGameOver2 = ["man-yell", ".{wait}.{wait}.{wait}\nCan you hear me?{wait.}\nDamn, it's locked!"]
var panicAtGirlFriendGameOver3 = ["girlfriend-charmed", "It's finally time for me to go. I am ready.{wait}\nGoodbye, earth. It has been a pleasure."]
var switchPanicAtGirlFriendGameOver = false //Becomes true after 3, screentransition, then continue with 4.
var panicAtGirlFriendGameOver4 = ["man-yell", "Nooo!"]
var panicAtGirlFriendGameOver5 = ["vampiregirl", "Hey, dude. She's gone."]
var panicAtGirlFriendGameOver6 = ["man-yell", "Wh..who are you?"]
var panicAtGirlFriendGameOver7 = ["vampiregirl", "You need to come with me. Now!{wait.}\nShit, I hear the guards coming. Quick!"]

var chapter1End1 = ["vampiregirl", "Okay, we're safe now."]
var chapter1End2 = ["man-yell", "Where are we?"]
var chapter1End3 = ["vampiregirl", "My hut, silly.{wait}\nSo, she's your girlfriend, I assume?\nIn any case, she can't be saved anymore.\nShe's long gone."]
var chapter1End4 = ["man-yell", "Can't you do anything at all?"]
var chapter1End5 = ["vampiregirl", "*smirk*{wait}\nThere is something. I'm part genie,\nand I can offer you one wish.\nBut I want something from you in return."]
var chapter1End6 = ["man-yell", "Anything!"]
var chapter1End7 = ["vampiregirl", "I like your style. Let's focus on your\nwish first, we'll discuss the details\nof your end of the bargain later."]
var chapter1End8 = ["man", "My wish, huh...{wait.}\nMy wish is... I want to go back in time and\nredo this day,\nbut this time as a student of this school!"]
var chapter1End9 = ["vampiregirl", "Wish completed.{wait.} Wait what?"]