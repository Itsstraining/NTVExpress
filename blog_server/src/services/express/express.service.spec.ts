import { Test, TestingModule } from '@nestjs/testing';
import { ExpressService } from './express.service';

describe('ExpressService', () => {
  let service: ExpressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExpressService],
    }).compile();

    service = module.get<ExpressService>(ExpressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
