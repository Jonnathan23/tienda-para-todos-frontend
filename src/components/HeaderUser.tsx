import { useMemo } from "react";
import { useAppStore } from "../store/useAppStore";
import { Link } from "react-router-dom";

export default function HeaderUser() {


    const { cart, decreseQuantity, increseQuantity, removeFromCart, clearCart } = useAppStore();
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.cantidad * item.prod_precio_unitario), 0), [cart])
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    return (
        <>
            <header className="header">
                <div className="cont--h">
                    <div className="cont--header">
                        <div className="title">
                            <a href="index.html">
                                <h1>Tienda Para Todos</h1>
                            </a>
                        </div>
                        <nav className={"cont__nav__a"}>

                            <div className="carrito">
                                <img src="/img/carrito.png" alt="carrito" />

                                <div id="carrito">
                                    {isEmpty ? (<p className="cart__empty-message">El carrito esta vacio</p>) : (
                                        <>
                                            <table className="cart__table">
                                                <thead>
                                                    <tr className="cart__header-row">
                                                        <th className="" >Imagen</th>
                                                        <th className="" >Nombre</th>
                                                        <th className="" >Precio</th>
                                                        <th className="" >Cantidad</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {cart.map(product => (
                                                        <tr className="cart__row" key={product.prod_id}>
                                                            <td className="cart__image-cell">
                                                                <img className="cart__image" src={product.imagen} alt="imagen_producto" />
                                                            </td>
                                                            <td className="cart__name">{product.prod_descripcion}</td>
                                                            <td className="cart__price">{product.prod_precio_unitario}</td>
                                                            <td className="cart__quantity">
                                                                <button className="cart__button cart__button--decrease" type="button" onClick={() => decreseQuantity(product.prod_id)}>
                                                                    -
                                                                </button>
                                                                {product.cantidad}

                                                                <button type="button" className="cart__button cart__button--increase" onClick={() => increseQuantity(product.prod_id)}>
                                                                    +
                                                                </button>
                                                            </td>
                                                            <td className="cart__remove-cell">
                                                                <button className="cart__button cart__button--remove" type="button" onClick={() => removeFromCart(product.prod_id)}>
                                                                    X
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                    }
                                                </tbody>
                                            </table>

                                            <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                                        </>
                                    )}
                                    <div>
                                        {!isEmpty && (
                                            <>
                                                <button className="cart__button__total" onClick={clearCart}>Vaciar Carrito</button>
                                                <button className="cart__button__total bt__buy " onClick={() => { }}>Comprar</button>
                                            </>
                                        )}

                                    </div>
                                </div>
                            </div>

                            <nav>
                                <Link to={'/'} className="nav__a">Cerrar Sesion</Link>
                            </nav>

                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}
