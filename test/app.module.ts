import { Module } from "@nestjs/common";
import { AppController } from "src/app.controller";
import { AppService } from "src/app.service";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

Module({
    imports : [
        ConfigModule.forRoot({ isGlobal : true}),
        TypeOrmModule.forRoot({
            type : 'mysql',
            host : process.env.DB_HOST,
            port : +process.env.DB_PORT,
            username : process.env.DE_USER,
            password : process.env.DB_PASSWORD,
            database : process.env.DB_NAME,
            logging : true,
            synchronize : true,
            autoLoadEntities : true,
            entities : [__dirname + '/**/*.entity{.ts , .js}',]
        }),
    ],
    controllers : [AppController],
    providers : [AppService],
})

export class AppMoule{}