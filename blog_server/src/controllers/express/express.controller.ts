import { Controller, Post, Body, Get, Query, Param } from '@nestjs/common';
import { ExpressService } from 'src/services/express/express.service';
import { Express } from 'src/schemas/express.schema';

@Controller('express')
export class ExpressController {

    constructor(private expressService: ExpressService) {}

    @Post()
    async create(@Body() createExpress: Express) {
        try {
            await this.expressService.create(createExpress);

            return {
                status: 200,
                message: 'Create express successfully'
            };
        } catch (error) {
            return{
                status: 400,
                message: error.message
            };
        }
    }

    @Get("all")
    async findAll() {
        try {
            const express = await this.expressService.findAll();

            return {
                status: 200,
                message: 'Get all express successfully',
                data: express
            };
        } catch (error) {
            return {
                status: 400,
                message: error.message
            };
        }
    }

    @Get()
    async findOne(@Query('id') id: string) {
        try{
            const express = await this.expressService.findOne(id);
            return {
                status: 200,
                message: 'Get by one express successfully',
                express: express
            };
        }catch (error){
            return {
                status: 400,
                message: error.message
            };
        }
    }
}
