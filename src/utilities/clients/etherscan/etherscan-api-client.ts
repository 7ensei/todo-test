import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';
import { ResponseDto } from './dto/response.dto';
import * as process from 'process';

@Injectable()
export class EtherscanApiClient {
    private readonly baseUrl = process.env.BASE_URL;
    private readonly paths = {
        api: '/api',
    };

    async show(block: number): Promise<ResponseDto | null> {
        try {
            const response: AxiosResponse<any> = await axios.get(
                this.baseUrl + this.paths.api,
                {
                    params: {
                        module: 'proxy',
                        action: 'eth_getBlockByNumber',
                        tag: (block >>> 0).toString(16),
                        boolean: true,
                        apiKey: process.env.API_KEY,
                    },
                },
            );
            return response.data;
        } catch (error) {
            return null;
        }
    }

    async last(): Promise<string> {
        try {
            const response: AxiosResponse<any> = await axios.get(
                this.baseUrl + this.paths.api,
                {
                    params: {
                        module: 'proxy',
                        action: 'eth_blockNumber',
                        apikey: process.env.API_KEY,
                    },
                },
            );
            return response.data.result;
        } catch (error) {
            return '';
        }
    }
}
