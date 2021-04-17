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

var fetchApiBtn = document.querySelector('.fetchApiBtn');
var apiResult = document.querySelector('#apiResult')

fetchApiBtn.addEventListener('click', e => {

   // url = "https://api.github.com/users"
   url = "https://fakestoreapi.com/products"
   // url = "https://api.covid19api.com/summary"

fetch(url).then( (response) => {
  return response.json()
  .then((data) => {
      const productResult = data.map((result)=> {
        return result.category
      })
      apiResult.innerHTML = productResult;
      console.log(data)
    })
  })
})

//  -----Example of post Api------

fetchApiBtn.addEventListener('click', e => {

   url = "http://dummy.restapiexample.com/api/v1/create"
   data = {
     name:'rohit',
     surname:'Yaav'
   }
   parameters = {
     method:'post',
     header:{"Content-Type": "apllication/json"},
     body:JSON.stringify(data)
   }

fetch(url, parameters).then( (response) => {
  return response.json()
  .then((data) => {
      console.log(data)
    })
  })
})



                  // -----------Project-2-------

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





            // -----------Project-3-------
  var sentmessages = document.getElementById("sentmessages")
      function sendmessageFunc()
      {
            var typemessage = document.getElementById("typemessage")
            var node  = document.createElement("li")
                node.innerHTML = typemessage.value.toLowerCase()
                  sentmessages.appendChild(node)
                    typemessage.value = ("")
        }


//           ----------Project - 4 ----------------

var questions = [
     {
          question: "Why so many jobless people in india ?",
          a: 'They are not capable',
          b: 'They are less qualified',
          c: "They don't have skills",
          d: 'There is no job available in market',
          ans: "ans3"
     },

     {
          question: "Do i get a job ?, If i'm unemployed for past four months.",
          a: 'No',
          b: 'Yes',
          c: "Maybe",
          d: 'Maybe not',
          ans: "ans2"
     },

     {
          question: "What color are mangos ?",
          a: 'green/yellow',
          b: 'blue',
          c: "red",
          d: 'pink',
          ans: "ans1"
     },

     {
          question: "What color are strawberries?",
          a: 'green',
          b: 'pink',
          c: "yellow",
          d: 'red',
          ans: "ans4"
     }
]



var quizQuestion = document.querySelector('.quzQuesAns h1');

var option1 = document.querySelector('#option1')
var option2 = document.querySelector('#option2')
var option3 = document.querySelector('#option3')
var option4 = document.querySelector('#option4')

var quizSubmitBtn = document.querySelector('#quizSubmitBtn')

var quizInputs = document.querySelectorAll('.quizInput')

var quizScore = document.querySelector('#quizScore')


let questioncount = 0;
let score = 0;
const loadQueAndOptions = () => {

     const questionList = questions[questioncount]

     quizQuestion.innerHTML = questionList.question
     option1.innerHTML = questionList.a
     option2.innerHTML = questionList.b
     option3.innerHTML = questionList.c
     option4.innerHTML = questionList.d

}
loadQueAndOptions()


const whichInputUserClicked = () => {
     let userResponse;
     quizInputs.forEach((input, i) => {
          if (input.checked) {
               userResponse = input.id;
          }
     })
     return userResponse
}

const deSelectInput = () => {
     quizInputs.forEach((input, i) => {
          input.checked = false;
     })
}

quizSubmitBtn.addEventListener('click', e => {

     const userResponseResult = whichInputUserClicked()

     if (userResponseResult === questions[questioncount].ans) {
          score++
     }
     questioncount++;


     deSelectInput();



     if (questioncount < questions.length) {
          loadQueAndOptions()
     } else {

          quizQuestion.innerHTML = 'Thank You!'
          quizQuestion.style = 'text-align:center'

          quizSubmitBtn.style = 'display:none'

          document.querySelector('#ans1').style = "display:none"
          document.querySelector('#ans2').style = "display:none"
          document.querySelector('#ans3').style = "display:none"
          document.querySelector('#ans4').style = "display:none"

          option1.style = "display:none"
          option2.style = "display:none"
          option3.style = "display:none"
          option4.style = "display:none"

          quizScore.innerHTML = `
          <h3> You Scored : ${score}/${questions.length} </h3>
          <button class = "btn" onclick = "location.reload()" >Try Again</button>
          `;
          quizScore.classList.remove('showScoreDiv')
     }
})


// ---------------Project-5-----------


               var slides = document.querySelectorAll('.slide');
               var btns = document.querySelectorAll('.btn')


               // let currentSlide = 1;

               // ----javascript for image slider   manual navigation-----

               var manualNav = function (manual) {

                    slides.forEach((slide, i) => {
                         slide.classList.remove('active')
                    })

                    btns.forEach((btn, i) => {
                         btn.classList.remove('active')
                    })

                    slides[manual].classList.add('active');

                    btns[manual].classList.add('active');

               }

               btns.forEach((btn, i) => {
                    btn.addEventListener('click', () => {
                         manualNav(i);
                         // currentSlide = i;
                    })
               })

               // ----javascript for image slider   auto navigation-----

               // var repeat = function () {
               //
               //      let active = document.getElementsByClassName('active');
               //      let i = 1;
               //
               //      var repeater = () => {
               //
               //           setTimeout(function () {
               //
               //           [...active].forEach((activeSlide) => {
               //                activeSlide.classList.remove('active')
               //           })
               //
               //                slides[i].classList.add('active')
               //                btns[i].classList.add('active')
               //                i++
               //
               //                if (slides.length == i) {
               //                     i = 0;
               //                }
               //                if (i >= slides.length) {
               //                     return;
               //                }
               //
               //                repeater()
               //
               //           }, 2000)
               //
               //      }
               //      repeater()
               // }
               // repeat()


               // ----javascript for image slider   auto navigation-----


var images =
     ["Images/bi-about.jpg",
          "Images/bi-contact.jpg",
          "Images/bi-jsprojects.jpg"]


var i = 0;

function automaticFunc() {
     var slideImage = document.getElementById('slideImage').src = images[i]
     if (i < (images.length - 1)) {
          i++;
     } else {
          i = 0;
     }
}

setInterval(automaticFunc, 2500);
