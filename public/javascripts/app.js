// Import json file: 使用JSON檔案提取專案資料
// import data_json from "/data.json" assert{type:"json"};

const gitHubName = "PROJECT-PET-ADOPTION";
import data_json from "/PROJECT-PET-ADOPTION/data.json" assert{type:"json"};

// extraction the json file
const pets = data_json.pets;


// target the element
const dataPanel = document.querySelector("#data-panel-petlist");


// 置入動物照片
// album: design the function
function renderPetlist(data) {
  let rawHTML = "";
  console.log("存放在JSON檔案的資料:",pets);

  data.forEach(item => {
    rawHTML += `
      <div class="card">
            <img src="${item.image}" alt="${item.name}" class="card-img">
            <div class="card-text">
              <h3 class="card-title">${item.name}</h3>
              <p class="card-description">${item.age}</p>
            </div>
          </div>
    `
  })
  dataPanel.innerHTML = rawHTML;
}

// album: initiate the function
renderPetlist(pets);



// Design the dark mode function
// target the event
const darkmodeToggle = document.querySelector("#darkmode-toggle");

// design the handler
const darkmodeToggleHandler = event => {
  if(event.target.checked){
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// bind the event
darkmodeToggle.addEventListener("change", darkmodeToggleHandler);

