import { useQuery } from "@tanstack/react-query";
import { GetOrderRequest } from "../types";

export default function DetalleOrden() {

    const { data: detalleOrden } = useQuery<GetOrderRequest>({});

    return (
        <>
            <h3>Detalle de ventas</h3>           

            {detalleOrden ? (
                <table className="algorithm__table">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio unitario</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody className="table__body">

                        {detalleOrden.productos_vendidos.map(producto => (
                            <tr key={producto.prod_id}>
                                <td>{producto.prod_descripcion}</td>
                                <td>{producto.prod_precio_unitario}</td>
                                <td>{producto.detalle_cantidad}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            ) : (
                <p>Sin productos vendidos aun</p>
            )}


        </>
    );
}
