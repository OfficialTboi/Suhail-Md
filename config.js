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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_32_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQyLFxuICAgICAgICA0MixcbiAgICAgICAgNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDY0LFxuICAgICAgICA1MixcbiAgICAgICAgODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzksXG4gICAgICAgIDI3LFxuICAgICAgICAyMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODYsXG4gICAgICAgIDczLFxuICAgICAgICA4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5OSxcbiAgICAgICAgNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcxLFxuICAgICAgICA2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjksXG4gICAgICAgIDU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkzLFxuICAgICAgICAxMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwZENCY1pVOGJsUGlXbmpzS0tHYVo3NTRWangrUXRnMkp4WWprY3hmT2J3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsQi1MWVBKY1RKS1BUXzNqVW5Ld1FBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc1MDI1OGQ4LWE4ZTAtNGIzOC04ZGQ2LTllOTE2NmE3ZWYwNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICAxMDQsXG4gICAgICAxMDAsXG4gICAgICAxOTgsXG4gICAgICAxNjEsXG4gICAgICAxMjcsXG4gICAgICA4NixcbiAgICAgIDE0MCxcbiAgICAgIDI4LFxuICAgICAgMTAzLFxuICAgICAgMTU2LFxuICAgICAgMjksXG4gICAgICA3MyxcbiAgICAgIDcxLFxuICAgICAgMjgsXG4gICAgICA4NixcbiAgICAgIDE4MixcbiAgICAgIDE0MSxcbiAgICAgIDMxLFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMjIyLFxuICAgICAgMTgwLFxuICAgICAgMjMyLFxuICAgICAgMjAzLFxuICAgICAgNDYsXG4gICAgICAxOTMsXG4gICAgICAxMyxcbiAgICAgIDI1MixcbiAgICAgIDEyMixcbiAgICAgIDksXG4gICAgICA4MixcbiAgICAgIDg0LFxuICAgICAgNzksXG4gICAgICAyNDQsXG4gICAgICAyMzYsXG4gICAgICAxOTgsXG4gICAgICAxMjQsXG4gICAgICAxMjgsXG4gICAgICAyMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTNRUDMyWDVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwOTE0MDgyMDQ6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk1OTUxMDc5NDI2MzU6NDlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHpqN2JJREVMN2RxYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJQlQ5VmRuc2xJVkpuS28zblB1NERMaGZhdjlqWHlMRHp0K2VycDFCUTBvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlFOaVptZDVDR3VvdW9OUzlFRkU0aG4vZzJ0WlRqNitCK0NEdkxYTmxBRTYrN045aFNuZFF0QlBHdjBWZlNJcXduVm5VeXRNQ2ZudDNwY2RlYzlSeUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5xVVJTRmlZaVdvU1FNUytsRFdMckx2L09vaFlFM3JYYXdhRDVua3E2NWc3TXFKcm54TWdGa0FGc2Z6K0RlUGF3bEJhbHNzRkZkcS9JRU1UU0IrSGd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwOTE0MDgyMDQ6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM0ODM1M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
