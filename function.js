function formSubmit() {
    alert("hi");
  }


  $(document).ready(function(){
    $("#survey-form").validate({
      rules:{
        'name':{
          required: true,
          maxlength: 3,
        }
      },
      messages:{
        'name':{
          required: "Name is required",
          maxlength: "Length must be lower than 30 characters"
        }
      }
    })
  })
 