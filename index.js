require("./bot.js");

// ===================== WEB KEEP-ALIVE / HEALTH =====================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// HEAD cho uptime services (UptimeRobot/BetterStack thường gửi HEAD)
app.head("/", (req, res) => {
  res.setHeader("Connection", "keep-alive");
  res.status(200).end();
});

// Route gốc (giữ nguyên như bạn)
app.get("/", (req, res) => {
  res.setHeader("Connection", "keep-alive");
  res.status(200).send("Bot is running!");
});

// Ping đơn giản cho monitor
app.get("/ping", (req, res) => {
  res.setHeader("Connection", "keep-alive");
  res.status(200).json({ ok: true, ts: Date.now() });
});

// Health chi tiết (tiện debug khi cần)
app.get("/status", (req, res) => {
  res.setHeader("Connection", "keep-alive");
  res.status(200).json({
    ok: true,
    uptime: Math.round(process.uptime()),
    pid: process.pid,
    memory: process.memoryUsage(),
    bot: {
      ready: !!client.user,
      user: client.user ? client.user.tag : null,
      guilds: client.guilds ? client.guilds.cache.size : 0,
    },
  });
});

// Lắng nghe PORT Render cung cấp
app.listen(PORT, () => {
  console.log(`🌐 Web server running on port ${PORT}`);
});

// ===================== SAFETY: LOG UNHANDLED ERRORS =====================
process.on("unhandledRejection", (err) => {
  console.error("UNHANDLED_REJECTION:", err);
});
process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT_EXCEPTION:", err);
});
