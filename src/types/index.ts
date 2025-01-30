import { InferOutput } from "valibot";
import { CategoriasSchema, ClientesSchema, Detalle_Ordenes_CliSchema, Ordenes_CliSchema, ProductosSchema, ProveedoresSchema } from "../utils/schema";

//* |----------| | Modelos para la DB | |----------|
export type Cliente = InferOutput<typeof ClientesSchema>;
export type Categoria = InferOutput<typeof CategoriasSchema>;
export type Categorias = Categoria[]
export type Proveedor = InferOutput<typeof ProveedoresSchema>;
export type Producto = InferOutput<typeof ProductosSchema>;
export type Productos = Producto[]
export type Ordenes_Cli = InferOutput<typeof Ordenes_CliSchema>;
export type Detalle_Ordenes_Cli = InferOutput<typeof Detalle_Ordenes_CliSchema>;


//* |----------| | Auth | |----------|
//User
export type LoginUser = Pick<Cliente, "cli_correo" | "cli_contrasenia">
export type RegisterUser = Pick<Cliente, "cli_cedula" | "cli_nombre" | "cli_apellido" | "cli_correo" | "cli_celular" | "cli_direccion" | "cli_contrasenia">

//Provider
export type LoginProvider = Pick<Proveedor, "prov_correo" | "prov_contrasenia">
export type RegisterProvider = Pick<Proveedor, "prov_nombre" | "prov_numero" | "prov_correo" | "prov_contrasenia" | "prov_direccion">


//* |----------| | Modelos para la App | |----------| 
export type CartItem = Pick<Producto, 'prod_id' | 'prod_descripcion' | 'prod_precio_unitario' | 'imagen' | 'fk_cat_id' | 'fk_pro_provid'> & {
    cantidad: number
}

export type OrderProduct = {
    prod_id: number;
    prod_stock: number;
};

export type OrderRequest = {
    cli_cedula: string;
    productos: OrderProduct[];
};

export type ProductosVendidos = {
    prod_id: number
    prod_descripcion: string
    prod_precio_unitario: string | number
    detalle_cantidad: number
}
export type GetOrderRequest = {
    prov_id: number
    productos_vendidos: ProductosVendidos[]
}