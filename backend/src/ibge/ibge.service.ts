import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class IbgeService {
    private readonly baseUrl = 'https://servicodados.ibge.gov.br/api/v2/censos/nomes';

    async getNameTrend(name: string): Promise<any> {
        const response = await axios.get(`${this.baseUrl}/${name}`);
        return response.data;
    }

    async getNameTrendByLocation(name: string, uf: string): Promise<any> {
        const response = await axios.get(`${this.baseUrl}/${name}?localidade=${uf}`);
        return response.data;
    }

    async getTopNamesByLocation(uf: string): Promise<any> {
        const response = await axios.get(`${this.baseUrl}/ranking?localidades=${uf}`);
        return response.data;
    }

    async compareNames(name1: string, name2: string): Promise<any> {
        const response = await axios.get(`${this.baseUrl}/${name1}|${name2}`);
        return response.data;
    }
}
