function currentDate() {
    const d = new Date();
    document.getElementById("date").value = d;
}

function tableCreate(json) {
    const output = document.querySelector("output");
    const myObj = json;
    let text = "<table border='1'>"
    for (let x in myObj) {

        if (JSON.stringify(myObj[x]) != "{}") {

            if (typeof (myObj[x]) === "string") {
                text += `<tr><td> <b>${x}</b> : ${myObj[x]} </td></tr>`;
            } else {

                const innerObj = myObj[x];

                for (let y in innerObj) {
                    if (JSON.stringify(innerObj[y]) != "{}") {
                        text += `<tr><td> <b>${y}</b> : ${innerObj[y]} </td></tr>`;
                    } else {
                        text += `<tr><td> <b>${y}</b> : Empty! </td></tr>`;
                    }
                }


            }

        } else {
            text += `<tr><td> <b>${x}</b> : Empty! </td></tr>`;
        }

    }
    text += "</table>"
    output.innerHTML = text;
}

export {tableCreate, currentDate};