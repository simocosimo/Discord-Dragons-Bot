<a href="https://github.com/simocosimo/Discord-Dragons-Bot">
    <img width="30%" height="30%" src="https://github.com/simocosimo/Discord-Dragons-Bot/blob/master/screenshots/DiscordNDragons_logo.png" alt="Discord&Dragons Logo"
         title="Discord&Dragons Logo" align="right" />
</a>

# Discord&Dragons Bot
### A simple, but useful, bot for Discord and Dungeons & Dragons.
------

<b><a href="#overview">Overview</a></b>
|
<b><a href="#features-and-usage">Features And Usage</a></b>
|
<b><a href="#installation">Installation</a></b>
|
<b><a href="#executing">Executing</a></b>
|
<b><a href="#credits">Credits</a></b>
<br>

## Overview

This is a simple bot for <a href="https://discordapp.com/"><b>Discord</b></a> to roll some dices while playing **Dungeons & Dragons**. The aim is to use the VoIP software not only for communicating but also to manage the rolls of the dices of the players.

*One software, both functions. It seems nice, doesn't it?*

## Features And Usage

To let the bot execute commands, they have to be written in the form:
```
!command
```

- You can roll the *d100, d20, d12, d10, d8, d6, d4*. You can even specify the
characteristic's value of your character that has to be summed to the dice roll. Also, it's possible to simulate **multiple** rolls at once with the same settings using `xN` after the command (N is the number of rolls you want to do).
<br>***Usage*** *(shown for the d20, usable also with all the other dices)*:

![Roll gif](https://github.com/simocosimo/DnDiscord-Bot/blob/master/screenshots/dice_roll.gif)

------
- You can remember some of the most important values of your character. The `!set` command will do the job. You can memorize up to **3 attack bonus, the damage dice to roll, and the initiative**.
<br>***Usage***:

![Set screenshot](https://github.com/simocosimo/DnDiscord-Bot/blob/master/screenshots/set.png)

***Note***: if you don't have some of the values that the command needs, just type **0**.

------
- The `!show` has two different uses. If utilized without any parameter it's going to show the characteristics of the user that typed it saved with the `!set` command. You can also *mention* a player after the command to see his saved values.
<br>***Usage***:

![Show screenshot](https://github.com/simocosimo/DnDiscord-Bot/blob/master/screenshots/show.gif)

------
-  The `!init` command simply rolls a d20 and add the *initiative* value of the player previously saved with `!set`.
<br>***Usage***:

![Initiative screenshot](https://github.com/simocosimo/DnDiscord-Bot/blob/master/screenshots/init.png)

------
- The `!dmg` command rolls the dice specified in the *damage* field of the player previously saved with `!set`.
<br>***Usage***:

![Damage screenshot](https://github.com/simocosimo/DnDiscord-Bot/blob/master/screenshots/dmg.png)

## Installation

This is going to take a bit.
Assuming you have <a href="https://nodejs.org/it/">Node.js</a> installed, first thing to do is to *clone* this repository:
```
git clone https://github.com/simocosimo/DnDiscord-Bot
```

Then install `discord.js` in the folder where the `dnd_bot.js` file is:
```
npm i --save discord.js
```
***Note***: if you have problems installing this, you may want to check if you have the *latest version* of Node.js or if you have <a href="https://github.com/nodejs/node-gyp">node-gyp</a> installed.

Now it's time to set the bot **Token** and *"invite"* the bot on your server.
To do that simply follow <a href="https://eslachance.gitbooks.io/discord-js-bot-guide/content/getting-started/the-long-version.html">this guide</a>. You can read **Step 1**, the other Steps are not so important *(unless you want to understand how a Discord bot is made)*.

Now you should have:
- The bot account you just created, in your server
- The **Token** of your bot

To end the procedure just open the file called `bot_token.txt` and paste the Token in there.
The script will look for that file, grab your Token from there and use it to authenticate itself!
Note: the file should contain only the token. Other lines will not let the bot to login.

## Executing

To **run** the bot simply type:
```
node dnd_bot.js
```

When the bot says it's ready, you can play with it in the server chat!
Remember: to let the bot do its job you have to let it ***open in the background***. The 24/7 service is something you have to figure out setting up a server or adopting similar solutions *(unless you want to never switch off your computer... that's also an option)*. Also the data are stored **locally** on the machine that runs the bot.

## Credits

*Thanks to my friends @Alath, @Diego, @Aztek, @Arkholeon, @Stechy, @Giulia, @Max for helping me out!*
