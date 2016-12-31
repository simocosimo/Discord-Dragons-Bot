var Discord = require("discord.js");
const fs = require("fs");
var fp = require("fs");
let data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
var bot = new Discord.Client();
var last_cmd;

function random(high) {
  return (Math.floor(Math.random() * high) + 1);
}

bot.on("message", msg => {

  // setting the prefix and preventing botception
  let prefix = "!";
  if(!msg.content.startsWith(prefix)) return;
  if(msg.author.bot) return;

  // !set atk 24 19 14 dmg d20+12 init 5
  if(msg.content.startsWith(prefix + "set")) {
    let args = msg.content.split(" ").slice(1);
    let author_id = msg.author.id;
    let atk = args.slice(1, 4);
    let dmg = args[5];
    let init = args[7];
    if(!data[msg.author.id]) data[msg.author.id] = {
      atk1: 0,
      atk2: 0,
      atk3: 0,
      dmg: 0,
      init: 0
    };
    data[msg.author.id].atk1 = atk[0];
    data[msg.author.id].atk2 = atk[1];
    data[msg.author.id].atk3 = atk[2];
    data[msg.author.id].dmg = dmg;
    data[msg.author.id].init = init;
    fs.writeFile('./data.json', JSON.stringify(data), console.error);
    msg.channel.sendMessage(`
      Setted for ${msg.author}:
      \tAtk: ${atk[0]}/${atk[1]}/${atk[2]}
      \tDmg: ${dmg}
      \tInit: ${init}
    `);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "show")) {
    let args = msg.content.split(" ").slice(1);
    let usr_id = msg.author.id; let usr = msg.author;
    if(args != undefined && args.length != 0) {
      usr_id = msg.mentions.users.first().id;
      usr = msg.mentions.users.first();
    }
    if(!data[usr_id]) msg.channel.sendMessage(`No data memorized for ${usr}`);
    else msg.channel.sendMessage(`
      ${usr}:
      \tAtk: ${data[usr_id].atk1}/${data[usr_id].atk2}/${data[usr_id].atk3}
      \tDmg: ${data[usr_id].dmg}
      \tInit: ${data[usr_id].init}
    `)
  }

  // DICE ROLLS!
  if(msg.content.startsWith(prefix + "d20")) {
    var rnd; var mltp; var tot = 0;
    let args = msg.content.split("x");
    mltp = (args[1] == undefined) ? 1 : Number(args[1]);
    var plus = args[0].split("+");
    for(;mltp > 0; mltp--) {
      rnd = (plus[1] == undefined) ? 0 : Number(plus[1]);
      rnd += random(20);
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "d12")) {
    var rnd; var mltp; var tot = 0;
    let args = msg.content.split("x");
    mltp = (args[1] == undefined) ? 1 : Number(args[1]);
    var plus = args[0].split("+");
    for(;mltp > 0; mltp--) {
      rnd = (plus[1] == undefined) ? 0 : Number(plus[1]);
      rnd += random(12);
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "d10")) {
    var rnd; var mltp; var tot = 0;
    let args = msg.content.split("x");
    mltp = (args[1] == undefined) ? 1 : Number(args[1]);
    var plus = args[0].split("+");
    for(;mltp > 0; mltp--) {
      rnd = (plus[1] == undefined) ? 0 : Number(plus[1]);
      rnd += random(10);
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "d8")) {
    var rnd; var mltp; var tot = 0;
    let args = msg.content.split("x");
    mltp = (args[1] == undefined) ? 1 : Number(args[1]);
    var plus = args[0].split("+");
    for(;mltp > 0; mltp--) {
      rnd = (plus[1] == undefined) ? 0 : Number(plus[1]);
      rnd += random(8);
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "d6")) {
    var rnd; var mltp; var tot = 0;
    let args = msg.content.split("x");
    mltp = (args[1] == undefined) ? 1 : Number(args[1]);
    var plus = args[0].split("+");
    for(;mltp > 0; mltp--) {
      rnd = (plus[1] == undefined) ? 0 : Number(plus[1]);
      rnd += random(6);
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "d4")) {
    var rnd; var mltp; var tot = 0;
    let args = msg.content.split("x");
    mltp = (args[1] == undefined) ? 1 : Number(args[1]);
    var plus = args[0].split("+");
    for(;mltp > 0; mltp--) {
      rnd = (plus[1] == undefined) ? 0 : Number(plus[1]);
      rnd += random(4);
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "d100")) {
    var rnd; var mltp; var tot = 0;
    let args = msg.content.split("x");
    mltp = (args[1] == undefined) ? 1 : Number(args[1]);
    var plus = args[0].split("+");
    for(;mltp > 0; mltp--) {
      rnd = (plus[1] == undefined) ? 0 : Number(plus[1]);
      rnd += random(100);
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  // ROLLS WITH STATISTICS MEMORIZED IN THE JSON
  if(msg.content.startsWith(prefix + "init")) {
    var tot = random(20);
    tot += Number(data[msg.author.id].init);
    msg.channel.sendMessage(
      `${msg.author} rolled Initiative (d20+${data[msg.author.id].init}): `
      + tot
    );
  }

  if(msg.content.startsWith(prefix + "atk")) {
    // TODO: handle attacks rolls and parameters
    // without params: all the 3 rolls for attacks
    // with params: 1 -> only the attack with the first value stored
    //              2 -> only the attack with the second value stored
    //              3 -> only the attack with the third value stored
    var times = 3;
  }

  if(msg.content.startsWith(prefix + "dmg")) {
    var plus = data[msg.author.id].dmg.split("+");
    var tot = 0; var dice;
    if(plus != undefined && plus.length != 0) tot += Number(plus[1]);
    if(tot === 0) dice = data[msg.author.id].dmg.split("d");
    else dice = plus[0].split("d");
    tot += random(Number(dice[1]));
    msg.channel.sendMessage(`
      ${msg.author} rolled Damage (d${dice[1]}+${plus[1]}): ` + tot
    );
  }

});

bot.on('ready', () => {
  console.log('Im ready!!');
});

fp.readFile('bot_token.txt', 'utf8', function(err, data) {
  if(err) return console.log(err);
  bot.login(data);
});
