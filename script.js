
var closee=document.getElementById('closee')
var firstpage=document.getElementById('firstpage')
var userinputname=document.getElementById('userinputname')

closee.addEventListener("click",function(){
    var username=document.getElementById('username')
    var show=username.value?username.value + ' 🎓':'SCADIEN 🎓'
    userinputname.innerHTML=show
    firstpage.style.display="none"
    
    
})
var b1=document.getElementById('b1')
var b2=document.getElementById('b2')
b1.addEventListener('click',function()
{
    var container=document.getElementById('container')
    b1.style.backgroundColor = "#3F418D"
    b1.style.color = "white"
    b2.style.backgroundColor = "transparent"
    b2.style.color = "black"
    container.style.display="block"

})
b2.addEventListener('click',function()
{
    var container=document.getElementById('container')
    b2.style.backgroundColor = "#3F418D"
    b2.style.color = "white"
    b1.style.backgroundColor = "transparent"
    b1.style.color = "black"
    container.style.display="block"

})

var shere=document.getElementById('shere')
var booxes = document.getElementById('booxes')
var cgpafinal = document.getElementById('cgpa')
function displayInputBoxes()
{
  booxes.innerHTML = '';
  cgpafinal.innerHTML='0.0'
  const selectedValue = parseInt(shere.value);

  if(selectedValue > 0)
  {
    for(var i = 0;i<selectedValue;i++)
        {
          
          var div=document.createElement('div')
          div.setAttribute("class","entries box")
          div.innerHTML=`
                            <p>GPA of Semester ${i+1} (*)</p>
                            <input id="answer-${i}" type="number" min="0" max="10" />
                       `
          console.log(div)
          booxes.append(div)
            
        }
  }

}
var result = document.getElementById("result")
var warn = document.getElementById('warn')

function yourresult()
{
  var b=0
  
  var mybox = booxes.querySelectorAll('div')
  for(var j = 0;j<mybox.length;j++)
  {
    var a = document.getElementById(`answer-${j}`).value
    if(a == '')
    {
      
      warn.innerHTML="Error: Please fill all the fields"
      setTimeout(function () {
        warn.innerHTML = ""
    }, 3000)
      b=0;
      cgpafinal.innerHTML='0.0'
      break;
      
    }
    else if(a > 10)
      {
        
        warn.innerHTML="Error: Please enter a value less than or equal to 10"
        setTimeout(function () {
          warn.innerHTML = ""
      }, 3000)
        b=0;
        cgpafinal.innerHTML='0.0'
        break;
        
      }
    else{
      b = Number(b) + Number(a)
    }
   
    
  }
  if(b != 0)
    {
      var cgpa = b/mybox.length
      cgpafinal.textContent=cgpa.toFixed(2)
    }
}


