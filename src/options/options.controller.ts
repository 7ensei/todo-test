import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OptionsService } from './options.service';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';

@Controller('options')
export class OptionsController {
    constructor(private readonly optionsService: OptionsService) {
    }

    @Post()
    async create(@Body() createOptionDto: CreateOptionDto) {
        return await this.optionsService.create(createOptionDto);
    }

    @Get(':name')
    async findByName(@Param('name') name: string) {
        return await this.optionsService.findByName(name);
    }

    @Patch(':name')
    async update(@Param('name') name: string, @Body() updateOptionDto: UpdateOptionDto) {
        await this.optionsService.update(name, updateOptionDto);
    }

    @Delete(':name')
    async remove(@Param('name') name: string) {
        await this.optionsService.remove(name);
    }
}
