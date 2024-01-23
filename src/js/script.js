import * as convert from "./import/convertImport.js";
import * as formatList from "./export/formatedList.js";
import * as SendDataToSheets from "./export/SendDataToSheets.js";
const BtnsOptions = document.querySelectorAll(".typeMode");
const ModeDark = document.querySelector('.checkbox');
const copyList = document.querySelector('.copy');
// importar a lista
const optionOne = document.querySelector(".option-01");
const optionTwo = document.querySelector(".option-02");
const LinkToSheets = document.querySelector("#linkToSheets");
const result = document.querySelector("#result");
// exportar a lista
const LinkApiSheets = document.querySelector("#LinkApiSheets");
const TitleList = document.querySelector("#TitleList");
const TypeList = document.querySelector("#TypeList");
const ListBrute = document.querySelector("#list");

function modInterface(list, type) {
    result.append(`🎞️_${list[0]}_🎞️\n`);
    for (let i = 1; i < list.length; i++) {
        const el = list[i];
        if (el == '-fim-') {
            result.append(`#${'.' + el}\n`);   
        } else {
            result.append(`#${i + '.' + el}\n`);
        }
    }
}

optionOne.addEventListener('submit', async (event) => {
    event.preventDefault();
    let SheetsConverted = await convert.default(LinkToSheets.value);
    modInterface(SheetsConverted);
});

optionTwo.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (TypeList.value == 1) {
        SendDataToSheets.default(LinkApiSheets.value, 'No Array', ListBrute.value);
    } else {
        let ListFormated = formatList.default(ListBrute.value);
        if (ListFormated.title != false) {
            SendDataToSheets.default(LinkApiSheets.value, 'Use Array', ListFormated.list, ListFormated.title);            
        }else{
            SendDataToSheets.default(LinkApiSheets.value, 'Use Array', ListFormated.list, TitleList.value);            
        }
    }
});

BtnsOptions.forEach(el => {
    el.addEventListener('click', () => {
        if (el.value == "option 01") {
            optionOne.classList.toggle('hidde');
            optionTwo.classList.toggle('hidde');
        } else {
            optionOne.classList.toggle('hidde');
            optionTwo.classList.toggle('hidde');
        }
    });

});

ModeDark.addEventListener('change', () =>{
    document.querySelector('body').classList.toggle('dark');
});

copyList.addEventListener("click", () => {
    result.select();
    document.execCommand("copy");
});