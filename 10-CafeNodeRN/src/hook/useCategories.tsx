import { useEffect, useState } from "react";
import cafeApi from "../api/cafeApi";
import { Categoria, CategoriesResponse } from "../interfaces/appInterfaces";

export const useCategories = () => {
  const [categories, setCategories] = useState<Categoria[]>([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const resp = await cafeApi.get<CategoriesResponse>('/categorias?limite=100');
    setCategories(resp.data.categorias);
    setIsLoading(false);
  };

  return {
    categories,
    isLoading,
  }
};
