const embargo = new Date(+(new Date()) + 1000 * 60 * 60 * 36);
require("fs").writeFileSync("defaultEmbargoTime.js", `export default "${embargo.toJSON()}";\n`);
