let data = document.querySelector('.advice')
let adviceCount = document.querySelector('.advice-count')
const reload = document.querySelector('.reload-data')
const loading = document.querySelector('.lds-roller')
const container = document.querySelector('.main-content')


/* Page onload */
window.addEventListener('load', ()=>{
    setInterval(()=>{
        container.style.display = 'block'
        loading.style.display = 'none'
    }, 2500)
})

/* Fetch data from api */
const loadData = async () =>{
    const advice = await axios.get('https://api.adviceslip.com/advice')
    /* passing data from api */
    fetchData(advice)
}

/* data from the api */
function fetchData(advice){
    data.innerHTML = '"'+advice.data.slip.advice +'"'
    adviceCount.innerHTML = advice.data.slip.id 
}


/*reloading data from the api */
reload.addEventListener('click',  function(){
    container.style.display = 'none'
    loading.style.display = 'block'
    loadData()
})

/* loading data on page load */
loadData()