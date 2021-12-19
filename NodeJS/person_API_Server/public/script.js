async function getAll() {
    const result = await axios.get('/person')
    render(result.data)
}
getAll()

// My code ! It's great but yossef is better
function render(arr) {
    axios.get('/person')
        .then(result => {
            document.querySelector('.person_list').innerHTML = " "
            arr.forEach(element => {
                document.querySelector(`.person_list`).innerHTML += `
        <div class='person_item'>
        <button class="X" onclick="deletePerson('${element.uniq_ID}')" >X</button>
        <b><li> ${element.fname} ${element.lname} </li></b><br>
        <li> ${element.age} </li>
        <li> ${element.city} </li>
        <div class="right">
        <span class="dot" style="background-color:${element.eyeColor}"></span>
        </div>
        
        </div>`
            });
        })
}

// TO learn 
document.querySelector('form')
    .onsubmit = (event) => {
        // Remove default behaivor 
        event.preventDefault()
        // target = ?
        const form = event.target
        console.log(form)
        const values = Object.values(form)
            .reduce((acc, curr) => {
                const { value, name } = curr
                return name ? { ...acc, [name]: value } : acc
            }, {})

        addPerson(values)
    }

async function addPerson(values) {
    await axios.post('/person', values)
    getAll();
}

// Why not getall();
// 1. On Click - X action ->
// 2. Open function delete
// 3. Axios.delete request the same app
// on click the X element and delete generate a delete
// Then Axios Delete

async function deletePerson(uniq_ID) {
    await axios.delete(`/person/${uniq_ID}`)
    getAll()
}
async function send_search() {
    const search_value = document.querySelector('#search_box').value
    const search_result = await axios.get(`/person/search/${search_value}`)
    console.log(search_result.data)
    renderFindings(search_result.data)
}

// Pressing Enter event listener
// If i want to do input event :Writes on down
const input = document.querySelector('#search_box');
const log = document.getElementById('values');
// ADD
// keydown for enter
// make it write with 
// 1. minimum letters
// 2. timeout of few seconds to send results
input.addEventListener('input', updateValue);
input.addEventListener('keydown', updateValue2);

function updateValue(e) {
    log.textContent = e.target.value;
}
function updateValue2(e) {
    log.textContent = e.target.value;
    console.log(e.key);
    if (e.key == 'Enter') {
        send_search()
    }
}
// Yossef map with my upgrades :)
function renderFindings(arr) {
    console.log(arr)
    document.querySelector('.search_results').innerHTML =
        `<h1> Search Results! </h1>` +
        arr.map(p => `
        <li class="results_li">
        <strong>${p.fname} ${p.lname}</strong>
        <div class="details">
            <div>
                <span>${p.age}</span>
                <span>${p.city}</span>
            </div>
            <div>
                <div class="dot" style="background-color: ${p.eyeColor};"></div>
            </div>
        </div>
    </li>`).join('')
}

// Mission:

// 1.Create element input box with search
// 2. Connect the search into a function with the value
// 3. Call Axios from the function with the value
// 4. Create a listener with express at the router
// 5. Create a function to filter the array with string
// 6. Return with express the value - Get it with Axios
// 7. Add the result to the page with new Inner HTML
