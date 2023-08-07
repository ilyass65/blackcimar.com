// inputs
let title = document.getElementById('title')
let category = document.getElementById('category')
let submit = document.getElementById('submit')
let tbody = document.getElementById('tbody');
let search = document.getElementById('search')
let year = document.getElementById('year')
let story = document.getElementById('story')
let workYear = document.getElementById('workYear')
let workImage = document.getElementById('workImage')
let avatar = document.getElementById('avatar')
let dash = document.getElementById('dash')
let info =   document.getElementById('readInfor')


// creat product   ////////// creat ///////
let datacreat;
if(localStorage.works != null){
    datacreat = JSON.parse(localStorage.works);
}else{
    datacreat = [];
};

submit.onclick = function(){
    let newdata = {
        
        year:year.value,
        category:category.value,
        story:story.value,
        workYear:workYear.value,
        workImage:workImage.value,
        title:title.value,
    }
    
if(title.value != '' && category.value != ''){
        datacreat.push(newdata);
 


    }else{
        title.focus()
    }


    // local storage save
    localStorage.setItem('works', JSON.stringify(datacreat))

    



    readData()
 
    
}


// clear ///////////////
//////////////// read //////////////
function readData(){
    let animes = '';
for( let i = 0 ; i < datacreat.length ; i++ ){
    animes += `
    <div id='anime'>
    <a href='infos.html'><img onclick='showInfo(${i})' id='avatar' src='${datacreat[i].workImage}'></img></a>
       <h3  onclick='showInfo(${i})' id = 'workName'>${datacreat[i].title}</h3>
       
    </div>
  `

   }
   document.getElementById('readInfo').innerHTML = animes;
   let deleteAll = document.getElementById('deleteAll');
    if(datacreat.length > 1){
        deleteAll.innerHTML = `<button onclick = 'deleteAllData()'> delete all ( ${datacreat.length} anime )</button>`
    }else{
        deleteAll.innerHTML = '';

    }

    
}
readData()

function deletedata(i){
    datacreat.splice(i,1)
    localStorage.product = JSON.stringify(datacreat)
    readData()
}

function deleteAllData(){
    
    localStorage.clear()
    datacreat.length = '';
    readData()
}

////////
function updateData(i){


    title.value = datacreat[i].title;
    price.value = datacreat[i].price;
    taxes.value = datacreat[i].taxes;
    ads.value = datacreat[i].ads;
    discount.value = datacreat[i].discount;
    category.value = datacreat[i].category;
    submit.innerHTML = 'update';
    submit.style.background = 'orange' 
    mood = 'update';
    count.style.display = 'none'
    scroll({
        top: 0,
        behavior:"smooth",
    })

    
    glm = i;
    
    readData()

};


/////
let searchMood = 'title';
function searchGet(id){
   if(id === 'searchTitle'){
    searchMood = 'title';
    search.placeholder = 'Search By Title';
   }else{
    searchMood = 'category';
    search.placeholder = 'Search By Category';
   }
   search.focus()
   search.value = '';
   readData();
   console.log(searchMood)

};

function searchData(value){
    let animes = '';
    if(searchMood === 'title'){
        for(let i = 0 ; i < datacreat.length ; i++){
                            if(datacreat[i].title.includes(value.toLowerCase())){
                animes += `
                <div id='anime'>
                   <img id ='avatar' src='${datacreat[i].workImage}'></img>
                   <h3 id = 'workName'>${datacreat[i].title}</h3>
                   <button onclick='deletedata(${i})' id='delete'>delete</button>
                   
                </div>
            
             `
            }
            

        }
    }
let delet = document.getElementById('delete')
    readData()
    document.getElementById('readInfo').innerHTML = animes;
}



function showInfo(i){
        let informations = '';
    dash.style.display = 'none';
    informations += `
    <div id='anime'>
       <img id='miniAvatar' src='${datacreat[i].workImage}'></img>
       <h3 id = 'miniWorkName'>${datacreat[i].title}</h3>
       <p id = 'miniStory'>${datacreat[i].story}</p>
       <p id = 'miniYear'>${datacreat[i].year}</p>
       <p id = 'miniCategory'>${datacreat[i].category}</p>
       <p id = 'miniWorkYear'>${datacreat[i].workYear}</p>

       
    </div>`

document.getElementById('infoDive').innerHTML = informations; 


}












    