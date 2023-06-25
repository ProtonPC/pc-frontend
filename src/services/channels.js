const channel = new BroadcastChannel('myChannel');
const TOAST_EVENT_NAME = "toast"
const toastEvent = new CustomEvent(TOAST_EVENT_NAME, { detail: { toast: true } });
// Listen for the event.
export function receiveToastMessage(fnReceiver){
  document.addEventListener(
    TOAST_EVENT_NAME,
    (e) => {
      fnReceiver(e.detail)
    },
    false
  );
}

export function postToastMessage(){
  document.dispatchEvent(toastEvent);
}
//

export function postMessageOtherTabs(data){
  channel.postMessage(data);
}

export function receiveMessageOtherTabs(fnReceiver){
  channel.addEventListener('message', function(event) {
    const data = event.data;
    fnReceiver(data)
    console.log('Received data:', data);
  });
}
