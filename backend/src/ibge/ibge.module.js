"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IbgeModule = void 0;
const common_1 = require("@nestjs/common");
const ibge_service_1 = require("./ibge.service");
const ibge_controller_1 = require("./ibge.controller");
let IbgeModule = class IbgeModule {
};
exports.IbgeModule = IbgeModule;
exports.IbgeModule = IbgeModule = __decorate([
    (0, common_1.Module)({
        providers: [ibge_service_1.IbgeService],
        controllers: [ibge_controller_1.IbgeController]
    })
], IbgeModule);
