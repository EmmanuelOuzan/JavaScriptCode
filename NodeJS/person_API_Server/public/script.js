axios.get('/person')
.then(result => {
    for (const key in result.data) {
        document.querySelector(`.person_list`).innerHTML += `
        <div class='person_item'>
        <b><li> ${result.data[key].fname} ${result.data[key].lname} </li></b><br>
        <li> ${result.data[key].age} </li>
        <li> ${result.data[key].city} </li>
        <span class="dot" style="background-color:${result.data[key].eyeColor}"></span>
        </div>`
    }
    console.log(result.data)
})

function getAll() {
    axios.get('/person')
        .then(result => {
            document.querySelector('#box')
                .innerHTML = JSON.stringify(result.data)
        })
}

document.querySelector('#getList')
    .onclick = () => {
        getAll()
    }

document.querySelector('#addPerson')
    .onclick = () => {
        const values = {
            "firstName": "vv",
            "lastName": "ouzan",
            "age": 26,
            "city": "Jerusalem",
            "eyeColor": "blue"
        }
        axios.post('/person', values)
            .then(result => {
                getAll()
            })
    }