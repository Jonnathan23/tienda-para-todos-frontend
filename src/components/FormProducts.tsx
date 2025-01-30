import { useMutation, useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { Categorias, DraftProducto } from "../types";
import { useForm } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

export default function FormProducts() {

    const { data: categorias, isError } = useQuery<Categorias>({})
    const defaulImage = '/img/selectImage.jpg'
    const [imgSrc, setImgSrc] = useState(defaulImage);

    const initialValues: DraftProducto = { prod_descripcion: '', prod_precio_unitario: 0, prod_stock: 0, fk_cat_id: 0, imagen: '', fk_pro_provid: 0 }
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ defaultValues: initialValues });

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target;

        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload = () => {
                setImgSrc(reader.result as string);


            }
        } else {
            setImgSrc(defaulImage);
        }
    }

    const { mutate } = useMutation({})

    const handleSubmitProduct = () => console.log('submit')

    return (
        <form onSubmit={handleSubmit(handleSubmitProduct)}>
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
                            <input className="camp__txt" type="text" id="prod_descripcion" placeholder='Ej: Parlante stereo'
                                {...register("prod_descripcion", { required: "El nombre es requerido" })}
                            />
                            {errors.prod_descripcion && <span><ErrorMessage>{errors.prod_descripcion.message}</ErrorMessage></span>}
                        </div>
                        <div className="camp">
                            <label htmlFor="prod_precio_unitario">Precio unitario</label>
                            <input className="camp__txt" type="number" id="prod_precio_unitario" placeholder='Ej: 152'
                                {...register("prod_precio_unitario", { required: "El precio es requerido" })}
                            />
                            {errors.prod_precio_unitario && <span><ErrorMessage>{errors.prod_precio_unitario.message}</ErrorMessage></span>}
                        </div>

                        <div className="camp">
                            <label htmlFor="prod_stock">Stock</label>
                            <input className="camp__txt" type="number" id="prod_stock" placeholder='Ej: 563'
                                {...register("prod_stock", { required: "El stock es requerido" })}
                            />
                        </div>

                        <div>
                            <label className="lb--selec" htmlFor="selectImg">Subir imagen</label>
                            <input
                                className="selec" type="file" id="selectImg" accept="image/*" onChange={handleImageChange}
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
