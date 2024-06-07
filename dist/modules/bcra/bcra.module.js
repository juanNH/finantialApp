"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcraModule = void 0;
const common_1 = require("@nestjs/common");
const bcra_service_1 = require("./bcra.service");
const bcra_resolver_1 = require("./bcra.resolver");
const axios_1 = require("@nestjs/axios");
const bcra_controller_1 = require("./bcra.controller");
let BcraModule = class BcraModule {
};
BcraModule = __decorate([
    (0, common_1.Module)({
        controllers: [bcra_controller_1.BcraController],
        imports: [axios_1.HttpModule],
        providers: [bcra_resolver_1.BcraResolver, bcra_service_1.BcraService]
    })
], BcraModule);
exports.BcraModule = BcraModule;
//# sourceMappingURL=bcra.module.js.map