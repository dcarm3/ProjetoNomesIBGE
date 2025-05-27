"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IbgeService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
let IbgeService = class IbgeService {
    constructor() {
        this.baseUrl = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes';
    }
    async getNameTrend(name) {
        const response = await axios_1.default.get(`${this.baseUrl}/${name}`);
        return response.data;
    }
    async getNameTrendByLocation(name, uf) {
        const response = await axios_1.default.get(`${this.baseUrl}/${name}?localidade=${uf}`);
        return response.data;
    }
    async getTopNamesByLocation(uf) {
        const response = await axios_1.default.get(`${this.baseUrl}/ranking?localidades=${uf}`);
        return response.data;
    }
    async compareNames(name1, name2) {
        const response = await axios_1.default.get(`${this.baseUrl}/${name1}|${name2}`);
        return response.data;
    }
};
exports.IbgeService = IbgeService;
exports.IbgeService = IbgeService = __decorate([
    (0, common_1.Injectable)()
], IbgeService);
