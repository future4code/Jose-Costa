import { BaseDatabase } from "../../data/BaseDatabase";
import { Recipe } from "../../entitities/Recipe";
import { CustomError } from "../../services/CustomError";
import { IRecipeRepository } from "../IRecipeRepository";

export class RecipeRepository implements IRecipeRepository {
    constructor(private repo?: string) {
        this.repo = "cookenu_recipes";
    }

    async find(column: string, where: string): Promise<Recipe[]> {
        try {
            const response = await BaseDatabase.connection(this.repo).select().where(column, "=", where);
            return response;
        } catch (err: any) {
            throw new CustomError(500, err.sqlMessage);
        }
    }

    async create(recipe: Recipe): Promise<void> {
        try {
            await BaseDatabase.connection(this.repo).insert(recipe);
        } catch (err: any) {
            throw new CustomError(500, err.sqlMessage);
        }
    }
}