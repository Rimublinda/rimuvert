function separateByValue(array, valueToBeSeparated = '-fim-') {
    let EndsPositions = [];
    array.forEach((item, index) => {
        if (item === '-fim-') {
            EndsPositions.push(index);
        }
    });
    
    let list = []
    list.push(array.slice(EndsPositions[EndsPositions.length - 1], EndsPositions[EndsPositions.length]));
    list[0].shift()
    return list[0];
}

function formatList(list) {
    let VeryTitle = list.split('_');
    if (VeryTitle.length == 3) {
        let arrayFormated = [];
        let arrayBrute = list.split('#');
        arrayBrute.shift();
        arrayBrute.forEach(el => {
            let numberSeparete = el.split('.');
            arrayFormated.push(numberSeparete[1].trim());
        });
        let ArrayLast = separateByValue(arrayFormated)
        
        return {
            list: ArrayLast,
            title: VeryTitle[1]
        };
    } else {
        let arrayFormated = [];
        let arrayBrute = list.split('#');
        arrayBrute.shift();
        arrayBrute.forEach(el => {
            let numberSeparete = el.split('.');
            arrayFormated.push(numberSeparete[1].trim());
        });
        let ArrayLast = separateByValue(arrayFormated)
        return {
            list: ArrayLast,
            title: false
        };
    }
}

export default formatList;