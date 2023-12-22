/* console.log('Hoje é 50tão na conta do wiu'); */

const ContainerCountry = document.getElementById('grid-country')
const inputCountry = document.getElementById('input-country')

console.log('grid-country', 'input-country')


async function RequisiçãoCountry () {
     try {
        const apiRestCountry = await fetch('https://restcountries.com/v3.1/all') //aguarde
        const apiRestCountryConvertida = await apiRestCountry.json() 
        console.log(apiRestCountryConvertida);
        const arrayPaises = apiRestCountryConvertida
        console.log(arrayPaises);
         return arrayPaises
   } catch (erro) {
    console.log(erro)
    return[]
    }  
}



async function filtrarCountry (Paises){
    const arrayCountry = await RequisiçãoCountry()
        if (Paises ==""){
            return arrayCountry
        }else{
            const paisesFiltrados = arrayCountry.filter((pais) => 
            pais.name.common.toLowerCase().includes(Paises.toLowerCase()))
            return paisesFiltrados
    }
}
 


async function MostrarPaises (){
    const arrayPaises = await filtrarCountry(inputCountry.value)
    console.log(arrayPaises);
    const cardPaises = arrayPaises.map((pais) => {
        return `
                <div class="card-container ${pais.region}"> 
                    <img src="${pais.flags.png}" alt="">    
                <div class="card-texto ${pais.region}">
                        <h2>${pais.name.common}</h2>
                        <hr>
                        <div>
                            <h3>População:</h3>
                            <p>${pais.population}</p>
                        </div>
                        <div>
                            <h3>Capital:</h3>
                            <p>${pais.capital === undefined ? 'Não consta' : pais.capital}</p>
                        </div>
                        <div>
                            <h3>Continente:</h3>
                            <p>${pais.continents}</p>
                        </div>
                        <div>
                            <h3>Sigla:</h3>
                            <p>${pais.fifa === undefined ? 'Não consta' : pais.fifa}</p>
                        </div>
                    </div>
                </div>
        `

    })
    ContainerCountry.innerHTML = cardPaises.join('')
}
MostrarPaises()
inputCountry.addEventListener('keyup', MostrarPaises)
    
    
 