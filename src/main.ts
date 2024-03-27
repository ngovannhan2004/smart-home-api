import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';

const FOLDER_DATABASE = './database';
if (!fs.existsSync(FOLDER_DATABASE)) {
    fs.mkdirSync(FOLDER_DATABASE);
}
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.enableCors();
    const config = new DocumentBuilder()
        .setTitle('SmartHome API')
        .setDescription('The SmartHome API description')
        .setVersion('1.0')
        .addTag('smart-home')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}

bootstrap();
