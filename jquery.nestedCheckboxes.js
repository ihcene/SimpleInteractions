(function($){
  $.fn.nestedCheckboxes = function(){

    var handleNestedCheckboxes = function(checkbox){
      var targets = checkbox.siblings('.nested').find('input[type=checkbox]');
      if(checkbox.attr('checked')){
        targets.removeAttr('disabled');
      }
      else{
        targets.attr('disabled', 'disabled');
        targets.removeAttr('checked');
      }
    }

    var handleThis = function(){
      handleNestedCheckboxes($(this))
    }

    return this.each(function(){
      handleNestedCheckboxes($(this))
      $(this).on("change", handleThis);
    })
  }
})(jQuery)