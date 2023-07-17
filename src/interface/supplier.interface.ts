export interface Supplier {
  id: string
  name: string;
  cpf: string;
  phone: string;
  fruits: string[]
}

export interface SupplierState {
  suppliers: Supplier[]
}