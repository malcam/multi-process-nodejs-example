const { src, dest } = require('gulp');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function addService() {
  return  src('*.*', {read: false})
  .pipe(dest('./src/my_new_service/application'))
  .pipe(dest('./src/my_new_service/domain'))
  .pipe(dest('./src/my_new_service/infrastructure'))
}

exports.default = defaultTask;
exports.addService = addService;

 