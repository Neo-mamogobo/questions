document.getElementById(`button`).addEventListener(`click`, () => {document.getElementById(`student`).textContent="Hello Gift";})
document.getElementById(`color`).addEventListener(`click`, () => {document.getElementById(`bbr`).style.backgroundColor = "lightskyblue"; })
document.getElementById(`hide`).addEventListener(`click`, () => { const info = document.getElementById(`information`)
    if (info.style.display === `none`){
        info.style.display = `block`;
    }else {
        info.style.display = `none`;
        
    }
})

document.getElementById(`Heading`).addEventListener(`click`, () => {document.getElementById(`head1`).style.color = `red`; document.getElementById(`head2`).style.color = "blue";});

let count = 0;
const number = document.getElementById(`number`);
document.getElementById(`increase`).addEventListener(`click`, () => {count++; number.textContent = count});
document.getElementById(`decrease`).addEventListener(`click`, () => {count--; number.textContent = count});

let score = 0;
const buttons = document.querySelectorAll(`.option`)
buttons.forEach(button => {button.addEventListener(`click`, () => {
    if (button.textContent === `Paris`){
        score++ 
        document.getElementById(`score`).textContent = score;
    }else{
        score--
        document.getElementById(`score`).textContent = score;
    }})
    
});
    




    



