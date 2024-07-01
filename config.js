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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_38_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgOTUsXG4gICAgICAgIDksXG4gICAgICAgIDEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDksXG4gICAgICAgIDIwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTksXG4gICAgICAgIDU3LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAzNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwLFxuICAgICAgICA5NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc2LFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMixcbiAgICAgICAgMjM1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMixcbiAgICAgICAgOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInIxN0xqOUduL1dDMlpvY1VqMkhXVkZYM0EvcFlEQlJQbTFxUXI5MjRMUVE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRHZWs4aG9KUmtpQzRoN19iODQxVFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDY5NTBkM2MtOTcxOC00OGI4LWFhNTUtM2QwNTg2YmY2Zjc2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI3LFxuICAgICAgMTY3LFxuICAgICAgMTAzLFxuICAgICAgOTAsXG4gICAgICA5LFxuICAgICAgNTcsXG4gICAgICAyMjgsXG4gICAgICA1NCxcbiAgICAgIDk1LFxuICAgICAgMTM1LFxuICAgICAgMTA4LFxuICAgICAgNzUsXG4gICAgICAxMjEsXG4gICAgICAyMjksXG4gICAgICAyMixcbiAgICAgIDY2LFxuICAgICAgMTQ4LFxuICAgICAgOSxcbiAgICAgIDkwLFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzLFxuICAgICAgMjQwLFxuICAgICAgMjIsXG4gICAgICAyMTMsXG4gICAgICAxMzUsXG4gICAgICA0OCxcbiAgICAgIDI0NCxcbiAgICAgIDIyNixcbiAgICAgIDExOSxcbiAgICAgIDkyLFxuICAgICAgMjM2LFxuICAgICAgMjMwLFxuICAgICAgMTU0LFxuICAgICAgMTQ5LFxuICAgICAgMTMzLFxuICAgICAgMjMyLFxuICAgICAgMTI1LFxuICAgICAgMTE4LFxuICAgICAgMTIsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQkdQSFk3TldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwOTE0MDgyMDQ6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk1OTUxMDc5NDI2MzU6NDRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTGpqN2JJREVMdUJpYlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJQlQ5VmRuc2xJVkpuS28zblB1NERMaGZhdjlqWHlMRHp0K2VycDFCUTBvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklENWc2L0tTTC9KdlBha2V6dDBOSDRGa1NTSFdDY3RKL1ExaWxPaFdkV2ZiL3hyaXdlck9mZVNxU25RMWZCZlNpd1RTMDZJRTBibkVqUSthdEphd0FnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdmYldJek5YOWVadGFDNDJRTU1EWTYrbVZkaDdGN0FkTFBIZFpyQTY2NFROVHBKQmR0Z2pyaENOdXBPdDBHaEl3cE1nbE02dC9zMUhxK2tVVy9qdGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwOTE0MDgyMDQ6NDRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTgxMjI4OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
