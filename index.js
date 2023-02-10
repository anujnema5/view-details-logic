const users = [
    { name: "Rohit", mobile: 9191919191, city: "Vidisha", address: "Shastri nagar", image: "https://i.pinimg.com/originals/65/95/85/6595856323f822a5e9b6411c5d415b49.jpg" },
    { name: "Rishi", mobile: 8181818181, city: "Vidisha", address: "Mukherji Nagar", image : "https://fixthephoto.com/blog/images/uikit_slider/male-photo-edited-by-fixthephoto-service_1649799173.jpg" },
    { name: "Shrey", mobile: 7171717171, city: "Vidisha", address: "Sanchi Road", image : "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg" },
    { name: "Gourav", mobile: 6161616161, city: "Vidisha", address: "Godavri greens", image : "https://images.unsplash.com/photo-1624395213043-fa2e123b2656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80" },
    { name: "Tuk-tuk", mobile: 9292929292, city: "Vidisha", address: "Royal city", image : "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }
];

var clutter = "";
users.forEach((user, index) => {
    clutter += `<div class=${"card"}>
    <h1>${user.name}</h1>
    <img src=${user.image}></img>
    <button class=${"details"} id=${index}>View Details</button>
    <div class="moreDetails" id=details-${index}>
    <p>City : ${user.city}</p>
    <p>Mobile no. : ${user.mobile}</p>
    <p>Address : ${user.address}</p>
    </div>
    </div>`
});


document.querySelector("#main").innerHTML = clutter;

const details = document.querySelector(".details");
const moreDetails = document.querySelectorAll(".moreDetails");
const main = document.querySelector("#main");

var flag = 0;
main.addEventListener("click", (dets) => {
    var something = document.querySelector(`#details-${dets.target.id}`);

    if(flag===0) {
        something.style.display = "block";
        flag = 1;
    } 
    else {
        something.style.display = "none";
        flag = 0;
    }
});
