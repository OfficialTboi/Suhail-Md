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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_55_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTksXG4gICAgICAgIDgxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDksXG4gICAgICAgIDc4LFxuICAgICAgICAzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUzLFxuICAgICAgICAzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgODksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDM4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwLFxuICAgICAgICA1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUyLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NixcbiAgICAgICAgNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDQwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDczLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnemdPakFJeEdJbDdvTmJsZFdobDJnYitiYzRyUXFtVkl1dnJWakpsMEZZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKRTljQ3JlTFFtcUtlVzh0YjJDS2JRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjY4OTQ3OGEzLWI5NjItNDllNi05ODBiLTVjNjk2NzgyOGViY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDY3LFxuICAgICAgMjI0LFxuICAgICAgMjE2LFxuICAgICAgMjEyLFxuICAgICAgNzEsXG4gICAgICA4NyxcbiAgICAgIDI0NCxcbiAgICAgIDIxOCxcbiAgICAgIDE2MyxcbiAgICAgIDEzNixcbiAgICAgIDksXG4gICAgICA0OSxcbiAgICAgIDE4MixcbiAgICAgIDIyOCxcbiAgICAgIDExLFxuICAgICAgODUsXG4gICAgICAxODEsXG4gICAgICAxMDQsXG4gICAgICAxMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICAxNDQsXG4gICAgICA4MixcbiAgICAgIDM5LFxuICAgICAgMTMyLFxuICAgICAgMTU4LFxuICAgICAgMTE3LFxuICAgICAgNzcsXG4gICAgICAxNzksXG4gICAgICAxMzcsXG4gICAgICAzNixcbiAgICAgIDcwLFxuICAgICAgNzMsXG4gICAgICAxMDIsXG4gICAgICAxMzgsXG4gICAgICAzMCxcbiAgICAgIDE5NyxcbiAgICAgIDI5LFxuICAgICAgMjMwLFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUxSSkxQR1FcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjMzMTczODQ6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNYW51ZWxcIixcbiAgICBcImxpZFwiOiBcIjkxOTY0MjU5MjE3NTQyOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0s2dml0Y0JFTC9rdjdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibnBqWWxJOFFVV28rYVYzakxKVDMzcG9aQW1ZRnZIVGVvSkorNzRKYXdtcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWd3M3ZXJNeVJTTzNCZ0I5S1RLdDFTMU1TNHFmcDRXcEV1MjRaclQySzJrdWpVWWViZkNXU3R5VG82UERaaERVVUgyc1FvYmV2SDJaZG01a3hMOXZEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJGQ1drSERWR21zN2g5VTg0dFNpY2dmWkZhNHN5V01FZExIQzEveHlJRzI3MnVIS2hITTVhcmoxTzd3NTNqZ0xZeVBZVlkyNnpjRHROMDhmekcrWkVqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTIzMzE3Mzg0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDcwOTY5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUw2cVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDZxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTU00blIzSkRiY25ySEdGNzZGSCtHeHZvWXpXSGYzK3k4SHpjRU5PZk5KVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NTEwNTc1NzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk0MzU3MDc4NDVcIn0iCn0="  // PUT your SESSION_ID 


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
