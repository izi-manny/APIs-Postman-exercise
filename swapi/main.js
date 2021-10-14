const alderaanResBtn = document.querySelector('#residents-button')
const container = document.querySelector('#containers')
const nameCont = document.querySelector('#name-container')
const baseURL = 'https://swapi.dev/api/'


alderaanResBtn.addEventListener('click', swapiData)

function swapiData () {
    axios.get(`${baseURL}/planets/2`)
        .then((res) => {
            // console.log(res.data.residents)
            for (let i = 0; i < res.data.residents.length; i++){
                axios.get(res.data.residents[i])
                    .then((res) => {
                        const resident = document.createElement('li')
                        resident.textContent = res.data.name
                        nameCont.appendChild(resident)
                    })
            }
        })
}