import { create } from "zustand";

interface RegisterModel {
  fName: string;
  lName: string;
  email: string;
  password: string;
  address: string;
  agree: boolean;
}

interface WholeModel {
  register: RegisterModel | null;
  setRegister: (reg: RegisterModel) => void;
}

export const useStoreRegister = create<WholeModel>((set) => ({
  register: null,
  setRegister: (reg) => set({ register: reg }),
}));

interface MealsModel {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

interface StoreModel {
  meals: MealsModel[];
  setMeals: (meal: MealsModel[]) => void;
}

export const useStoreMeals = create<StoreModel>((set) => ({
  meals: [],
  setMeals: (meal) => set({ meals: meal }),
}));
