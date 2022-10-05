const listBands = document.getElementById('ul')
const main = document.getElementById('main')
const buttonsDiv = document.getElementById('btnDiv')
const sectionButtons = document.getElementById('section-2')
const sectionRange = document.getElementById('section-3')
const rangeValueDiv = document.getElementById('rangeValueDiv')

let renderList = (list) => {
    if(list.length == 0){
            let emptyDiv = document.createElement('div')
            let emptyParagraph = document.createElement('p')

            emptyParagraph.classList = 'title-2'
            emptyParagraph.innerText = 'Não encontramos nada correspondente a sua pesquisa em nosso site:('
            emptyDiv.append(emptyParagraph)
            listBands.append(emptyDiv)
    }else{
        list.forEach(element => {
        
            let listItems = document.createElement('li')
            let itemImg = document.createElement('img')
            let itemDivOne = document.createElement('div')
            let itemDivTwo = document.createElement('div')
            let itemDivTwoSpanOne = document.createElement('span')
            let itemDivTwoSpanTwo = document.createElement('span')
            let itemTitle = document.createElement('h2')
            let itemDivThree = document.createElement('div')
            let itemDivThreeSpan = document.createElement('span')
            let itemDivThreeBtn = document.createElement('button')
        
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
            listBands.append(listItems)
        });
       return main.append(listBands) 
    }
}

let creatingRangeInputAndFilter = (list) =>{
    let rangeInput = document.createElement('input')
    let rangeValue = document.createElement('span')
    let listOrganized = list.sort((a,b) => a.price - b.price)

    rangeInput.setAttribute('id', 'rangeInput')
    rangeInput.setAttribute('type', 'range')
    rangeInput.setAttribute('type', 'range')
    rangeInput.setAttribute('min', `${rangeInput.min = listOrganized[0].price}`)
    rangeInput.setAttribute('max', `${rangeInput.max = listOrganized[listOrganized.length-1].price}`)
    rangeValue.innerText = `Até R$ 0,00`
    rangeValue.classList = 'text-1'


    rangeInput.addEventListener('mousemove', () =>{
        listBands.innerHTML = ''
        rangeValue.innerText = `Até R$ ${rangeInput.value},00`  
        let filteredList = list.filter(object => object.price <= rangeInput.value)
        renderList(filteredList)   
    })
  
    rangeValueDiv.append(rangeValue)
    sectionRange.append(rangeInput)
}




let creatingButtonsAndFilter = (buttonList, filterList) => {
    
    buttonList.forEach(genre => {
        let buttonfilter = document.createElement('button')
        let rangeFilter = document.getElementById('rangeInput')
        
        buttonfilter.classList = 'button .dark'

        buttonfilter.innerText = genre
        
        buttonfilter.addEventListener('click', () =>{
            listBands.innerHTML = ''
            let filteredCategory = filterList.filter(object => object.category === genre)
            let filteredPrice = filteredCategory.filter(object => object.price <= rangeFilter.value)
            let filteredPriceAllProducts = products.filter(object => object.price <= rangeFilter.value)

            if(buttonfilter.innerText == 'Todos'){
                return renderList(filteredPriceAllProducts)
            }else{
                return renderList(filteredPrice)
            }        
        })
        buttonsDiv.append(buttonfilter)
    })
    return sectionButtons.append(buttonsDiv)
}


creatingRangeInputAndFilter(products)

creatingButtonsAndFilter(categories, products)

