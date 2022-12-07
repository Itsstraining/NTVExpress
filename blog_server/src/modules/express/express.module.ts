import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpressController } from 'src/controllers/express/express.controller';
import { Express, ExpressSchema } from 'src/schemas/express.schema';
import { ExpressService } from 'src/services/express/express.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Express.name, schema: ExpressSchema }])],
    providers: [ExpressService],
    exports: [ExpressService],
})
export class ExpressModule {}
