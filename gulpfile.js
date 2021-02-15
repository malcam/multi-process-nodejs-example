const { src, dest } = require('gulp');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function addService() {
  return src('*.*', { read: false })
    .pipe(dest('./src/rest_api/application'))
    .pipe(dest('./src/rest_api/domain'))
    .pipe(dest('./src/rest_api/infrastructure'));
}

exports.default = defaultTask;
exports.addService = addService;
