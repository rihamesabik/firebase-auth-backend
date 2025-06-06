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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parcours = void 0;
const typeorm_1 = require("typeorm");
const lecon_entity_1 = require("../lecon/lecon.entity");
const quiz_entity_1 = require("../quiz/quiz.entity");
const module_entity_1 = require("../module/module.entity");
let Parcours = class Parcours {
    id;
    nom;
    langue;
    niveau;
    lecons;
    quizzes;
    modules;
};
exports.Parcours = Parcours;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Parcours.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parcours.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parcours.prototype, "langue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Parcours.prototype, "niveau", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lecon_entity_1.Lecon, (lecon) => lecon.parcours, { cascade: true }),
    __metadata("design:type", Array)
], Parcours.prototype, "lecons", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => quiz_entity_1.Quiz, (quiz) => quiz.parcours, { cascade: true }),
    __metadata("design:type", Array)
], Parcours.prototype, "quizzes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => module_entity_1.Module, (module) => module.parcours, { cascade: true }),
    __metadata("design:type", Array)
], Parcours.prototype, "modules", void 0);
exports.Parcours = Parcours = __decorate([
    (0, typeorm_1.Entity)()
], Parcours);
//# sourceMappingURL=parcours.entity.js.map