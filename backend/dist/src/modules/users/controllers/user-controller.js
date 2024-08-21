"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user-model"));
class UserController {
    static async addUser(req, res) {
        try {
            await user_model_1.default.addUser(req.body);
            return res.send(req.body);
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = UserController;
//# sourceMappingURL=user-controller.js.map