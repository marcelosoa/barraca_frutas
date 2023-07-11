export interface Supplier {
  id: string
  name: string;
  cpf: string;
  phone: string;
}

export interface SupplierState {
  suppliers: Supplier[]
}