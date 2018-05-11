const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('El E3 ha comenzado.');
});

const prefix = "E3!";

//Mensajes del chat

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send({embed:{
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Hola, soy el bot oficial del server E3",
      fields: [{
        name: "Un bot para servirle",
        value:"Estoy aquí para darte información sobre las conferencias (fechas, horas y enlaces)\nSi quieres que te mande la información por MP utiliza el comando: **E3!help**"
      },
      {
        name: "¡¡¡NO PUEDES PASAR!!! pero podrás...",
        value:"Eres nuevo así que presentate como es debido y facilitanos la labor de identificación.\nSi vienes de Vandal dinos quien eres o deja un mensaje en el foro.\n**Si no vienes de Vandal danos alguna ID de PSN, Steam, Live o Nintendo.**\n\nGracias."
      },
      {
        name: "¿Que color quieres?",
        value:"De primeras te daremos el color naranja pero cuando estés dentro tenemos un par de roles hechos para cada plataforma, los colores son:\nAzul - Sony\nVerde - MS\nRojo - Nintendo\nAmarillo - PC\nNaranja - usuarios no corporativos"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "El señor E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "help")) {
    message.channel.send({embed:{
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Hola, soy el bot oficial del server E3",
      fields: [{
        name: "Comandos para las conferencias (fechas, horas y enlaces)",
        value:"Te mandaré toda la información por MP cuando introduzcas estos comandos :thumbsup:\n**E3!EA** - Conferencia de EA\n**E3!microsoft** - Conferencia de Microsoft\n**E3!bethesda** - Conferencia de Bethesda\n**E3!pc** - Conferencia de PC\n**E3!ubisoft** - Conferencia de Ubisoft\n**E3!sony** - Conferencia de Sony\n**E3!nintendo** - Conferencia de Nintendo\n**E3!square** - conferencia de SE"
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "El señor E3"
    }
  }})
}
});

//Mensajes privados con horarios y enlaces de cada conferencia

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "EA")) {
    message.author.send({embed:{
        color: 15844367,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Conferencia de EA",
      "image": {
      "url": "https://i.imgur.com/ifvF6E0.png",
      },
      fields: [{
        name: "¿Donde lo puedo ver?",
        value: "[stream Twitch](https://www.twitch.tv/ea)\n[stream YT](https://www.youtube.com/channel/UCIHBybdoneVVpaQK7xMz1ww)"
      },
      {
        name: "¿Cuándo tengo que estar aquí?",
        value: "9 de Junio a las 20:00pm Y [si no eres de España mira aquí](https://www.worldtimebuddy.com)"
      },
      {
        name: "¿Que esperar de esta conferencia?",
        value: "Battlefield, EA Sports, Sims, un nuevo indie de EA, Anthem, juego de carreras quizás...."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "El señor E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "microsoft")) {
    message.author.send({embed:{
        color: 3066993,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Conferencia de Microsoft",
      "image": {
      "url": "https://i.imgur.com/ZzGQctt.png",
      },
      fields: [{
        name: "¿Donde lo puedo ver?",
        value: "[stream Twitch](https://www.twitch.tv/xbox)\n[stream YT](https://www.youtube.com/user/xbox)"
      },
      {
        name: "¿Cuándo tengo que estar aquí?",
        value: "**10 de Junio a las 22:00pm** Y [si no eres de España mira aquí](https://www.worldtimebuddy.com)"
      },
      {
        name: "¿Que esperar de esta conferencia?",
        value: "Forza Horizon 4\nOri and the will of the wisps\nPerfect Dark?\nBandai Namco?\nID@Xbox Indie games\nThird Parties\nHalo o Gears?\n..."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "El señor E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "bethesda")) {
    message.author.send({embed:{
        color: 16747008,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Conferencia de Bethesda",
      "image": {
      "url": "https://i.imgur.com/zpkZrQY.png",
      },
      fields: [{
        name: "¿Donde lo puedo ver?",
        value: "[stream Twitch](https://www.twitch.tv/bethesda)\n[stream YT](https://www.youtube.com/user/BethesdaSoftworks)"
      },
      {
        name: "¿Cuándo tengo que estar aquí?",
        value: "11 de Junio a las 3:30am Y [si no eres de España mira aquí](https://www.worldtimebuddy.com)"
      },
      {
        name: "¿Que esperar de esta conferencia?",
        value: "Expansión de Prey\nDoom 2?\nStarfiel | nueva IP?\nTES Online | card game\n..."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "El señor E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "pc")) {
    message.author.send({embed:{
        color: 10181046,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Conferencia de PC Gaming Show",
      fields: [{
        name: "¿Donde lo puedo ver?",
        value: "[stream Twitch](https://www.twitch.tv/pcgamer)\n[stream YT](https://www.youtube.com/user/E3)"
      },
      {
        name: "¿Cuándo tengo que estar aquí?",
        value: "11 de Junio a las 00:00pm Y [si no eres de España mira aquí](https://www.worldtimebuddy.com)"
      },
      {
        name: "¿Que esperar de esta conferencia?",
        value: "Charla de indies\nPresentación de indies\nAMD/NVIDIA\n..."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "El señor E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ubisoft")) {
    message.author.send({embed:{
        color: 1752220,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Conferencia de Ubisoft",
      image: {
      "url": "https://i.imgur.com/zJpxkwo.png",
      },
      fields: [{
        name: "¿Donde lo puedo ver?",
        value: "Enlace 1: [stream Twitch](https://www.twitch.tv/ubisoft)\nEnlace 2: [stream YT](https://www.youtube.com/channel/UCBMvc6jvuTxH6TNo9ThpYjg)"
      },
      {
        name: "¿Cuándo tengo que estar aquí?",
        value: "11 de Junio a las 22:00pm Y [si no eres de España mira aquí](https://www.worldtimebuddy.com)"
      },
      {
        name: "¿Que esperar de esta conferencia?",
        value: "The Division 2\nAnno 1800\nWatch_Dogs 3?\nBG&E2?\nSplinter Cell comeback?\nNueva IP?\n..."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "El señor E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "sony")) {
    message.author.send({embed:{
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Conferencia de Sony",
      "image": {
      "url": "https://i.imgur.com/oMyIWga.png",
      },
      fields: [{
        name: "¿Donde lo puedo ver?",
        value: "Enlace 1: [stream Twitch](https://www.twitch.tv/playstation)\nEnlace 2: [stream YT](https://www.youtube.com/user/E3)"
      },
      {
        name: "¿Cuándo tengo que estar aquí?",
        value: "12 de Junio a las 03:00am Y [si no eres de España mira aquí](https://www.worldtimebuddy.com)"
      },
      {
        name: "¿Que esperar de esta conferencia?",
        value: "Ghost of Tsusima\nTLOU2\nDeath Stranding\nDMC5?\nShadows Die Twice?\nThird Parties\nPSVR games\nDays Gone\nDreams\n..."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "El señor E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "nintendo")) {
    message.author.send({embed:{
        color: 15158332,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Nintendo Treehouse",
      "image": {
      "url": "https://i.imgur.com/sn43y6C.png",
      },
      fields: [{
        name: "¿Donde lo puedo ver?",
        value: "Enlace 1: [stream Twitch](https://www.twitch.tv/nintendo)\nEnlace 2: [stream YT](https://www.youtube.com/user/Nintendo)"
      },
      {
        name: "¿Cuándo tengo que estar aquí?",
        value: "12 de Junio a las 18:00pm Y [si no eres de España mira aquí](https://www.worldtimebuddy.com)"
      },
      {
        name: "¿Que esperar de esta conferencia?",
        value: "Metroid Prime 4\nYoshi\nBayonetta 3?\nTW101 Switch port?\nPokemon?\nAnimal Crossing Switch?\n..."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "El señor E3"
    }
  }})
}
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "square")) {
    message.author.send({embed:{
        color: 5789784,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
                },
      title: "Square Enix Showcase",
      "image": {
      "url": "https://i.imgur.com/7HKMfYG.png",
      },
      fields: [{
        name: "¿Donde lo puedo ver?",
        value: "Enlace 1: [stream Twitch](https://www.twitch.tv/squareenix)\nEnlace 2: [stream YT](https://www.youtube.com/squareenixpresents)"
      },
      {
        name: "¿Cuándo tengo que estar aquí?",
        value: "12 de Junio a las 19:00pm Y [si no eres de España mira aquí](https://www.worldtimebuddy.com)"
      },
      {
        name: "¿Que esperar de esta conferencia?",
        value: "Nier Automata en ONE\nShadow of the Tomb Raider\nLeft Alive\nKingdom hearts 3\nKH collections?\n...."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "El señor E3"
    }
  }})
}
});
