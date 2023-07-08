import styled from 'styled-components/native'

interface InputFormProps {
  error?: string | undefined
}

export const Container = styled.SafeAreaView`
  padding: 24px 28px;
  display: flex;
  flex: 1;
  gap: 44px;
`

export const ViewName = styled.View`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 24px 0; 
`

export const InputFormView = styled.View<InputFormProps>`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`