const {Client, SpotifyRPC, CustomStatus, RichPresence} = require('discord.js-selfbot-v13');
const delay = require('delay')
const fs = require('fs');
// инициализация 
const client = new Client();
const start_time = Math.floor(Date.now() / 1000)
function randint(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log('Статус пошел!')
client.on('ready', async () => {
    var end_mins = 0
    var end_hrs = 0
    var end_secs = 0
    const customactivity = new CustomStatus()
    .setState("текст") // Пользовательский статус (из дискорд клиента)
    
    const r = new RichPresence(client)
	.setAssetsLargeImage("mp: attachments/1077987747228287026/1079143354928988190/444c8716cea9a6065cda840240d4db14.gif") // Картинка
	.setAssetsLargeText('Количество заявок в друзья обновляется раз в 30с') // Текст при наводке
    .setType("STREAMING") 
    .setURL("") //ссылка, например https://www.twitch.tv/kizzzexc
    .setApplicationId(234395307759108106) // Можешь не менять, это Groovy
    .addButton("название", "ссылка") // Кнопки
    .addButton("название","ссылка") // Кнопки
    .setName("Twitch") // Строка где "Стримит на <название>"
	.setDetails('?') // Белый текст сверху
    
    while(true) {
       let relc = client.relationships.incomingCache.size
       r.setState(`Заявок в друзья ${relc}`)/ // Счетчик заявок в друзья (бонус тип)
		// если нет необходимости, закоментируй эту часть кода "/* */"
     client.user.setPresence({activities: [r.toJSON(), customactivity.toJSON()]})
        await delay(30000)
}});


// Соединение токена
client.login('Token'); // Токен, ключ от аккаунта
