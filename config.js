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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_02_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMixcbiAgICAgICAgOTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgNTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDEyLFxuICAgICAgICA4MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMyLFxuICAgICAgICA0MCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5OCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgMjMwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAzNixcbiAgICAgICAgMTM2LFxuICAgICAgICA0NSxcbiAgICAgICAgODksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDczLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlRZFlRZ1A5QVdyL3lzSUQ4VjNjY20vaGFnazBXc01Kb3drbG11b0ZmNGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkllQWprR2lWU3FtYVhUcWtZb2JiZlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjBjNTk4MmYtMWIzNi00M2VkLTlmZWItMjQ1OTMxYjZhYmFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDY2LFxuICAgICAgMTcxLFxuICAgICAgMTExLFxuICAgICAgMTc4LFxuICAgICAgNjgsXG4gICAgICAyMzAsXG4gICAgICAzMixcbiAgICAgIDk5LFxuICAgICAgMTg2LFxuICAgICAgMjQzLFxuICAgICAgMTk3LFxuICAgICAgMTE0LFxuICAgICAgMTIyLFxuICAgICAgNDgsXG4gICAgICA1NixcbiAgICAgIDg2LFxuICAgICAgMTA3LFxuICAgICAgMjQ5LFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNixcbiAgICAgIDM0LFxuICAgICAgMjQwLFxuICAgICAgMjM3LFxuICAgICAgMjA0LFxuICAgICAgMTQsXG4gICAgICAyMTcsXG4gICAgICAxNyxcbiAgICAgIDI1LFxuICAgICAgMTQzLFxuICAgICAgMjUxLFxuICAgICAgMTQ1LFxuICAgICAgMTMxLFxuICAgICAgMjQ2LFxuICAgICAgMjQ5LFxuICAgICAgMTc5LFxuICAgICAgMjIwLFxuICAgICAgMTE0LFxuICAgICAgMTk5LFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjNDREI1WE5NXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDY5NTg5MzAxOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTM2NjY0NTI0ODAxNzQ6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSStMaE9NREVPZVpwN1FHR0FrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBdm1QY0FkcmZkT1hSbmdXdTFRdkx1ZmRRM0dGK3BKRnR1MkNjYzBVTG5zPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImEzMHdoa1UzTWN5RzA3RUdFS3NWWTJtMnE0MmxmdjFBd29MQ1BWbU1od0pPMnhZR3BUSm5LcWNBaEdYZVlET3lCNlA4dXh6OGViaEl3ZUpaaE5hdkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkZIZFJtN3FXeEN3bHdFL0VtTVVFbFEya082NGdiVmhTYnJhNjlOdlhvU1pjVzlKWlJ3ei9NSTVsNEl3bTZOaVRKQ3ZRUEJTamhBbm1nd0RKY2RKTEFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNjk1ODkzMDE6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDMwNjkyNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
