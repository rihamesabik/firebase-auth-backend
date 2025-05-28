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
exports.ParcoursController = void 0;
const common_1 = require("@nestjs/common");
const parcours_service_1 = require("./parcours.service");
const create_parcours_dto_1 = require("./dto/create-parcours.dto");
const update_parcours_dto_1 = require("./dto/update-parcours.dto");
let ParcoursController = class ParcoursController {
    parcoursService;
    constructor(parcoursService) {
        this.parcoursService = parcoursService;
    }
    findAll() {
        return this.parcoursService.findAll();
    }
    findOne(id) {
        return this.parcoursService.findOne(id);
    }
    create(dto) {
        return this.parcoursService.create(dto);
    }
    update(id, dto) {
        return this.parcoursService.update(id, dto);
    }
    remove(id) {
        return this.parcoursService.remove(id);
    }
};
exports.ParcoursController = ParcoursController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParcoursController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ParcoursController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_parcours_dto_1.CreateParcoursDto]),
    __metadata("design:returntype", void 0)
], ParcoursController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_parcours_dto_1.UpdateParcoursDto]),
    __metadata("design:returntype", void 0)
], ParcoursController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ParcoursController.prototype, "remove", null);
exports.ParcoursController = ParcoursController = __decorate([
    (0, common_1.Controller)('parcours'),
    __metadata("design:paramtypes", [parcours_service_1.ParcoursService])
], ParcoursController);
//# sourceMappingURL=parcours.controller.js.map