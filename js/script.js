let name = document.querySelector(".name");
let caption = document.querySelector(".caption");
let post = document.querySelector(".post");
let nameerror = document.querySelector(".nameerror");
let captionerror = document.querySelector(".captionerror");
let allpost = document.querySelector(".allpost");
let update = document.querySelector(".update");
let arr = [];
let count = 0;


function addData() {
    arr.push({
        name: name.value,
        caption: caption.value
    })
}


function cards() {
    arr.map(item => {
        allpost.innerHTML += `<div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.caption}</p>
                <button type="button" class="btn btn-primary edit">Edit</button>
                <button type="button" class="btn btn-danger delete">Delete</button>
            </div>
        </div>`

        let dltbtn = document.querySelectorAll(".delete");
        let dltconv = Array.from(dltbtn);
        dltconv.map((item, index) => {
            item.addEventListener("click", () => {
                arr.splice(index, 1);
                allpost.innerHTML = "";
                cards();

            })
        })


        let editbtn = document.querySelectorAll(".edit");
        let editconv = Array.from(editbtn);
        editconv.map((item, index) => {
            item.addEventListener("click", () => {
                name.value = arr[index].name;
                caption.value = arr[index].caption;
                count = index;
                update.style.display = "block";
                post.style.display = "none";



            })

        })



    })
}


post.addEventListener("click", function () {
    if (!name.value || !caption.value) {
        nameerror.innerHTML = "*Please enter your name";
        captionerror.innerHTML = "*Please enter caption";
    } else {
        allpost.innerHTML = "";
        addData();
        nameerror.innerHTML = "";
        captionerror.innerHTML = "";
        cards();
        name.value = "";
        caption.value = "";

    }
})

update.addEventListener("click", function () {
    arr[count].name = name.value;
    arr[count].caption = caption.value;
    allpost.innerHTML = "";
    cards();
    update.style.display = "none";
    post.style.display = "block";
})