// Enable all tooltips on the page
const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.forEach(tooltipTriggerEl => {
  new bootstrap.Tooltip(tooltipTriggerEl);
});


let password = document.getElementById("password");
let copyIcon = document.getElementById("copy");
let generateBtn = document.getElementById("generateBtn");
let passLength = 12;

generateBtn.addEventListener("click", ()=>{
    let password_value = ""
    
    let randoms = [
        [48, 57],
        [65, 90], 
        [97, 122],
        [33, 47], 
        [58,64], 
        [91, 96], 
        [123, 126] 

    ]
    let i =0 
    while (i < passLength){

        let randVal = Math.floor(Math.random()*randoms.length)
        let maxi = randoms[randVal][1]
        let mini = randoms[randVal][0]

        let ascii = Math.floor(Math.random()*(maxi-mini + 1))+mini;
        password_value += String.fromCharCode(ascii);
        i = i + 1;
        

    }
   
    password.value = password_value


})

copyIcon.addEventListener("click", () => {
    // clicked background effect
    copyIcon.classList.add("clicked");

    // Copy to clipboard
    navigator.clipboard.writeText(password.value);

    // Show Bootstrap tooltip
    const tooltipInstance = bootstrap.Tooltip.getOrCreateInstance(copyIcon);
    tooltipInstance.show();

    // Remove click effect + hide tooltip after delay
    setTimeout(() => {
        copyIcon.classList.remove("clicked");
        tooltipInstance.hide();
    }, 800); // 0.8 sec matches tooltip timing
});


