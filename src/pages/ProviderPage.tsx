import FormProducts from "../components/FormProducts";
import Products from "../components/Products";

export default function ProviderPage() {
    return (

        <main className="main-container">
            <div>
                <h2 className="main-container__title">Tus Productos</h2>
                <select name="" onChange={handleSelectChange}>
                    <option key={uuidv4()} value="0">Todos</option>
                    {categorias.map((categoria: Categorias) => (
                        <option key={uuidv4()} value={categoria.cat_id}>{categoria.cat_descripcion}</option>
                    ))
                    }
                </select>
            </div>
            <div className="main-container__grid">
                {productos.map((producto) => (
                    <ProductosComponent
                        key={uuidv4()}
                        producto={producto}
                        addToCart={null}

                    />
                ))
                }
            </div>
            <FormProducts/>

            <DetalleOrden
                proveedor_id={proveedor_id}
            />


        </main>

    );
}
