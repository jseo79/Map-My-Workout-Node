"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = __importDefault(require("../../repository"));
class UserModel {
    static async addUser(user) {
        try {
            return (0, repository_1.default)('users').insert(user);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
    }
}
exports.default = UserModel;
//# sourceMappingURL=user-model.js.map