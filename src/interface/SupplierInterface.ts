export interface Supplier {
  id: number
  name: string;
  cpf: string;
  phone: string;
}

export interface SupplierState {
  suppliers: Supplier[]
}