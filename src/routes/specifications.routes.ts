import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";

const specificationsRoutes = Router();

const specifcationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createSpecificationUseCase = new CreateSpecificationUseCase(
        specifcationsRepository
    );

    createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
});

export { specificationsRoutes };
