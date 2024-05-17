import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Device } from '../device/entities/device.entity';
import { Injectable } from '@nestjs/common';
import { Room } from '../room/entities/room.entity';
import { Unit } from '../unit/entities/unit.entity';

@Injectable()
export class MainConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'better-sqlite3',
            database: 'db.sqlite',
            entities: [Room, Unit, Device],
            synchronize: true,
            autoLoadEntities: true,
        };
    }
}
