"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParcoursModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const parcours_entity_1 = require("./parcours.entity");
const parcours_service_1 = require("./parcours.service");
const parcours_controller_1 = require("./parcours.controller");
let ParcoursModule = class ParcoursModule {
};
exports.ParcoursModule = ParcoursModule;
exports.ParcoursModule = ParcoursModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([parcours_entity_1.Parcours])],
        controllers: [parcours_controller_1.ParcoursController],
        providers: [parcours_service_1.ParcoursService],
        exports: [typeorm_1.TypeOrmModule],
    })
], ParcoursModule);
//# sourceMappingURL=parcours.module.js.map