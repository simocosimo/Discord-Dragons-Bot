var Discord = require("discord.js");
const fs = require("fs");
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
    if(!data[msg.author.id]) data[msg.author.id] = {atk1: 0, atk2: 0, atk3: 0, dmg: 0, init: 0};
    data[msg.author.id].atk1 = atk[0];
    data[msg.author.id].atk2 = atk[1];
    data[msg.author.id].atk3 = atk[2];
    data[msg.author.id].dmg = dmg;
    data[msg.author.id].init = init;
    fs.writeFile('./data.json', JSON.stringify(data), console.error);
    msg.channel.sendMessage(`Setted for ${msg.author}:\n\tAtk: ${atk[0]}/${atk[1]}/${atk[2]}\n\tDmg: ${dmg}\n\tInit: ${init}`);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "show")) {
    let args = msg.content.split(" ").slice(1);
    let usr_id = msg.author.id; let usr = msg.author;
    if(args != undefined && args.length != 0) {
      usr_id = msg.mentions.users.first().id;
      usr = msg.mentions.users.first();
    }
    msg.channel.sendMessage(`${usr}:\n\tAtk: ${data[usr_id].atk1}/${data[usr_id].atk2}/${data[usr_id].atk3}\n\tDmg: ${data[usr_id].dmg}\n\tInit: ${data[usr_id].init}`)
  }

  // DICE ROLLS!
  if(msg.content.startsWith(prefix + "d20")) {
    var rnd = 0; var mltp = 1; var tot = 0;
    let args = msg.content.split("x");
    if(args != undefined && args.length != 0) {
      mltp = Number(args[1]);
    }
    if(mltp != 1) var plus = args[0].split("+").slice(1);
    else var plus = msg.content.split("+").slice(1);
    for(;mltp > 0; mltp--) {
      if(plus != undefined && plus.length != 0) {
        rnd = Number(plus[0]);
        rnd += random(20);
      }
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "d12")) {
    var rnd = 0; var mltp = 1; var tot = 0;
    let args = msg.content.split("x");
    if(args != undefined && args.length != 0) {
      mltp = Number(args[1]);
    }
    if(mltp != 1) var plus = args[0].split("+").slice(1);
    else var plus = msg.content.split("+").slice(1);
    for(;mltp > 0; mltp--) {
      if(plus != undefined && plus.length != 0) {
        rnd = Number(plus[0]);
        rnd += random(12);
      }
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "d10")) {
    var rnd = 0; var mltp = 1; var tot = 0;
    let args = msg.content.split("x");
    if(args != undefined && args.length != 0) {
      mltp = Number(args[1]);
    }
    if(mltp != 1) var plus = args[0].split("+").slice(1);
    else var plus = msg.content.split("+").slice(1);
    for(;mltp > 0; mltp--) {
      if(plus != undefined && plus.length != 0) {
        rnd = Number(plus[0]);
        rnd += random(10);
      }
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "d8")) {
    var rnd = 0; var mltp = 1; var tot = 0;
    let args = msg.content.split("x");
    if(args != undefined && args.length != 0) {
      mltp = Number(args[1]);
    }
    if(mltp != 1) var plus = args[0].split("+").slice(1);
    else var plus = msg.content.split("+").slice(1);
    for(;mltp > 0; mltp--) {
      if(plus != undefined && plus.length != 0) {
        rnd = Number(plus[0]);
        rnd += random(8);
      }
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "d6")) {
    var rnd = 0; var mltp = 1; var tot = 0;
    let args = msg.content.split("x");
    if(args != undefined && args.length != 0) {
      mltp = Number(args[1]);
    }
    if(mltp != 1) var plus = args[0].split("+").slice(1);
    else var plus = msg.content.split("+").slice(1);
    for(;mltp > 0; mltp--) {
      if(plus != undefined && plus.length != 0) {
        rnd = Number(plus[0]);
        rnd += random(6);
      }
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "d4")) {
    var rnd = 0; var mltp = 1; var tot = 0;
    let args = msg.content.split("x");
    if(args != undefined && args.length != 0) {
      mltp = Number(args[1]);
    }
    if(mltp != 1) var plus = args[0].split("+").slice(1);
    else var plus = msg.content.split("+").slice(1);
    for(;mltp > 0; mltp--) {
      if(plus != undefined && plus.length != 0) {
        rnd = Number(plus[0]);
        rnd += random(4);
      }
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  if(msg.content.startsWith(prefix + "d100")) {
    var rnd = 0; var mltp = 1; var tot = 0;
    let args = msg.content.split("x");
    if(args != undefined && args.length != 0) {
      mltp = Number(args[1]);
    }
    if(mltp != 1) var plus = args[0].split("+").slice(1);
    else var plus = msg.content.split("+").slice(1);
    for(;mltp > 0; mltp--) {
      if(plus != undefined && plus.length != 0) {
        rnd = Number(plus[0]);
        rnd += random(100);
      }
      tot += rnd;
    }
    msg.channel.sendMessage(`${msg.author} rolled: ` + tot);
    last_cmd = msg.content;
  }

  // ROLLS WITH STATISTICS MEMORIZED IN THE JSON
  if(msg.content.startsWith(prefix + "init")) {
    var tot = random(20);
    tot += Number(data[msg.author.id].init);
    msg.channel.sendMessage(`${msg.author} rolled Initiative (d20+${data[msg.author.id].init}): ` + tot);
  }

  if(msg.content.startsWith(prefix + "atk")) {
    // TODO: gestire attacchi con parametri:
    // senza param: tutti e tre
    // con param tipo 1, 2, 3 attacco con il 1°, 2° o 3°
    var times = 3;
  }

  if(msg.content.startsWith(prefix + "dmg")) {
    var plus = data[msg.author.id].dmg.split("+");
    var tot = 0; var dice;
    if(plus != undefined && plus.length != 0) tot += Number(plus[1]);
    if(tot === 0) dice = data[msg.author.id].dmg.split("d");
    else dice = plus[0].split("d");
    tot += random(Number(dice[1]));
    msg.channel.sendMessage(`${msg.author} rolled Damage (d${dice[1]}+${plus[1]}): ` + tot);
  }

});

bot.on('ready', () => {
  console.log('Im ready!!');
});

bot.login("MjY0NDkwNzE1MDgwMjk0NDEw.C0hVsQ.yzBoqhR9tVyrh_KdyLsu0vFUmtQ");
