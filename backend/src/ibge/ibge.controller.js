"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IbgeController = void 0;
const common_1 = require("@nestjs/common");
const ibge_service_1 = require("./ibge.service");
let IbgeController = class IbgeController {
    constructor(ibgeService) {
        this.ibgeService = ibgeService;
    }
    getNameTrend(name) {
        return this.ibgeService.getNameTrend(name);
    }
    getNameTrendByLocation(name, uf) {
        return this.ibgeService.getNameTrendByLocation(name, uf);
    }
    getTopNamesByLocation(uf) {
        return this.ibgeService.getTopNamesByLocation(uf);
    }
    compareNames(name1, name2) {
        return this.ibgeService.compareNames(name1, name2);
    }
};
exports.IbgeController = IbgeController;
__decorate([
    (0, common_1.Get)('name-trend'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IbgeController.prototype, "getNameTrend", null);
__decorate([
    (0, common_1.Get)('name-trend-location'),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Query)('uf')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], IbgeController.prototype, "getNameTrendByLocation", null);
__decorate([
    (0, common_1.Get)('top-names'),
    __param(0, (0, common_1.Query)('uf')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IbgeController.prototype, "getTopNamesByLocation", null);
__decorate([
    (0, common_1.Get)('compare-names'),
    __param(0, (0, common_1.Query)('name1')),
    __param(1, (0, common_1.Query)('name2')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], IbgeController.prototype, "compareNames", null);
exports.IbgeController = IbgeController = __decorate([
    (0, common_1.Controller)('ibge'),
    __metadata("design:paramtypes", [ibge_service_1.IbgeService])
], IbgeController);
