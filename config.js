const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://atharvairon4041:atharvairon404@cluster0.jfl3wbd.mongodb.net/"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919881459658";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_55_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUxLFxuICAgICAgICA3OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2NixcbiAgICAgICAgNixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDM5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MixcbiAgICAgICAgODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgMjEwLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA5MixcbiAgICAgICAgNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICA0MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTksXG4gICAgICAgIDQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTksXG4gICAgICAgIDcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1LFxuICAgICAgICAzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc3LFxuICAgICAgICAxMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia3dSbVYvb0lOcXNObzgrQnQ2b0JYSkdna2FmYmdxekc4ZlU4ZFNDK3RrUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNzE4MTI4ODlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjk0OTRDNEQyQ0Q0NENERTdDRjUzODEwNUFBODFEMUI5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTkxMDUzMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI3MTgxMjg4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0M3RDYxQTgzRjc2QkM5RkQ0RUYzQTUzNzREMUM0Q0NcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5OTEwNTMyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInNiaTRxb0loU2pXcXVZRnVLQmZiN1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTRhMDZiOWUtMjk1Zi00MTJiLWE5NzgtMjY4NzQ4OWI0NjY2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM3LFxuICAgICAgMjAyLFxuICAgICAgMTM1LFxuICAgICAgMTM0LFxuICAgICAgMTY2LFxuICAgICAgMTY2LFxuICAgICAgNTUsXG4gICAgICAyMjksXG4gICAgICAyMDMsXG4gICAgICAyMTcsXG4gICAgICAyMzcsXG4gICAgICAyOCxcbiAgICAgIDEwOSxcbiAgICAgIDI1LFxuICAgICAgNzcsXG4gICAgICAxNTEsXG4gICAgICA0MCxcbiAgICAgIDg3LFxuICAgICAgMTc3LFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDMsXG4gICAgICAxMjcsXG4gICAgICAxNzIsXG4gICAgICA5MCxcbiAgICAgIDExMCxcbiAgICAgIDE4MixcbiAgICAgIDIyNCxcbiAgICAgIDE5MixcbiAgICAgIDIwMCxcbiAgICAgIDExNSxcbiAgICAgIDg5LFxuICAgICAgNTMsXG4gICAgICAyMDksXG4gICAgICA3MCxcbiAgICAgIDE2NSxcbiAgICAgIDE5MCxcbiAgICAgIDk3LFxuICAgICAgMjMsXG4gICAgICAxOTEsXG4gICAgICAyMjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzI4TE04OENcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3MTgxMjg4OToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTY2NDI0NjQ5Mjc4MDQ6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnFtdnFRSEVQcUFqN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDOFdFVE1MVzRnM3hhZUwyL1IyRlgrdXBvdkM2SFNNNzRlV1VyYnVoZ25jPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZaSEUxSDZVZUVsSGN4KzNDSjJaNFZJcmdxQ2pLMFd6ZWVlMXlGUTd2MVVnU0hGKzhwYzFuY3laLzhrRUhmOGhkVXl4TVRBcEhmNXA2dVhwZER6R0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxJQkErQmJ4TTNVS1RtdG5RYUprS2xnTTV0cUR1bVlSOWFaWG5RWkNhRS92UGFDUEZkWUN2eXFFemF4bjJJSWh0VlRvY25FMXA5RnRyZWwyOFVLV2dBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI3MTgxMjg4OToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5MTA1MjVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "BAJRANG-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "TEAM IRO",


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
