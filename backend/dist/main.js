"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const workout_routes_1 = __importDefault(require("./src/modules/workout/routes/workout-routes"));
const user_routes_1 = __importDefault(require("./src/modules/users/routes/user-routes"));
const app = (0, express_1.default)();
const port = 5001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', user_routes_1.default);
app.use('/api', workout_routes_1.default);
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
console.log(51231231234);
//# sourceMappingURL=main.js.map