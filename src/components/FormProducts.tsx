import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Categorias } from "../types";

export default function FormProducts() {

    const { data: categorias, isError } = useQuery<Categorias>({})

    const [imgSrc, setImgSrc] = useState("");

    return (
        <form >
            <fieldset>
                <div className="cont__camp">
                    <div className="camp__cont__img">
                        <img id='imagen' className="camp__img" src={imgSrc} alt="" />

                    </div>

                    <div className="camp__inputs">

                        <section className="camp__text">
                            <h3 className="camp__title">Añadir Producto</h3>
                        </section>
                        <div className="camp">
                            <label htmlFor="prod_descripcion">Nombre</label>
                            <input className="camp__txt" type="text" name="text" id="prod_descripcion" placeholder='Ej: Parlante stereo'

                            />
                        </div>
                        <div className="camp">
                            <label htmlFor="prod_precio_unitario">Precio unitario</label>
                            <input className="camp__txt" type="number" name="stock" id="prod_precio_unitario" placeholder='Ej: 152'

                            />
                        </div>

                        <div className="camp">
                            <label htmlFor="prod_stock">Stock</label>
                            <input className="camp__txt" type="number" name="text" id="prod_stock" placeholder='Ej: 563'

                            />
                        </div>

                        <div>
                            <label className="lb--selec" htmlFor="selectImg">Subir imagen</label>
                            <input
                                className="selec"
                                type="file"
                                name="photo"
                                id="selectImg"
                                accept="image/*"
                            />
                        </div>

                        <div>
                            <select
                                id='fk_cat_id'
                            >
                                {categorias && !isError ? (
                                    <>
                                        {categorias.map((categoria) => (
                                            <option key={categoria.cat_id} value={categoria.cat_id}>
                                                {categoria.cat_descripcion}
                                            </option>
                                        ))}
                                    </>
                                ) : (
                                    <p>Sin categorias disponibles</p>
                                )
                                }
                            </select>
                        </div>

                        <div className="camp camp__button">
                            <button className="button" type="submit">Registrar producto</button>
                        </div>

                    </div>
                </div>
            </fieldset>
        </form >
    );
}
