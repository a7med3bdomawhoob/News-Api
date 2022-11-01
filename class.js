
async function requist(any) {
    //let fetchdata = await fetch(`https://newsapi.org/v2/everything?q=${any}&from=2021-12-26&sortBy=publishedAt&apiKey=c00f575d09c34d3e88f7e94764ef12e3`);
    let fetchdata = await fetch(`https://newsapi.org/v2/everything?q=${any}&from=2022-07-17&sortBy=publishedAt&apiKey=c00f575d09c34d3e88f7e94764ef12e3`);
    let data = await fetchdata.json();
    // console.log(data.articles.length);
    display(data);
    
    let error = document.getElementById("error");
    search.addEventListener("click", function () {
        if (data.totalResults != 0) {
            let result = inputsearch.value;
            requist(result);
          
        }
        else {
            error.innerHTML = `<h1>error</h1>`
           
        }

    })
  
}


let row = document.querySelector(".row");
let inputsearch = document.querySelector(".inputsearch");
let search = document.querySelector(".search")
let sport = document.querySelector(".sports");
let art=document.querySelector(".art");
let policy = document.querySelector(".policy");
let market = document.querySelector(".market");


sport.addEventListener("click",function(){
    requist("sport")
})
art.addEventListener("click",function(){
    requist("art")
})
policy.addEventListener("click",function(){
    requist("policy")
})
market.addEventListener("click", function () {
    requist("market")
})




function display(arr) {
 
    let container = ``;
    for (let i = 0; i < arr.articles.length; i++) {
        if (arr.totalResults!=0)
        {
            container += ` <div class="card col-md-4" >
                <a href=" "><img src="${arr.articles[i].urlToImage}" class="card-img-top " alt="..."></a>
                <div class="card-body">
                    <h5 class="card-title">${arr.articles[i].title}</h5>
                    <p class="card-text">${arr.articles[i].description}</p>
                    
                </div>
            </div>`
        }
        
        }
      
    row.innerHTML = container;


}

requist('mohammed salah');














// class User
// {
    
// constructor(nam , age , gender)
// {
//     this.nam=nam;
//     this.age=age;
//     this.gender=gender;
// }
//  rigister()
// {
//     console.log("register");
// }
// Login(){
//     console.log('Hello...')
// }


// }






// let user1=new User('ahmed',22,'male');
// let user2=new User('amr',30,'male');



