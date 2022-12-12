import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user/user.controller';
import { UserService } from 'src/services/user/user.service';
import { MongoModule } from '../mongoose.module';

@Module({
    imports: [
        MongoModule
    ],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})

export class UserModule {}
