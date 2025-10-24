const { src, dest } = require('gulp');

function buildIcons() {
  return src('nodes/**/*.{png,svg,json}')
    .pipe(dest('dist/nodes'));
}

exports['build:icons'] = buildIcons;
exports.default = buildIcons;

