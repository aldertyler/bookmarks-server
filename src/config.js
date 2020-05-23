module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  API_TOKEN: process.env.API_TOKEN || "d0d1eb60-9643-11ea-bb37-0242ac130002",
  DB_URL:
    process.env.DB_URL || "postgresql://dunder_mifflin@localhost/bookmarks",
};
