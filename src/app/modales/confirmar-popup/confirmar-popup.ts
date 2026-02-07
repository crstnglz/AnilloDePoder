import { Component, inject, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfiguracionPopup } from '../../interfaces/configuracion-popup';

@Component({
  selector: 'app-confirmar-popup',
  imports: [ButtonModule, ConfirmPopupModule, ToastModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './confirmar-popup.html',
  styleUrl: './confirmar-popup.css',
})
export class ConfirmarPopup {

  @Input() config!: ConfiguracionPopup

  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

    confirm2(event: Event) {
        this.confirmationService.confirm({
            target: event.currentTarget as EventTarget,
            message: this.config.message,
            header: this.config.header,
            icon: 'pi pi-info-circle',
            acceptLabel: this.config.acceptLabel,
            rejectLabel: this.config.rejectLabel,
            rejectButtonProps: {
                severity: 'secondary',
                outlined: true
            },
            acceptButtonProps: {
                severity: this.config.severity
            },
            accept: () => {
              this.config.funcion(this.messageService)
            },
            reject: () => {
                this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Acción cancelada', life: 3000 });
            }
        });
    }
}
