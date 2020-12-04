require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials:  ["MESSAGE"]
});
const BOT_PREFIX = "?";
const MOD_ME_COM = "mod-me";
const UNDO_COM = "un";
const NOOB_ME_COM = "noob-me";
client.on("messageDelete", (msg) => {
  msg.channel.send("Stop deleting messages, bruh");
});

client.on("ready", () => {
  console.log("Our bot is ready to go!");
});

client.on("message", (msg) => {
  if (msg.content === "hello" || msg.content === "hi") {
    msg.reply("hello" + "👋");
  } else if (msg.content === `${BOT_PREFIX}${MOD_ME_COM}`) {
    modUser(msg.member);
    msg.reply("you are now a moderator");
  } else if (msg.content === `${BOT_PREFIX}${UNDO_COM} ${MOD_ME_COM}`) {
    unModUser(msg.member);
    msg.reply("you are no more a moderator");
  } else if (msg.content === `${BOT_PREFIX} ${NOOB_ME_COM}`) {
    NoobUser(msg.member);
    msg.reply("you are a noob now");
  } else if (msg.content === `${BOT_PREFIX}${UNDO_COM} ${NOOB_ME_COM}`) {
    UnNoobUser(msg.member);
    msg.reply("you are no more a noob now");
  } else if (
    msg.content === "I love naruto" ||
    msg.content === "sasuke is cool"
  ) {
    msg.react("❤️");
  } else if (msg.content === "I hate naruto") {
    msg.react("😠");
  } else if (msg.content === "Is that a mangekyo sharingan") {
    msg.channel.send("You know about it , so now I must use \n KAMUI!");
    msg.channel.send(
      "https://tenor.com/https://tenor.com/view/obito-uchiha-happy-smiling-kamui-mangekyo-sharingan-gif-16358699/87ad56831481f52ce156b5af46eb9578/mp4.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F632333603915262634%2F&psig=AOvVaw3Yzqu9bnd5gzHDgRAOA8sB&ust=1607148519085000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjwz_jUs-0CFQAAAAAdAAAAABAD"
    );
    msg.channel.send("See this link to kamui!!");
  }
});
function modUser(member) {
  member.roles.add("784288268463898636");
}

function NoobUser(member) {
  member.roles.add("784288268463898636");
}
function UnNoobUser(member) {
  member.roles.remove("784288268463898636");
}

function unModUser(member) {
  member.roles.remove("783564157650862131");
}

client.login(process.env.BOT_TOKEN);
