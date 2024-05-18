

export function getMousePositionInCanvas(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

/**
 * 
 * @param {*} canvas 
 * @param {*} event 
 * @returns normalized device coordinates with:
 * - bottom left: [-1,-1]
 * - x direction: right
 * - y direction: up 
 */
export function getMousePositionInCanvasNDC(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var click_x = Math.round(event.clientX);
    var click_y = Math.round(event.clientY);
    var left = Math.round(rect.left);
    var top = Math.round(rect.top);
    var width = Math.round(rect.width);
    var height = Math.round(rect.height);
    return {
        x: ((click_x - left) / width) * 2 - 1,
        y: -((click_y - top) / height) * 2 + 1
    };
}