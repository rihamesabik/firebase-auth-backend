"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("./user/user.entity");
const parcours_entity_1 = require("./parcours/parcours.entity");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const parcours_module_1 = require("./parcours/parcours.module");
const lecon_module_1 = require("./lecon/lecon.module");
const lecon_entity_1 = require("./lecon/lecon.entity");
const quiz_module_1 = require("./quiz/quiz.module");
const quiz_entity_1 = require("./quiz/quiz.entity");
const upload_module_1 = require("./upload/upload.module");
const module_entity_1 = require("./module/module.entity");
const gpt_module_1 = require("./gpt/gpt.module");
const whisper_module_1 = require("./whisper/whisper.module");
const voicedata_module_1 = require("./voicedata/voicedata.module");
const leitner_module_1 = require("./leitner/leitner.module");
const leitner_module_2 = require("./leitner2/leitner.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT || '5432', 10),
                username: process.env.DB_USERNAME || 'postgres',
                password: process.env.DB_PASSWORD || 'postgres',
                database: process.env.DB_NAME || 'langua360',
                entities: [user_entity_1.User, parcours_entity_1.Parcours, lecon_entity_1.Lecon, quiz_entity_1.Quiz, module_entity_1.Module],
                synchronize: true,
                logging: true,
            }),
            user_module_1.UserModule,
            parcours_module_1.ParcoursModule,
            lecon_module_1.LeconModule,
            quiz_module_1.QuizModule,
            upload_module_1.UploadModule,
            gpt_module_1.GptModule,
            whisper_module_1.WhisperModule,
            voicedata_module_1.VoicedataModule,
            leitner_module_1.LeitnerModule,
            leitner_module_2.LeitnerModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map