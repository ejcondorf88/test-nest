import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { envConfig } from './common/config/env-config';
import { joinSchemaValidation } from './common/config/join-schema-validation';
@Module({
  imports: [
    ConfigModule.forRoot({
      load : [envConfig],
      validationSchema: joinSchemaValidation
      
    }
      
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(process.env.MONGODB || 'mongodb://mongo:hMRSirHYHKROSPZGIjqoFgGDqYmNHPWX@mongodb.railway.internal:27017'),
    PokemonModule,
    CommonModule,
    SeedModule
  ],  
  controllers: [],
  providers: [],
  
})
export class AppModule {
  constructor() {
    console.log(process.env.MONGODB);
  }
}
