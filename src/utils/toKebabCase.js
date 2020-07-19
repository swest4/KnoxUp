export default (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/\040/g, '-')
    .replace(/(?!\-)\W/g, '');
