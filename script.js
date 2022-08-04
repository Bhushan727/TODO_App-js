console.log("Working");

// creating event listener for that popup close icon or cross icon to close the popup window
document.getElementById('closePop').addEventListener("click",function(){
    document.querySelector('.mainBlur').style.display = "none";
})

// function to show popup   // whenever user clicks on add button this function will called and popup will showup
function showPop(){
    document.querySelector('.mainBlur').style.display = "flex";
}



let mainArr = [];

function addCard(cardName)
{
    const containerDiv = document.querySelector('.container');
    
    const card = document.createElement('div');
    card.setAttribute('class',"cards");
    
    containerDiv.appendChild(card);

    const html = `
        <div class="cardHead">
            ${cardName}
            </div>
            <div class="carCont">
                <ul class="items" type="none">

                </ul>
        </div>
    `;
    card.insertAdjacentHTML('beforeend',html);
    console.log(card);

    const deleteBtn = document.createElement('div');
    deleteBtn.setAttribute('class','trashIcn');
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can" id="trash"></i>`;
 
    const addListBtn = document.createElement('div');
    addListBtn.classList.add('addIcn');
    addListBtn.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;
    console.log(addListBtn);

    card.appendChild(deleteBtn);
    card.appendChild(addListBtn);
   
    const listParent = card.childNodes[3].children[0];
    console.log(listParent);
    
    addListBtn.addEventListener('click',function(){


        const mainBlur2 = document.createElement('div');
        mainBlur2.classList.add('mainBlur2');
        
        const pop = document.createElement('div');
        pop.classList.add('pop');
        
        pop.innerHTML = `
        <h1>Add Task</h1>
        <i class="fa-solid fa-circle-xmark" id="closePop2"></i>
        <input type="text" id="listName" value="">
        <button class="addList" id="addRoutine">AddL</button>
        `;
        mainBlur2.append(pop);
        document.body.append(mainBlur2);
        
        
        const updateBtn = pop.childNodes[7];

        // adding lists on cards through this function
        updateBtn.addEventListener('click',function(){
            const inputElem = pop.childNodes[5];
            let optName = inputElem.value;
            console.log(optName.value);
            console.log(optName);


            const listTsk = document.createElement('li');
            listTsk.classList.add('missions');

            const done = document.createElement('button');
            done.innerText = "Done";
            done.classList.add('markDone');
            
            listTsk.innerHTML = optName;
            listTsk.insertAdjacentElement('beforeend',done);
            console.log(listTsk);
            listParent.appendChild(listTsk);

            console.log(done.parentElement);
            
            // function of "mark done" button on card
            done.addEventListener('click',function(){
                const currList = done.parentElement;
                currList.style.textDecoration = "line-through";
                currList.style.color="red";
                done.remove();
            })

            //deleting the popup window created dynamically
            mainBlur2.remove();

        })
            
        console.log(pop.childNodes[7]);
        
        // accessing the cross icon
        const cross = pop.childNodes[3];

        // function for cross button or close button of "add List" popup window
        cross.addEventListener('click',function(){
            mainBlur2.remove();
        })
        

    })



    

    // const dark = document.createElement('div');
    // dark.classList.add('dark');


    deleteBtn.addEventListener('click',function(){
         let confrm = confirm("Do you really want to delete this task");
        if(confrm)
        card.remove();
        if(containerDiv.innerText === "")
        {
            document.getElementById("noItem").style.display="block";
        }
    });

}



function addTask(){
    //hiding the no item msg in container
    document.getElementById("noItem").style.display="none";

    let cardName = document.getElementById('name').value;

    const objDemo = {
        id : (mainArr.length+1) ,
        taskName : cardName
    }
    mainArr.push(objDemo);

    console.log(mainArr.length);
    console.log(mainArr[mainArr.length-1]);
    
    //calling the addcard function to create card element 
    addCard(cardName);

    //hiding the "add card" popup window
    document.querySelector('.mainBlur').style.display = "none";
    
}

















// var fetching;
// let i=0;
// function addCard()
// {
//     document.getElementById("noItem").style.display="none";
//     let container = document.querySelector('.container');
//     var fetching = document.querySelector('.container').innerHTML;
//     let cardName = document.getElementById('name').value;


//     const objDemo = {
//         id : (mainArr.length+1) ,
//         taskName : cardName
//     }
//     mainArr.push(objDemo);
//     console.log(mainArr.length);
//     console.log(mainArr[mainArr.length-1]);
    
//     console.log(document.getElementById("noItem"));
    
//     container.innerHTML = fetching + `
//     <div class="cards">
//         <div class="cardHead">
//             ${cardName}
//         </div>
//         <div class="carCont">
//            <div class="trashIcn"> <i class="fa-solid fa-trash-can" id="trash-${i}"></i></div>   
//            <div class="addIcn"> <i class="fa-solid fa-circle-plus" ></i></div>
//         </div>
//     </div>
//     ` ;
//     document.querySelector('#trash-'+i).
//     addEventListener('click',function(){
//         let removeElem = this.parentNode.parentNode.parentNode;
//         console.log(removeElem);
//         // let confrm = confirm("Do you really wnat to delete this task");
//         // if(confrm)
//             removeElem.remove();
//     })


//     document.querySelector('.mainBlur').style.display = "none";
//     console.log(fetching);
//     i++;
//     console.log(i);
// }





