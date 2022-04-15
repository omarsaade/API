const api = "https://www.breakingbadapi.com/api/characters";
async function getData() {
    try {
        const response = await fetch(api)
        const data = await response.json();
        /*    const v = Object.entries(data).map(m => m)
            const v = Object.keys(data).map(m => m)
        he tusat5dam badil 3an map w super mhemeeeee
        lezem nesta3mla
            const v = Object.values(data).map(m => m)
   */

        console.log(v);
        // console.log(data);
        printData(data);

    } catch (error) {
        console.log("Error:", error.message);
    }
}


function printData(data) {
    const header = document.querySelector("#header")
    const content = document.querySelector("#content")
    header.innerHTML += `
    <select class="form-control" onchange="getCh(this.value)">
    <option>Please Select</option>
    ${data.map(character => `<option>${character.name}</option>`)}
    </select>
    
    `
}




async function getCh(name) {
    if (name != 'Please Select') {
        const response = await fetch(`${api}?name=${name}`)
        const data = await response.json()

        content.innerHTML = `
    <h2>${data[0].name} (${data[0].nickname})</h2>
    <h4>${data[0].name}</h4>
    <img src="${data[0].img}" width="150"></img>
    `
    }
}






getData()

































// el 7all taba3e kemel meth11
/////////////////////////////////////////////////////////////////
/*async function get() {



    const response = await fetch("https://www.breakingbadapi.com/api/characters");

    const data = await response.json()
    console.log(data);


    data.map(function (actor) {
        // console.log(actor);
    })

    document.querySelector("#content h1").innerHTML = data[0].name
    document.querySelector("#content img").src = data[0].img


    document.querySelector("#actor").innerHTML =
        `<select id="lol" onchange="chango()">
        ${data.map(actor =>
            `<option> ${actor.name}</option>`)
        }
</select>`
}
get()




EL 7all
function chango() {
    var namo = document.querySelector("#lol").value;
    fetch(`https://www.breakingbadapi.com/api/characters?name=${namo}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            document.querySelector("#content h1").innerHTML = data[0].name
            document.querySelector("#content img").src = data[0].img
        })


}

*/


////////////////////////////////////////////////////////////////////////////////////////////////////////


































// async function get() {
//     const response = await fetch("https://www.breakingbadapi.com/api/characters");

//     const data = await response.json()
//     console.log(data);

//     data.map(function (actor) {
//         console.log(actor.name);
//     })




//     document.querySelector("#content h1").innerHTML = data[0].name
//     document.querySelector("#content h5").innerHTML = data[0].birthday
//     document.querySelector("#content img").src = data[0].img


//     document.querySelector("#actor").innerHTML =
//         `<select id="lol" onchange="chango()">
// ${data.map(actor =>
//             `<option> ${actor.name}</option>`)
//         }
// </select>
// `

// }

// get()



// function chango() {
//     let m = document.querySelector("#lol").value;

// }