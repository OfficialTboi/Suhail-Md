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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_45_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDAsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDksXG4gICAgICAgIDYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU1LFxuICAgICAgICA3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MixcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEyLFxuICAgICAgICA1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICA2NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NixcbiAgICAgICAgMjI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDksXG4gICAgICAgIDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTU3LFxuICAgICAgICAzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzN2x4TU43MVpTTVFuUEh3c2U0T2J2WVUwNnZFWWUvZ0M2TytMd3U2NkJjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjMzMTczODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMzMDkyQUU5QzVDNzREOTg0RkMwRUNDNjE0MjBDQjFFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDcwOTA3M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJqM2I2c2FBYlM4U29GWFFkdVpJVHB3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjIyNDRjMmQwLTlhMWUtNGNhZS1iOWRiLWI0NDZiZGFlMTY5Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNixcbiAgICAgIDIxLFxuICAgICAgNTUsXG4gICAgICA1MCxcbiAgICAgIDU3LFxuICAgICAgOTQsXG4gICAgICA5NSxcbiAgICAgIDI1MixcbiAgICAgIDY3LFxuICAgICAgMjcsXG4gICAgICA0OCxcbiAgICAgIDEyNCxcbiAgICAgIDExMCxcbiAgICAgIDQwLFxuICAgICAgMTcyLFxuICAgICAgNDgsXG4gICAgICAzNyxcbiAgICAgIDEyNixcbiAgICAgIDQ0LFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDExNyxcbiAgICAgIDE5OCxcbiAgICAgIDIwNSxcbiAgICAgIDE2LFxuICAgICAgMjUzLFxuICAgICAgMTg2LFxuICAgICAgMTE5LFxuICAgICAgMTMsXG4gICAgICAxNTAsXG4gICAgICAyMzEsXG4gICAgICAxNDQsXG4gICAgICAxMzEsXG4gICAgICA4MSxcbiAgICAgIDc5LFxuICAgICAgMzcsXG4gICAgICAxNCxcbiAgICAgIDI1NSxcbiAgICAgIDEwNixcbiAgICAgIDIwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0WEUzSzE1N1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEyMzMxNzM4NDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1hbnVlbFwiLFxuICAgIFwibGlkXCI6IFwiOTE5NjQyNTkyMTc1NDI6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzJ2aXRjQkVNYmZ2N1FHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJucGpZbEk4UVVXbythVjNqTEpUMzNwb1pBbVlGdkhUZW9KSis3NEphd21zPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImU4TEVyVjV4Y0Y2QUNjWXUxQk1Ld2RQb3BtSC91Vk1rbVlVTS9sZzRFUGYyT1k1NmUyZDZJWndNRUJmeHcrNzN0emlLVFdDdTI2ZzN4b1BaRFdVa0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImNmaGtHNWd4cUE0akxIZndMWEdHUWhYbzd4aVdRaUo2dUM0bVJ4LzdCOEQ0cDliWlduMHcyeGxHc1Jsd29qQk9GQWhXdEdFTWVuTUlaQ1JadnBqd0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjMzMTczODQ6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzA5MDY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTDZxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMNnEuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
