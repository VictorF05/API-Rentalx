import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
    constructor(private specifcationsRepository: ISpecificationsRepository) {}

    execute(): Specification[] {
        const specifications = this.specifcationsRepository.list();

        return specifications;
    }
}

export { ListSpecificationsUseCase };
