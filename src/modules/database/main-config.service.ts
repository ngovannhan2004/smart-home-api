import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Device } from '../device/entities/device.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MainConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'better-sqlite3',
            database: 'db.sqlite',
            entities: [Device],
            synchronize: true,
            autoLoadEntities: true,
        };
    }
}
