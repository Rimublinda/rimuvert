async function SendDataToSheets(link, type, list, title) {
    if (type == 'No Array') {
        let VeryTitle = title == false ? 'sem titulo' : title;
        await fetch(link, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo: VeryTitle, lista: list })
        })
        await fetch(link, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo: VeryTitle, lista: '-fim-' })
        })
    } else {
        await list.forEach(async el => {
            await fetch(link, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ titulo: title, lista: el })
            })
        });
        fetch(link, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ titulo: VeryTitle, lista: '-fim-' })
        })
    }
}

export default SendDataToSheets;