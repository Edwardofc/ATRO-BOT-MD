import axios from 'axios';
const handler = async (m, {conn, args, usedPrefix, command}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/Edwardofc/ATRO-BOT-MD/master/atro.sh/JSON/itzy.json`)).data;
  const atro = await res[Math.floor(res.length * Math.random())];
  conn.sendFile(m.chat, atro, 'error.jpg', `_${command}_`, m);
};
// conn.sendButton(m.chat, `_${command}_`, author, atro, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)}
handler.help = ['itzy', 'kpopitzy'];
handler.tags = ['internet'];
handler.command = /^(itzy|kpopitzy)$/i;
export default handler;
