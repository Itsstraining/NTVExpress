import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Express, ExpressDocument } from 'src/schemas/express.schema';

@Injectable()
export class ExpressService {
    constructor(@InjectModel(Express.name) private expressModel: Model<ExpressDocument>) {}

    async isExist(id: string): Promise<boolean> {
        const express = await this.expressModel.findOne({id: id});
        return express !=null;
    }

    async create(createExpress: Express): Promise<Express> {
        if(await this.isExist(createExpress.id)) {
            throw new Error('Express already exists');
        }

        if( !createExpress.id || !createExpress.name || !createExpress.title || !createExpress.content) {
            throw new Error('Express is not valid');
        }

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
