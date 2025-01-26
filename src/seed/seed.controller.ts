import { Controller, Get, HttpCode } from '@nestjs/common';
import { SeedService } from './seed.service';
import { HttpStatus } from '@nestjs/common/enums';
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async runSeed() {
    return await this.seedService.runSeed();
  }
}
