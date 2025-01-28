import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', }, 'access-token')
    .setTitle('Auth APIs')
    .setDescription('Swagger API project')
    .setVersion('1.0')
    .addServer('http://localhost:3000/', 'Local environment')
    .addServer('https://192.168.150.110:3000/', 'remote')
    .addServer('https://production.yourapi.com/', 'Production')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
