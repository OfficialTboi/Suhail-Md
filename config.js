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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_28_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk1LFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc1LFxuICAgICAgICA1MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzksXG4gICAgICAgIDU0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDI1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDY1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI3LFxuICAgICAgICA4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgNixcbiAgICAgICAgMjQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDgxLFxuICAgICAgICAyMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDUzLFxuICAgICAgICA2NixcbiAgICAgICAgMjU1LFxuICAgICAgICA2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDY0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1QjUwajZ3d1puM0F6NUVlMVdWTHBldVlhYXhIWXpndkw4TkZQNEp3SVVZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4T21vc0RZVVEzYVM4WVFYTDFTTnd3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjc3ZDE0Njk1LTlhNDYtNDkwOS04OTdiLWE0Zjg1MDE5MmNlZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4LFxuICAgICAgMTI4LFxuICAgICAgMTYxLFxuICAgICAgMjI1LFxuICAgICAgMjI2LFxuICAgICAgMTQ4LFxuICAgICAgNDUsXG4gICAgICAxMyxcbiAgICAgIDEyNyxcbiAgICAgIDEyOCxcbiAgICAgIDE1LFxuICAgICAgOTEsXG4gICAgICAxODYsXG4gICAgICA5OCxcbiAgICAgIDU3LFxuICAgICAgMTEyLFxuICAgICAgOTUsXG4gICAgICAyMTksXG4gICAgICA4NCxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5OCxcbiAgICAgIDg3LFxuICAgICAgMTE2LFxuICAgICAgNzQsXG4gICAgICAxMDgsXG4gICAgICAzMyxcbiAgICAgIDEzMCxcbiAgICAgIDE4NixcbiAgICAgIDE3NCxcbiAgICAgIDE1NixcbiAgICAgIDI1NSxcbiAgICAgIDQxLFxuICAgICAgMTk2LFxuICAgICAgMjQxLFxuICAgICAgOTYsXG4gICAgICAxNzYsXG4gICAgICAyMTUsXG4gICAgICAxNTksXG4gICAgICAxNjcsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXSjg5VFNNVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEwNTQwNTcxNjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTQ0MDYwNjYwNTU1NjoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJVFBtdVFGRUt1L3FiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkNVc3JYMGVzVGpyV1ZzVE5Wb0pQWE52cmlpSHNGUFZKTU5HY2YyL0VlWGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaTFiVmNsRHNLTXJTdWJiREM5NTA1SDYwYThHaFdoOHpobFN5UEplZE5BUlpkTi9KdkJtdzhDanNoK3VjSmRUSUh3dXpHQzNHaE5LcWFRbHVUeFk1QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwickE1RGpoU1hNN3hrYm5sQzN3bzMzcURVREdsQnc0dFRRSGxCOFdsQXloVWVxOFc1MXBZQnVDU09WMjFhTVNpc20yM2hnR3ZHRlRZb2l0TTgySlpqamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEwNTQwNTcxNjoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzQ0NDk0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
