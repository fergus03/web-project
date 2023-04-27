// models/DietCategory.ts
export interface DietCategory {
  id: number;
  name: string;
}

// models/MealTime.ts
export interface MealTime {
  id: number;
  name: string;
}

// models/Meals.ts
export interface Meals {
  id: number;
  diet_category: DietCategory;
  meal_time: MealTime;
  description: string;

  instructions:string;

  ingredients:string;
  image_url: string;
  title: string;
}

// models/SkinType.ts
export interface SkinType {
  id: number;
  name: string;
}
export interface ProductType {
  id: number;
  name: string;
}


// models/SkincareProduct.ts
export interface SkincareProduct {
  id: number;
  skin_type: SkinType;
  title: string;
  description: string;
  image_link: string;
  link: string;

  product_type: ProductType;
}

// models/SportVideo.ts
export interface SportVideo {
  id: number;
  title: string;
  link: string;
  image: string;
}
