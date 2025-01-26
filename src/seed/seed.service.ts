import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokemonResponse } from './inteface/pokemon-response';
import { PokemonService } from '../pokemon/pokemon.service';
import { AxiosAdapter } from 'src/common/adapter/axios-adapter';
@Injectable()
export class SeedService {
    private readonly axios:AxiosInstance=axios

    constructor(
        private readonly pokemonService:PokemonService,
        private readonly http:AxiosAdapter,
    ) {}
    async runSeed(){
        const data = await this.http.get<PokemonResponse>('https://pokeapi.co/api/v2/pokemon?limit=10');
        data.results.forEach(pokemeon=>{
            const segments=pokemeon.url.split('/');
            const no=+segments[segments.length-2];
            this.pokemonService.create({
                no,
                name:pokemeon.name
            })
            
        })
        return 'ok'
        
    }

}
