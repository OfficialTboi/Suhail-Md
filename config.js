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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348091408204";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_35_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwLFxuICAgICAgICA5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTksXG4gICAgICAgIDQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQxLFxuICAgICAgICA4NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDgyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA2MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NixcbiAgICAgICAgMjIxLFxuICAgICAgICA0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDYxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDk0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2LFxuICAgICAgICAyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQxLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidjBKcStWcXFWOEUwdzc4eTc2TFZ1SXhENitFR2Q3cGFFWk81Y2tieTRsQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUU9ldU1uM3dRT2VUMkR1a2JfczBid1wiLFxuICBcInBob25lSWRcIjogXCJlODkyZWIxOC00OTBhLTQ0YjktOWVhZC1iOWM3ZTkyZWY0YWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzQsXG4gICAgICAyNDAsXG4gICAgICA1MyxcbiAgICAgIDIwNSxcbiAgICAgIDI0OCxcbiAgICAgIDE5NyxcbiAgICAgIDI0NyxcbiAgICAgIDEwNyxcbiAgICAgIDgyLFxuICAgICAgMTk2LFxuICAgICAgMjE2LFxuICAgICAgNjIsXG4gICAgICAyMzAsXG4gICAgICAxNjIsXG4gICAgICAxNzcsXG4gICAgICAxMjAsXG4gICAgICAxNTMsXG4gICAgICA1OCxcbiAgICAgIDQ2LFxuICAgICAgOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjYsXG4gICAgICAyNTMsXG4gICAgICA3NCxcbiAgICAgIDE0MixcbiAgICAgIDcwLFxuICAgICAgNTQsXG4gICAgICA5OCxcbiAgICAgIDY5LFxuICAgICAgMjI2LFxuICAgICAgMTAxLFxuICAgICAgNTQsXG4gICAgICAxOTQsXG4gICAgICA2NixcbiAgICAgIDE3LFxuICAgICAgOTMsXG4gICAgICAxODQsXG4gICAgICA3MCxcbiAgICAgIDEwNCxcbiAgICAgIDE1OSxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjRDOTFHWUxQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY2NzM2NzkwOjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMzA3MTMxNDQxMzE2MTc6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG5LMWtFUXpkK1Z0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGdEFhbUdqM3ZYWHgranN3RmZmM2ZxajZLcXB6aWlSelZZTkVhWWE2SGhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZGMk1KTlNpUkEwcWdtMkszVk0vZUdaQ3EwcERJemptUElZeGlSZDFFcHJiWUkxVWZnamRlZ0E1TWNnT0dWWTJ4OUpEKzBrMDhVdXlJMzZNcURmL0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInd0VkQ5RGZBWXpSTmREcER0Vjlpc0NxcTF5TmsrM0RBaVFZS0NSZCtiUDM5dE44VFJSbHVWd3E4Z0pad0xZSnV2MU1ZSHA3YTNSbVpOT3dEMXhPdUJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjY3MzY3OTA6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMjA5NDQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOZStcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5lKy5qc29uIjogIntcImtleURhdGFcIjpcIlV0blFOaUpuZElyWlRWS1B6azdBbTFkTHVtN2JJMkpselVDZ20ybHl5SzA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM3NzMzNDk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAwMjA5NDg0MTlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "𝓣𝓫𝓸𝓲",


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
