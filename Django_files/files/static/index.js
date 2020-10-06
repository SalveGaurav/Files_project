$(document).ready(function(){
    $('#Send').click(function(){
        var form = document.getElementById("files");
        //console.log(form)
        var files=new FormData(form);
        
       console.log(files)
        $.ajax({
            type: "POST",
            url: '/upload/',  
            data: {
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val(),
                    data:files, 
                    processData: false,
                    contentType: false,
                    
                }, 
            success:  function(data){
              
                 alert("sucessful")
               }
        });
    
    });
    });