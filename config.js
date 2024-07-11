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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_19_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcxLFxuICAgICAgICA2MCxcbiAgICAgICAgMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDExMixcbiAgICAgICAgNzIsXG4gICAgICAgIDI4LFxuICAgICAgICA5OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNixcbiAgICAgICAgMTk5LFxuICAgICAgICA1MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDc4LFxuICAgICAgICA3MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNixcbiAgICAgICAgMjEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY0LFxuICAgICAgICA3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDUwLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExLFxuICAgICAgICAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDcyLFxuICAgICAgICA5NixcbiAgICAgICAgNDksXG4gICAgICAgIDM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExLFxuICAgICAgICA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAzOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlB1L1RJV2Q5Sm1pWW4wZXp4VW9jRXZ2ZHZ3bUxZQSt2K21wRi9KVksvM3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA0NzE2ODI0N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjE4NUIxRDcyMDU3RjgxMTk2MkQ4NDYzQzZDQ0ZDQjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzExMTY2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInMxR2ZnR0ZNUW5tYmNLSUZHSllmQmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmVmNzhjMWMtOTMwMC00NzE5LTliZDYtYzgwZjRhY2ZhZjMxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MCxcbiAgICAgIDEwNixcbiAgICAgIDEwMixcbiAgICAgIDE3NCxcbiAgICAgIDIsXG4gICAgICAyMTEsXG4gICAgICAxODAsXG4gICAgICAxMTQsXG4gICAgICA5LFxuICAgICAgMjM3LFxuICAgICAgMjUsXG4gICAgICA0OSxcbiAgICAgIDQ0LFxuICAgICAgMTE3LFxuICAgICAgMTE4LFxuICAgICAgMTgwLFxuICAgICAgOTEsXG4gICAgICAxNDksXG4gICAgICAxNTcsXG4gICAgICA5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMCxcbiAgICAgIDg1LFxuICAgICAgMTQ2LFxuICAgICAgMjQwLFxuICAgICAgNSxcbiAgICAgIDEzMyxcbiAgICAgIDE2NyxcbiAgICAgIDIwOCxcbiAgICAgIDIzMSxcbiAgICAgIDExMixcbiAgICAgIDg4LFxuICAgICAgNTIsXG4gICAgICAxNSxcbiAgICAgIDE4MCxcbiAgICAgIDg3LFxuICAgICAgMjA1LFxuICAgICAgMTI0LFxuICAgICAgMTUyLFxuICAgICAgMTk2LFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVQ2Sk1WU0FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNDcxNjgyNDc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkhAc2ggbUDDsVwiLFxuICAgIFwibGlkXCI6IFwiMTUwMjUxMjkzOTI1NDk1OjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2Vjc0FzUTlPKy90QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3WGp1eFJNU0hNM1MyUDIwRFB4SFg2bGFXY3AxcWgwRkNQUk1xdlpYRFhrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllabC9ma3VsUkZWaU41eEZhVHNGL1FzZDl4cGwvOUdmZUM4akQxV0Y5RmpzdGFrMlEyVkRIT2ovcm11djh0RHpXbkpXWVVNY3ZML3BPalBqZ0laR0FRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInEvWUtTTGpZYTVPWHBLS09DKzA3a1Y4QzdwTVpnMVhNR3BQUnYxaXRMVDRqTm1IOFY5eHBqa1RUTkt3OGVFMmtYVHNpUWF5bGN0YWhBWS85Uytud0NRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDcxNjgyNDc6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzExMTYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSE41XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFITjUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1SHErNldxU0g4K1RjYTByTWRXQ2lEQ2p3MzJqOTBka2xhOTdKOXVsVlZBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzODU4NzI3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3MTExNjM4MDBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ", for 
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
