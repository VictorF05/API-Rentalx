import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./listSpecificationsController";
import { ListSpecificationsUseCase } from "./listSpecificationsUseCase";

const specifcationsRepository = SpecificationsRepository.getInstance();

const listSpecificationsUseCase = new ListSpecificationsUseCase(
    specifcationsRepository
);

const listSpecificationsController = new ListSpecificationsController(
    listSpecificationsUseCase
);

export { listSpecificationsController };
