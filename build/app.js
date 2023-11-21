"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./src/routes");
const db_config_1 = __importDefault(require("./src/config/db.config"));
const app = (0, express_1.default)();
const PORT = 8012;
(0, db_config_1.default)();
app.use('/', routes_1.router);
app.get('/mytest', (req, res) => {
    res.json({ data: "A done" });
});
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
