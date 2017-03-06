module.exports = function() {
  return {
    visitor: {
      ImportDeclaration: function(path) {
        var isCSS = path.node.source.value.match(/(css|scss|sass)$/);

        if (isCSS) {
          path.remove();
        }
      }
    }
  }
}
