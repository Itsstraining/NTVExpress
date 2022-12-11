import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Express, ExpressDocument } from 'src/schemas/express.schema';

@Injectable()
export class ExpressService {
    constructor(@InjectModel(Express.name) private expressModel: Model<ExpressDocument>) {}


    async create(createExpress: Express): Promise<Express> {
        const express = new this.expressModel(createExpress);
        return express.save();
    }

    async findAll(): Promise<Express[]> {
        const express = await this.expressModel.find();
        return express;
    }

    async findOne(id: string): Promise<Express>{
        // const express = await this.expressModel.findOne({id: id});
        const express = await this.expressModel.findOne({_id: id});
        if(!express) {
            throw new Error('Express not found');
        }
        return express;
    }

    async update(id: string, updateExpress: Express): Promise<Express> {
        const express = await this.expressModel.findByIdAndUpdate(id, updateExpress);
        return express;
    }

    async delete(id: string): Promise<Express> {
        const express = await this.expressModel.findByIdAndDelete(id);
        return express;
    }

    
}
