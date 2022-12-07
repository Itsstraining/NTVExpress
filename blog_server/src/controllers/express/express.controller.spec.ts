import { Test, TestingModule } from '@nestjs/testing';
import { ExpressController } from './express.controller';

describe('ExpressController', () => {
  let controller: ExpressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpressController],
    }).compile();

    controller = module.get<ExpressController>(ExpressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
