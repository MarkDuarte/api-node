import { SpeficiationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { CreateSpecificationsController } from './createSpecificationsController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepository = new SpeficiationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
const createSpecificationController = new CreateSpecificationsController(
  createSpecificationUseCase
);

export { createSpecificationController };
