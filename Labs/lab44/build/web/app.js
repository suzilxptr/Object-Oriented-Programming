
$(function(){
    doAction({},"GET");
    $('.button').click(function() { 
        var val = $(this).val();
        params={"action":val};
        doAction({"action":val},"POST");
});
});
function doAction(params,method){
    $.ajax({
            url: 'CoffeeServlet',
            type: method,
            data: params, 
            dataType: "xml",
            success: function (result) {
              updateStatus(result);
            }       
        }); 
}
function makeCoffee(){
    var formData = {
            'type'              : $("select[name=coffeeType]").val(),
            'cupSize'             : $("select[name=cupSize]").val(),
            'action'            :   "makeCoffee"
        };
        
        doAction(formData,"POST");
        $("#coffeeForm").after("<div class='coffee'><h2 style='color:blue;'> Please wait......</h2></div>");    
        doAction({},"GET");
}
function updateStatus(data){
  if($(data).find('error').length){
      $(".coffee").remove();
      alert($(data).find('error').text());
  }else{
      $("#state").remove();
      $("#coffeeForm")
              .before( "<div id='state'><span style='color:blue;'> Current state:"+$(data).find('state').text()+"</span>"
                      +"<br> Bean:"+$(data).find('bean').text()+" Water:"+$(data).find('water').text()+" Milk:"+$(data).find('milk').text()+"</div>");
      if($(data).find('coffee').length){
           $(".coffee").remove();
           $("#coffeeForm").after("<div class='coffee'><h2 style='color:blue;'>"+$(data).find('coffee').text()+"</h2><br><img src='"+$(data).find('image').text()+"'></div>");       
      }
  
    }
}
