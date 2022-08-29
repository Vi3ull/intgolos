const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '');
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const lh = (fontSize, lineHeight) => `${round(lineHeight / fontSize)}`;
// const paddingX = (screenSize, px) => {
//   return `calc(50vw - calc(50vw - ${(((px * 100) / (screenSize / 2))}))`;
// }

export { rem, em, lh };