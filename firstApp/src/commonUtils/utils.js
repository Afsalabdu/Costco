export const dispatchCustomEvent = (eventName, detail) => {
    const event = new CustomEvent(eventName, {
        detail,
        bubbles: true,
        cancelable: true,
    });
    window.dispatchEvent(event);
};
export const capitalizeFirstLetter= (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }