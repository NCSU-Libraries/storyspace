function transform_scale(callback) {
  var db = document.querySelectorAll('body')[0];
  var dbStyle = window.getComputedStyle(db);
  var dbWidth = parseInt(dbStyle.width.replace(/[^\d]*/,''));
  var dbHeight = parseInt(dbStyle.height.replace(/[^\d]*/,''));
  var sx = dbWidth / window.innerWidth;
  var sy = dbHeight / window.innerHeight;
  var transform = "scale(" + (1/Math.max(sx, sy)) + ")";
  db.style.transform = transform;
  db.style.transform = transform;

  if (typeof callback !== 'undefined') {
    callback();
  }

  window.addEventListener('resize', function(){
    transform_scale();
  });
}

// scale page for preview on normal display
if (window.innerWidth < 15000) {
  document.addEventListener('DOMContentLoaded', function() {
    transform_scale();
  });
}
