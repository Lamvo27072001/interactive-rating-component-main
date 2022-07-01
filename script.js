let numbers = document.getElementsByClassName("number")
let submit = document.getElementById("submit")
let flag = ""
let firstTable = document.getElementById("firstTable")
let secondTabel = document.getElementById("secondTable")
let change = document.getElementById("change")


for (let number of numbers) {
    number.onclick = () => {
        flag = number.innerHTML
        submit.onclick = () => {
            change.innerHTML = `You selected ${flag} out of 5`
            firstTable.style.display = "none"
            secondTabel.style.display = "block"

        }
    }
}