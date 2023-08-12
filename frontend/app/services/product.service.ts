import { api } from "../config/axios";

class ProductService {
  static async createBrand(data: any, token: string) {
    const res = await api.post("/rewards", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  static async getProducts<T>(token: string, query?: string) {
    const res = await api.get<T>(`/products?${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }

  static async getProductById<T>(id:string,token: string, query?: string) {
    const res = await api.get<T>(`/products/${id}?${query}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  }
}

export default ProductService;
