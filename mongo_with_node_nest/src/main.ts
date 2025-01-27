import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const options = new DocumentBuilder()
    .setTitle('Todo APIs')
    .setDescription('These are todo app apis')
    .setVersion('1.0')
    .addServer('http://localhost:3000/', 'Local environment')
    .addServer('http://192.168.150.110:3000/', 'Local remote environment')
    .addServer('https://staging.yourapi.com/', 'Staging')
    .addServer('https://production.yourapi.com/', 'Production')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
