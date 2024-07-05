const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254742389247";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_03_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDYwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDU2LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTUsXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDg1LFxuICAgICAgICA2OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxLFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTksXG4gICAgICAgIDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwLFxuICAgICAgICA2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNRTZzakFLUGp6RjBnZjhDbkg4UXBFUGl2M2lCRG5OaDFoMG9Vejc1bFdvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6ZkJ4b2EtQ1JwVzA4X0poYUhheUV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImUzZDk3NjgzLTYxZjQtNDM2OS05MDFkLTI5NGE0YjU2ZTJlYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAzOCxcbiAgICAgIDIyMSxcbiAgICAgIDY5LFxuICAgICAgMTg3LFxuICAgICAgNjksXG4gICAgICAyMzAsXG4gICAgICAzOSxcbiAgICAgIDYzLFxuICAgICAgNDIsXG4gICAgICAxNjEsXG4gICAgICAxNjksXG4gICAgICAxMDYsXG4gICAgICAyMzcsXG4gICAgICA1MixcbiAgICAgIDIwOCxcbiAgICAgIDIzOCxcbiAgICAgIDE1OCxcbiAgICAgIDk2LFxuICAgICAgMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICAxNjIsXG4gICAgICAxNTIsXG4gICAgICAyMTksXG4gICAgICAxNDAsXG4gICAgICAxMSxcbiAgICAgIDI2LFxuICAgICAgMTE4LFxuICAgICAgMjEsXG4gICAgICAxNDEsXG4gICAgICA2NSxcbiAgICAgIDMsXG4gICAgICA5MCxcbiAgICAgIDIyLFxuICAgICAgMjA4LFxuICAgICAgNTEsXG4gICAgICAxNCxcbiAgICAgIDE3MCxcbiAgICAgIDEwMCxcbiAgICAgIDUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxFSk5XREVaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDIzODkyNDc6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNSlwiLFxuICAgIFwibGlkXCI6IFwiMTc4MzIyOTQ4NTM0NDQ4OjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1ByNmdPa0NFTS90bnJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYTBKYXJGMnZBTXVQZUFBUnhic25QRS9LTWNVQ0ZrQVZSYmtDN3RWL1FpWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPcGo5dm5rRXNSWjdkaUtVaGF6Q2lMMHk0cFFTYTFNb21qUlNGV2pyOFdLK1VQaHR3Mm9wQjcyLzRUK1hmd3l4bklONjE3emVrUlhRb1lxcTJNL21CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyTnAyY3BNdTJoMGF2MUZQUnpXYVRSMzM5RVU0UWVmZlhjeHA2elA4eHZoWlpvRXMvOVg1WnJad3NaT2ZVSXRDRW5mSEFuRnA2U3JBK0RhbEp2QzVpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDIzODkyNDc6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE3MDE5N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
