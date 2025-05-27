import { Controller, Get, Post, Query } from '@nestjs/common';
import { IbgeService } from './ibge.service';

@Controller('ibge')
export class IbgeController {
    constructor(private readonly ibgeService: IbgeService) { }

    @Get('name-trend')
    getNameTrend(@Query('name') name: string) {
        return this.ibgeService.getNameTrend(name);
    }

    @Get('name-trend-location')
    getNameTrendByLocation(@Query('name') name: string, @Query('uf') uf: string) {
        return this.ibgeService.getNameTrendByLocation(name, uf);
    }

    @Get('top-names')
    getTopNamesByLocation(@Query('uf') uf: string) {
        return this.ibgeService.getTopNamesByLocation(uf);
    }

    @Get('compare-names')
    compareNames(@Query('name1') name1: string, @Query('name2') name2: string) {
        return this.ibgeService.compareNames(name1, name2);
    }
}
