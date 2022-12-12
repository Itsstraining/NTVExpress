import { HttpException, HttpStatus, Injectable, Post } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        // @InjectModel(Post.name) private postModel: Model<Document>,
    ) { }

    async createUser(user: User) {
        try {
            if(!user.email || !user.name) {
                throw new HttpException(
                    'Please fill all the information',
                    HttpStatus.BAD_REQUEST,
                );
            }

            const isExits = await this.userModel.findOne({email: user.email});

            if (!isExits) {
                let createdUser = new this.userModel(user);
                let _user = await createdUser.save();
                return _user;
            } else {
                throw new HttpException('Email already exits', HttpStatus.BAD_REQUEST);
            }
        } catch (error) {
            return new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async findAllUser() {
        return await this.userModel.find().exec();
    }

    async findUserById(id: string) {
        try {
            const user = await this.userModel.findById(id);
            if ( !user ) {
                throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
            }
            return user;
        } catch (error) {
            return new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    async updateUser(id: string, user: User) {
        try {
            const updateUser = await this.userModel.findByIdAndUpdate( id, user, {new:true});
            if ( !updateUser ) {
                throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
            }
            return updateUser;
        } catch (error) {
            return new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}
