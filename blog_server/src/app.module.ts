import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpressController } from './controllers/express/express.controller';
import { ExpressModule } from './modules/express/express.module';
import { UserController } from './controllers/user/user.controller';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.nust0eu.mongodb.net/?retryWrites=true&w=majority'), ExpressModule],
  controllers: [AppController, ExpressController, UserController],
  providers: [AppService],
})
export class AppModule {}
