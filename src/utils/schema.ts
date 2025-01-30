import { number, object, string } from "valibot";


export const ClientesSchema = object({
    cli_cedula: string(),
    cli_nombre: string(),
    cli_apellido: string(),
    cli_correo: string(),
    cli_celular: string(),
    cli_direccion: string(),
    cli_contrasenia: string(),
})

export const CategoriasSchema = object({
    cat_id: number(),
    cat_descripcion: string(),
})

export const ProveedoresSchema = object({
    prov_id: number(),
    prov_nombre: string(),
    prov_numero: string(),
    prov_correo: string(),
    prov_contrasenia: string(),
    prov_direccion: string(),
})

export const ProductosSchema = object({
    prod_id: number(),
    prod_descripcion: string(),
    prod_precio_unitario: number(),
    prod_stock: number(),
    fk_cat_id: number(),
    imagen: string(),
    fk_pro_provid: number(),
})

export const Ordenes_CliSchema = object({
    orden_id: number(),
    fk_cli_cedula: string(),
    orden_fecha: string(),
    orden_total: number(),
})
export const Detalle_Ordenes_CliSchema = object({
    detalle_id: number(),
    fk_orden_id: number(),
    fk_prod_id: number(),
    detalle_cantidad: number(),
    detalle_precio: number(),
})
