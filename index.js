                    // toggle button for toggle navbar
var togglebutton = document.getElementsByClassName("menu-icon")[0];
togglebutton.addEventListener("click", function(){
  var navbarlinks = document.getElementsByClassName("toggle-navbar")[0];
  navbarlinks.classList.toggle("toggle-active");
  });

                          // For search btn
    function SearchFunc(){
      var ClickonSearch = document.getElementsByClassName("Search-btn")[0]
        ClickonSearch.classList.toggle("toggle-searchbtn")
    }

                  // -------JavaScript projects---------

                  // -----------Project-1-------

  var mathresult = document.getElementById("mathresult")
  function calculateFunc(){
          var num1 = document.getElementById("firstnumber").value
          var num2 = document.getElementById("secondnumber").value
          var operator = document.getElementById("operator").value
      if(num1 == "" || num2 == "" || operator == ""){
          mathresult.innerHTML = ("Please enter a valid input");
          }
      else{
          num1 = parseFloat(num1)
          num2 = parseFloat(num2)
          if(operator == "+"){
              mathresult.innerHTML = (num1 + num2);
              }
          else if (operator == "-"){
               mathresult.innerHTML = (num1 - num2);
              }
          else if (operator == "*"){
               mathresult.innerHTML = (num1 * num2);
              }
          else if (operator == "/"){
               mathresult.innerHTML = (num1 / num2);
              }
          else{
              mathresult.innerHTML = ("Wrong operator");
              }
          }
  }
            // -----------Project-2-------
  var sentmessages = document.getElementById("sentmessages")
      function sendmessageFunc()
      {
            var typemessage = document.getElementById("typemessage")
            var node  = document.createElement("li")
                node.innerHTML = typemessage.value.toLowerCase()
                  sentmessages.appendChild(node)
                    typemessage.value = ("")
        }
