class InputHandler {
  constructor(canvasHandler) {
    const elem = canvasHandler.canvas;

    const handleMouse = ({ clientX, clientY }) =>
      this.setPointerPosition(canvasHandler.clientToCanvas(clientX, clientY));

    const handleTouch = (event) => {
      event.preventDefault();
      const { clientX, clientY } = event.touches[0];
      this.setPointerPosition(canvasHandler.clientToCanvas(clientX, clientY));
    };

    elem.addEventListener("mousemove", handleMouse);
    elem.addEventListener("touchmove", handleTouch, { passive: false });

    this.pointerPosition = [0, 0];
  }

  setPointerPosition(newPosition) {
    this.pointerPosition = newPosition;
  }

  get position() {
    return this.pointerPosition;
  }
}
