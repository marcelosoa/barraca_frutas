import { NativeStackNavigationProp } from "@react-navigation/native-stack"; 

export type propsNavigationStack = {
  Home: undefined
  Name?: {
    name: string
  }
  CPF?: {
    cpf?: string
    name: string
  }
  Telefone?: {
    phone?: string
    cpf: string
    name: string
  }
  Frutas?: {
    name: string
    cpf: string
    phone: string
  }
  Success: {
    name: string
  }

}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;