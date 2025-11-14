const babel = require('@babel/core');

const result = babel.transformSync(`
function info() {
  const m = new Map();
  m.set('name', 'ajs');
  m.set('version', '1.0.0');
  return m;
}

export default {
  info
};
`, {
  presets: ['@babel/preset-env']
});

console.log('Babel работает:', !!result.code);