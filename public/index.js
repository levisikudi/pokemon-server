let button = document.querySelector('button')
let body = document.querySelector('body')
let ol = document.createElement('ol')
body.appendChild(ol)

button.addEventListener('click', async () =>{
   let response = await fetch('http://localhost:4000/get_pokemon_data')
   let parsedData = await response.json()
   
    
    parsedData.forEach(data => {
        // let the data sit in an li
        let li = document.createElement('li')
        li.textContent = data.name
        ol.appendChild(li)
        
    });

    
})