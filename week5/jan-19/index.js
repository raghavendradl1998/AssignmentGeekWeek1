var reviews = [
    
    {
       id: 1,
       name: "MERN Stack",
       job: "MERN",
       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXhYAh24xeZg25PiDAsPsyJ392bDLnxsl7g&usqp=CAU",
       text: "who works with both the front and back ends of a website or application—meaning they can tackle projects that involve databases.",
    },
    {
       id: 2,
       name: "Sachin",
       job: "Cricketer",
       img: "https://static.toiimg.com/thumb/msid-81527421,width-1200,height-900,resizemode-4/.jpg",
       text: "Sachin Tendulkar is known as the 'God of Cricket' in India. He is popularly called by the name of Master Blaster",
    },
    {
       id: 3,
       name: "Prabhas",
       job: "Actor",
       img: "https://wallpaperaccess.com/full/1226651.jpg",
       text: " The Beginning at the Royal Albert Hall in London, the entire star cast and technical crew of India’s biggest blockbuster were present. However, it was Rebel Star Prabhas who received the maximum attention from media personals",
    },
 ];
 
 
 var imgElement = document.getElementById('person-img');
 var author = document.getElementById('author');
 var job = document.getElementById('job');
 var info = document.getElementById('info');
 var prevBtn = document.querySelector("#prev-btn");
 var nextBtn = document.querySelector("#next-btn");
 var randomBtn = document.querySelector(".random-btn");
 
 
 // random index for the first one or front
 var currentIndex = 0;
 
 
 // To change the image to first person in reviews
 // example currenty the first image in reviews is Kaushik's Image
 // So it will change to Kaushik's Image
 //img.src = reviews[0].img;
 //  or
 
 
 // Reviews objects are stored into an array
 // index of that array will start from 0 as set current index is set to 0.
 // By updateUserDetails()
 
 
 prevBtn.addEventListener("click", prevClick);
 
 
 function prevClick() {
    if(currentIndex === 0 ) {
       currentIndex = reviews.length - 1;
    } else {
       currentIndex --;
    }
    updateUserDetails();
 }
 
 
 
 nextBtn.addEventListener("click", nextClick);
 
 
 function nextClick() {
    if(currentIndex === reviews.length - 1) { // To repeat when object got finished
       currentIndex = 0;
    } else {
       currentIndex ++;
    }
    updateUserDetails();
 }
 
 // To change currentIndex value every clicking of next and prev button
 // we have to put every details of the reviews objext
 //  in the both function nextclick() and function preClick() 
 // so to avoid it we will create this function so that
 // we didnot have to write these to everywhere
 
 function updateUserDetails() {
    imgElement.src = reviews[currentIndex].img;
    author.innerText = reviews[currentIndex].name;
    job.innerText = reviews[currentIndex].job;
    info.innerText = reviews[currentIndex].text;
 }
 
 
 // For random we have to create random number 
 // To create random number
 // Math.random but it will creat random number between 0 to 1
 // so Math.floar will convert the number into nearest decimal
 // we used * to get bigger number 
 
 // console.log(Math.floor(Math.random() * 5));
 
 randomBtn.addEventListener("click", randomaize);
 
 function randomaize() {
    currentIndex = Math.floor(Math.random() * reviews.length);
    updateUserDetails();
  }
 