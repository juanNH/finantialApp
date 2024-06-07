"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcraService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const https = __importStar(require("https"));
const cache_manager_1 = require("@nestjs/cache-manager");
const helpers_1 = require("../common/helpers");
const parseVariablesToObj_1 = require("./utils/parseVariablesToObj");
let BcraService = class BcraService {
    constructor(httpService, cacheManager) {
        this.httpService = httpService;
        this.cacheManager = cacheManager;
        this.httpService.axiosRef.defaults.httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });
    }
    async findAll() {
        try {
            const key = 'bcraVariables';
            const variablesCached = await this.cacheManager.get(key);
            if (variablesCached) {
                return JSON.parse(variablesCached);
            }
            const { data } = await this.httpService.axiosRef.get('https://api.bcra.gob.ar/estadisticas/v1/PrincipalesVariables');
            await (0, helpers_1.sleep)(3000);
            const ttl = 1000 * 60 * 5;
            const jsonArrayString = JSON.stringify(data.results);
            await this.cacheManager.set(key, jsonArrayString, ttl);
            return data.results;
        }
        catch (error) {
            console.log(error);
        }
    }
    async findAllFormated() {
        const data = await this.findAll();
        const variablesFormatted = (0, parseVariablesToObj_1.parseVariablesToObj)(data);
        return variablesFormatted;
    }
    async findById(bcraVariableDto) {
        const data = await this.findAll();
        return data.filter(item => item.idVariable === bcraVariableDto.idVariable)[0] || null;
    }
};
BcraService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [axios_1.HttpService, Object])
], BcraService);
exports.BcraService = BcraService;
//# sourceMappingURL=bcra.service.js.map