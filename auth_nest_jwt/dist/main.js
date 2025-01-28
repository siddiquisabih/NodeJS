"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', }, 'access-token')
        .setTitle('Auth APIs')
        .setDescription('Swagger API project')
        .setVersion('1.0')
        .addServer('http://localhost:3000/', 'Local environment')
        .addServer('https://192.168.150.110:3000/', 'remote')
        .addServer('https://production.yourapi.com/', 'Production')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map