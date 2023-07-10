export interface Supplier {
  id: number
  name: string;
  cpf: string;
  phone: string;
  fruits: string[]
}

export interface SupplierState {
  suppliers: Supplier[]
}