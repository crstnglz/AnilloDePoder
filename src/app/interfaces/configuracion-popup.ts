import { ButtonSeverity } from "primeng/button";

export interface ConfiguracionPopup {
  message: string,
  header?: string,
  nameButton: string,
  severity: 'success' | 'danger'
  acceptLabel?: string
  rejectLabel?: string
  funcion: (MessageService?: any) => any
}
