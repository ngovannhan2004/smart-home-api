import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MainConfigService } from './main-config.service';

@Module({
    imports: [
        ConfigModule.forRoot({}),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useClass: MainConfigService,
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
