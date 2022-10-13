const mainList = document.getElementById('ul')
const main = document.getElementById('main')
const buttonsDiv = document.getElementById('btnDiv')
const sectionButtons = document.getElementById('section-2')
const sectionRange = document.getElementById('section-3')
const rangeValueDiv = document.getElementById('rangeValueDiv')

let arrMusicFilter = []
let enteringSiteMusicList = [...products]


function renderList(list){
    
    if(list.length === 0){  
        return creatingEmptyList()
    }else{
        return creatingMainList(list) 
    }   
}

function creatingMainList(array){
    array.forEach(element => {
        const listItems = document.createElement('li')
        const itemImg = document.createElement('img')
        const itemDivOne = document.createElement('div')
        const itemDivTwo = document.createElement('div')
        const itemDivTwoSpanOne = document.createElement('span')
        const itemDivTwoSpanTwo = document.createElement('span')
        const itemTitle = document.createElement('h2')
        const itemDivThree = document.createElement('div')
        const itemDivThreeSpan = document.createElement('span')
        const itemDivThreeBtn = document.createElement('button')
    
        listItems.classList = 'section-4_li'
        itemImg.classList = 'card_img'
        itemDivOne.classList = 'card_div-1'
        itemDivTwo.classList = 'card_div-2 flex_row gap-1'
        itemDivTwoSpanOne.classList = 'card_tag text-2'
        itemDivTwoSpanTwo.classList = 'card_tag text-2'
        itemTitle.classList = 'card_title title-1'
        itemDivThree.classList = 'card_div-3 flex_row justify_between'
        itemDivThreeSpan.classList = 'card_name title-1'
        itemDivThreeBtn.classList = 'card_btn'
        
        itemImg.src = element.img 
        itemDivTwoSpanOne.innerText = element.band
        itemDivTwoSpanTwo.innerText = element.year
        itemTitle.innerText = element.title
        itemDivThreeSpan.innerText = `R$ ${element.price},00`
        itemDivThreeBtn.innerText = "Comprar"

        itemDivThree.append(itemDivThreeSpan, itemDivThreeBtn)
        itemDivTwo.append(itemDivTwoSpanOne, itemDivTwoSpanTwo)
        itemDivOne.append(itemDivTwo, itemTitle, itemDivThree)
        listItems.append(itemImg, itemDivOne)  
        mainList.append(listItems) 
    });
   return main.append(mainList) 
}

function creatingEmptyList(){
        let emptyDiv = document.createElement('div')
        let emptyParagraph = document.createElement('p')

        emptyParagraph.classList = 'title-2'
        emptyParagraph.innerText = 'Não encontramos nada correspondente a sua pesquisa em nosso site :('
        emptyDiv.append(emptyParagraph)
        return mainList.append(emptyDiv)     
}

function creatingRangeInput(productsList){
    let rangeInput = document.createElement('input')
    let rangeValue = document.createElement('span')
    let listOrganized = productsList.sort((a,b) => a.price - b.price)

    rangeInput.setAttribute('id', 'rangeInput')
    rangeInput.setAttribute('type', 'range')
    rangeInput.setAttribute('min', `${rangeInput.min = listOrganized[0].price}`)
    rangeInput.setAttribute('max', `${rangeInput.max = listOrganized[listOrganized.length-1].price}`)
    rangeInput.value = 100
    rangeValue.innerText = `Até R$ ${listOrganized[listOrganized.length-1].price},00`
    rangeValue.setAttribute('id', 'rangeValue')
    rangeValue.classList = 'text-1'

    rangeValueDiv.append(rangeValue)
    sectionRange.append(rangeInput)
}

function creatingFilterRange(){
    let rangeInput = document.getElementById('rangeInput')
    let rangeValue = document.getElementById('rangeValue')
    
    rangeInput.addEventListener('mousemove', () =>{
        mainList.innerHTML = ''
        rangeValue.innerText = `Até R$ ${rangeInput.value},00`   
        let filteredList = arrMusicFilter.filter(object => object.price <= rangeInput.value)
        let filteredFullMusicList = enteringSiteMusicList.filter(object => object.price <= rangeInput.value)
        if(enteringSiteMusicList.length != 0){
            renderList(filteredFullMusicList)
        }else{
            if(arrMusicFilter.length != 0) {
                renderList(filteredList)
            }else{
                renderList(enteringSiteMusicList)
            }
        }
    })
}

function creatingButtonsAndFilter(categories, filterList){

    let rangeInput = document.getElementById('rangeInput')

    categories.forEach(genre => {    
        let buttonfilter = document.createElement('button')
       
       
        buttonfilter.classList = 'button .dark'

        buttonfilter.innerText = genre
    
        buttonfilter.addEventListener('click', (event) =>{
            event.preventDefault()
            mainList.innerHTML = ''
            enteringSiteMusicList = []
            arrMusicFilter = []

            let filteredCategory = filterList.filter(object => object.category.includes(genre))
            let filterPrice = filteredCategory.filter(object => object.price <= rangeInput.value)    
            let filterPriceAllProducts = filterList.filter(object => object.price <= rangeInput.value) 

            if(buttonfilter.innerText == 'Todos'){
                renderList(filterPriceAllProducts)

                filterList.forEach((element) =>{             
                    arrMusicFilter.push(element)
                })   
            }else{
                renderList(filterPrice) 

                filteredCategory.forEach((element) =>{             
                    arrMusicFilter.push(element)
                })   
            }   
        })
        buttonsDiv.append(buttonfilter)
    })
    return sectionButtons.append(buttonsDiv)
}


renderList(enteringSiteMusicList.sort((a,b) => a.price - b.price))
creatingRangeInput(products)
creatingFilterRange()
creatingButtonsAndFilter(categories, products)






