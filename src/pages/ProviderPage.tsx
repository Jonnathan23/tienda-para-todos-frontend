import { useQuery } from "@tanstack/react-query";
import FormProducts from "../components/FormProducts";
import { Categorias, Productos } from "../types";
import DetalleOrden from "../components/DetalleOrden";
import { useAppStore } from "../store/useAppStore";
import Products from "../components/Products";

export default function ProviderPage() {

    const { provider } = useAppStore()

    const { data: categorias } = useQuery<Categorias>({})

    const { data: productos } = useQuery<Productos>({})
    return (

        <main className="main-container">
            <div>
                <h2 className="main-container__title">Tus Productos</h2>
                <select name="" onChange={() => { }}>
                    <option value="0">Todos</option>
                    {categorias &&
                        <>
                            {categorias.map((categoria) => (
                                <option key={categoria.cat_id} value={categoria.cat_id}>{categoria.cat_descripcion}</option>
                            ))
                            }
                        </>
                    }
                </select>
            </div>
            <div className="main-container__grid">
                {productos ? (
                    <>
                        {productos.map((producto) => (
                            <Products
                                producto={producto}
                            />
                        ))
                        }
                    </>
                ) : (
                    <p>Sin productos</p>
                )}

            </div>
            <FormProducts />

            <DetalleOrden />


        </main>

    );
}
