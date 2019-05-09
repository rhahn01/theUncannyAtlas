$.getJSON(
  "https://api.sheety.co/13e98c0d-b17f-40e9-8e56-367eb20f7db0",
  function(data) {
    var template = $("#thingTemplate").html();
    var info = Mustache.to_html(template, data);
    $("#things").append(info);
    
    $(".y2030").appendTo( "#section2030 .stack" );
    $(".y2068").appendTo( "#section2068 .stack" );
    $(".y2070").appendTo( "#section2070 .stack" );
    $(".y2090").appendTo( "#section2090 .stack" );
    $(".y2095").appendTo( "#section2095 .stack" );
    $(".y2100").appendTo( "#section2100 .stack" );
     
    $(".cover").click(function() { 
      $(this)
        .parent()
        .find(".stack")
        .slideToggle();
        // .toggleClass("expanded");
      console.log("toggled?");
    });
  }
);

