module.exports = function(source) {
  console.log("----> Loader: " + this.request)
  
  if(this.request.indexOf("ngfactory") >= 0) {
      var result = source;
      result = result.replace(/(..\/)*platform\'/g, 'platform\'');
      result = result.replace(/(..\/)*ui\/frame\'/g, 'ui/frame\'');
      result = result.replace(/(..\/)*ui\/page\'/g, 'ui/page\'');

      if (source !== result && this.request) {
        console.log("----> Imports fixed for: " + this.request);
      }
      
      source = result;
  }
  return source;
};