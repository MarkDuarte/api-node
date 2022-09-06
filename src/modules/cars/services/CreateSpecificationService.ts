import { ISpecificationRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private speficiationsRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.speficiationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists!');
    }
    this.speficiationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
