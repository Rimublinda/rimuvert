function convertToJson(list) {
    let ArrayConverted = [];
    let tituloName = list[0];
    list.shift();
    ArrayConverted.push({
        titulo: tituloName,
        list: list
    });
    return ArrayConverted
}

export default convertToJson;