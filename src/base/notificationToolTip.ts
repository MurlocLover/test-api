import notify from "devextreme/ui/notify";

export class NotificationToolTip {
  public Notify(tipo: string, message: String, time: number) {
    notify({
      message,
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, tipo, time);
  }
}
