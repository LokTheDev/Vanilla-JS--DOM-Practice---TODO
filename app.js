//getDate
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
document.getElementById('date').innerHTML = today.toLocaleDateString("en-US")


//getNotes
const area = document.querySelector(".tab")
area.innerHTML = `

<div class="inPut">
<input type="text" placeholder="todo">
<button>add</button>
</div>

<ul> 

</ul>

`
const noteTab = document.querySelector("ul")


    document.querySelector("button").onclick = function(){
        const input = document.querySelector('input').value
        if(input !== ""){
        addTab(input)
        }

    function addTab(input){
        const newItem = document.createElement('li')
        newItem.appendChild(document.createTextNode(input))
          noteTab.appendChild(newItem)

          newItem.addEventListener('click', function(){
            newItem.style.textDecoration = "line-through"
        })


          newItem.addEventListener('dblclick', function(){
              noteTab.removeChild(newItem);
          })
  
      }


      
        document.querySelector('input').value = ""
    
    }

 