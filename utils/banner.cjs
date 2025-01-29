const s = require('gradient-string')([
  { color: '#42d392', pos: 0 },
  { color: '#42d392', pos: 0.1 },
  { color: '#647eff', pos: 1 }
])('create-vitepressx - Start an opinioned vitepress project')

console.log(JSON.stringify(s))
