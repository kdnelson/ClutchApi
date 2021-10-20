"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var pong_1 = __importDefault(require("../controllers/pong"));
var router = express_1.default.Router();
router.get('/ping', pong_1.default.pongRequest);
module.exports = router;
