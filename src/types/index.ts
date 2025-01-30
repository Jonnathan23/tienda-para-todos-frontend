import { InferOutput } from "valibot";
import { CategoriasSchema, ClientesSchema, Detalle_Ordenes_CliSchema, GetOrderRequestSchema, Ordenes_CliSchema, OrderProductSchema, OrderRequestSchema, ProductosSchema, ProductosVendidosSchema, ProveedoresSchema } from "../utils/schema";

//* |----------| | Modelos para la DB | |----------|
export type Cliente = InferOutput<typeof ClientesSchema>;
export type Categoria = InferOutput<typeof CategoriasSchema>;
export type Categorias = Categoria[]
export type Proveedor = InferOutput<typeof ProveedoresSchema>;
export type Producto = InferOutput<typeof ProductosSchema>;
export type DraftProducto = Pick<Producto, "prod_descripcion" | "prod_precio_unitario" | "prod_stock" | "fk_cat_id" | "imagen" | "fk_pro_provid">;
export type Productos = Producto[]
export type Ordenes_Cli = InferOutput<typeof Ordenes_CliSchema>;
export type Detalle_Ordenes_Cli = InferOutput<typeof Detalle_Ordenes_CliSchema>;
export type ProductoVendido = InferOutput<typeof ProductosVendidosSchema>;
export type GetOrderRequest = InferOutput<typeof GetOrderRequestSchema>;
export type OrderProduct = InferOutput<typeof OrderProductSchema>;
export type OrderRequest = InferOutput<typeof OrderRequestSchema>;

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