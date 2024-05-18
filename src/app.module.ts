import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeviceModule } from './modules/device/device.module';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from './modules/room/room.module';
import { UnitModule } from './modules/unit/unit.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
        }),
        DeviceModule,
        DatabaseModule,
        RoomModule,
        UnitModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
