require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const router = require("./route").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://www.fastcura.com")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();