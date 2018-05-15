var Layout = (function(){
  var init = function(){
    bindFunctions();
  };

  var bindFunctions = function(){
    document.getElementsByTagName('body')[0].addEventListener('click', demoFunction);
  };

  // Methods
  var demoFunction = function() {
    console.log("I'm here.");
  };

  return {
    init: init
  };
})();
