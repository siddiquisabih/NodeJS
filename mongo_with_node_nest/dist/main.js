"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Todo APIs')
        .setDescription('These are todo app apis')
        .setVersion('1.0')
        .addServer('http://localhost:3000/', 'Local environment')
        .addServer('http://192.168.150.110:3000/', 'Local remote environment')
        .addServer('https://staging.yourapi.com/', 'Staging')
        .addServer('https://production.yourapi.com/', 'Production')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map