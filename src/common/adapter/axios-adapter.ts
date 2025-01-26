


import axios from 'axios';
import { HttpAdapter } from '../interface/http-adapter';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AxiosAdapter implements HttpAdapter{
    async get<T>(url: string): Promise<T> {
        const {data}=await axios.get(url);
        return data;
    }
}