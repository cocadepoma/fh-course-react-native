
import React, { createContext, useEffect, useState } from 'react';
import cafeApi from '../api/cafeApi';
import { Producto, ProductsResponse } from '../interfaces/appInterfaces';

type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProduct: (categoryId: string, productName: string) => Promise<Producto>;
  updateProduct: (categoryId: string, productName: string, productId: string) => Promise<void>;
  deleteProduct: (id: string) => Promise<Producto>;
  loadProductById: (id: string) => Promise<Producto>;
  uploadImage: (data: any, id: string) => Promise<boolean>;
};

interface ImagePicker {
  base64: string;
  duration: number;
  fileName: string;
  fileSize: number;
  height: number;
  type: string;
  uri: string;
  width: number;
}
export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Producto[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const orderProducts = (products: Producto[]) => {
    return Array.from(products).sort((a, b) => {
      return a.nombre.localeCompare(b.nombre);
    });
  };

  const loadProducts = async () => {
    try {
      const resp = await cafeApi.get<ProductsResponse>('productos?limite=50');
      const orderedProducts = orderProducts(resp.data.productos);
      setProducts(orderedProducts);
    } catch (error: any) {
      throw new Error(error)
    }
  };

  const addProduct = async (categoryId: string, productName: string): Promise<Producto> => {
    try {
      const resp = await cafeApi.post<Producto>('/productos', {
        nombre: productName,
        categoria: categoryId
      });
      const orderedProducts = orderProducts([...products, resp.data]);
      setProducts(orderedProducts);

      return resp.data;

    } catch (error: any) {
      throw new Error(error)
    }
  };

  const updateProduct = async (categoryId: string, productName: string, productId: string) => {
    try {
      const resp = await cafeApi.put<Producto>(`/productos/${productId}`, {
        nombre: productName,
        categoria: categoryId
      });
      const newProducts = products.map((prod) =>
        prod._id === resp.data._id
          ? resp.data
          : prod
      );
      const orderedProducts = orderProducts(newProducts);

      setProducts(orderedProducts);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const deleteProduct = async (id: string): Promise<Producto> => {
    try {
      const resp = await cafeApi.delete<Producto>(`/productos/${id}`);

      const filterProducts = products.filter((prod) => prod._id !== id);
      const orderedProducts = orderProducts(filterProducts);
      setProducts(orderedProducts);
      return resp.data;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const loadProductById = async (id: string): Promise<Producto> => {
    try {
      const resp = await cafeApi.get<Producto>(`productos/${id}`);
      return resp.data;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const uploadImage = async (data: ImagePicker, id: string) => {
    const fileToUpload = {
      uri: data.uri,
      type: data.type,
      name: data.fileName
    };
    const formData = new FormData();
    formData.append('archivo', fileToUpload);

    try {
      await cafeApi.put<Producto>(`/uploads/productos/${id}`, formData);
      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <ProductsContext.Provider value={{
      products,
      loadProducts,
      addProduct,
      updateProduct,
      deleteProduct,
      loadProductById,
      uploadImage,
    }}>
      {children}
    </ProductsContext.Provider>
  );
};