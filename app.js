const input = document.getElementById('input');
const list = document.getElementById('ul');

function addTask(){
    if(input.value === ''){
        alert("you must enter some text");
    }
    else{
    
        let li = document.createElement('li');
        let btn1=document.createElement('button');
        let btn2=document.createElement('button');
        li.innerHTML = input.value;
        btn1.innerHTML="Done";
        btn2.innerHTML="Delete";
        list.appendChild(li);
        li.appendChild(btn1);
        li.appendChild(btn2);
        // Adding Styles to buttons
        btn1.style.right="100px";

        // Adding button functionality
        btn1.addEventListener('click',
        function(){
            li.style.textDecoration="line-through";
        }
        );
        btn2.addEventListener('click',
        function(){
            li.remove();
        }
        );
    }input.value = "";

}
