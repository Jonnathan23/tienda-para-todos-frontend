import { useQuery } from "@tanstack/react-query";
import { Categorias, Productos } from "../types";
import Products from "../components/Products";

export default function ComponentName() {

    const { data: productos, isError: productosError } = useQuery<Productos>({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3000/api/products")
            return response.json()
        }
    })

    const { data: categorias, isError: categoriasError } = useQuery<Categorias>({
        queryKey: ["categories"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3000/api/categories")
            return response.json()
        }
    })

    
    return (
        <main className="main-container">
            <div>
                <h2 className="main-container__title">Nuestros Productos</h2>
                <div>
                    <select name="" id="" >
                        <option value="0">Todos</option>
                        {categorias && !categoriasError &&
                            <>
                                {categorias.map((categoria) => (
                                    <option key={categoria.cat_id} value={categoria.cat_id} >{categoria.cat_descripcion}</option>
                                ))
                                }
                            </>
                        }
                    </select>
                </div>
            </div>
            {productos && !productosError ?
                (
                    <div className="main-container__grid">
                        {productos.map((producto) => (
                            <Products
                                key={producto.prod_id}
                                producto={producto}
                            />
                        ))
                        }
                    </div>
                ):(
                    <p>Sin productos</p>
                )
            }
        </main>
    );
}
