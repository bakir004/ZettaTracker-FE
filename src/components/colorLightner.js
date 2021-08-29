export const lightenColor = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let res = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
    const colorFactor = 20;
    res.r = res.r + colorFactor >= 255 ? 255 : res.r + colorFactor;
    res.g = res.g + colorFactor >= 255 ? 255 : res.g + colorFactor;
    res.b = res.b + colorFactor >= 255 ? 255 : res.b + colorFactor;
    res = rgbToHex(res)
    return res;

}
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex({r, g, b}) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}