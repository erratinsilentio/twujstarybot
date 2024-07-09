import { Bot } from "grammy";
import {
  ojciecJanuszZwroty,
  obelgi,
  nierozumie,
  generateNierozumie,
  generateObelga,
  generatePowiedzonko,
} from "./data.js";

const api = import.meta.env.VITE_TG_BOT;
console.log(api);
// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new Bot(api); // <-- put your bot token between the ""

// Handle the /start command.
bot.command("start", (ctx) =>
  ctx.reply(ojciecJanuszZwroty[generatePowiedzonko()])
);

bot.command("yo", (ctx) => ctx.reply(`Yo ${ctx.from?.username}`));

bot.command("elo", (ctx) =>
  ctx.reply(
    `elo ${ctx.from?.username} mordo rekinie ty. Daj szluga zapracowanemu i schorowanemu ojcu młody.`
  )
);
bot.command("witam", (ctx) => ctx.reply(obelgi[generateObelga()]));
bot.command("jakadzisgodzina", (ctx) =>
  ctx.reply(
    "Coś ty o mnie kurwa napisał,ty mała biedna kurwo? Wiedz śmieciu, że skończyłem studia oficerskie z najwyższymi ocenami i od razu po nich przyjęli mnie do GROMu, brałem udział w misjach w Kosowie, Nikaragui, Portoryko, Iraku, Afganistanie i Pakistanie i mam ponad 300 zabitych terrorystów na koncie. Jestem doskonale przeszkolony w walce partyzanckiej i jako snajper - dostałem odznaczenie dla najlepszego strzelca wyborowego Wojska Polskiego. Jestes dla mnie po prostu kolejnym celem, któremu mogę niespodziewanie rozjebać łeb z 800 metrów. Zmiote cie smieciu z powierzchni ziemii z precyzja dotad nieznana na tej planecie, slyszysz chujku? Myslisz psie, ze mozesz sobie pisac w internecie co tylko zechcesz nie poniesiesz za to konsekwencji? Blad skurwysynu, gdy to czytasz moi kumple z Agencji Bezpieczenstwa Wewnetrzego we wspolpracy z CIA namierzaja twoj adres IP, wiec szykuj swoja dupe na jesien sreniowiecza. Jestes juz kurewsko martwy, szczeniaku. Moge w tej chwili byc gdziekolwiek, ale i tak gdy tylko najdzie mnie ochota moge cie rozjebac na jeden z siedmiuset sposobow a i to tylko golymi rekoma. Poza doskonałym przeszkoleniu we wschodnich sztukach walki (znam kung-fu, karate - czarny pas, krav maga i zloty medal w jiu-jitsu) znam sie rewelacyjnie na broni, a tej mam caly arsenal i uwierz mi, uzyje jej tyle, aby z twojego marnego zycia nie zostal nawet najdrobniejszy atom . Gdybys wiedzial gowniarzu co sciagasz na siebie swoim 'madralinskim' hejtem pewnie zesralbys sie cztery razy w gacie i pisal gdzie sie da, ze zalujesz chocby samego pomyslenia o tym. Ale nie mogles tego wiedziec i teraz suko zaplacisz za to najwyzsza cene. Jestes pierdolonym trupem."
  )
);
bot.command("help", (ctx) => ctx.reply("ratuj mnie synek!!1"));
// Handle other messages.
//bot.on("message", (ctx) => ctx.reply(nierozumie[generateNierozumie()]));

// Suggest commands in the menu
bot.api.setMyCommands([
  { command: "/yo", description: "Powitanie Oficjalne" },
  { command: "/jakadzisgodzina", description: "co" },
  {
    command: "/start",
    description: "nawet nie wiem xD",
  },
  {
    command: "/witam",
    description: "ojciec ma zły humor, odpuść",
  },
  {
    command: "/help",
    description: "ratuj sie kto moze",
  },
]);
// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.

// Start the bot.
bot.start();
