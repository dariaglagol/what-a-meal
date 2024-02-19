export type Recipe = {
  description: string;
  sections: any[];
  tags: any[];
  thumbnail_url: string;
  name: string;
  id: string;
};

export type Recipes = Recipe[];
