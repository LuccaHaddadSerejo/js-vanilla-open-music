const sectionDarkModeBtn = document.getElementById('sectionDarkMode');
const bodyJS = document.querySelector('.body')
let theme = 'dark'
let darkMode;

function themeChange(){
    const btnDarkMode = document.createElement('button')
    let btnImg = document.createElement('img')

    btnDarkMode.classList = 'section-1_btn'

    btnImg.src = '../../assets/img/moon.svg'
    btnImg.id = 'moonSun'

    btnDarkMode.append(btnImg)
    sectionDarkModeBtn.append(btnDarkMode)
   
    btnDarkMode.addEventListener('click', ()=>{      
        changeTheme = bodyJS.classList.toggle(theme)
        darkMode = !darkMode
        changeDarkBtnImg()
        JSON.stringify(localStorage.setItem(theme, darkMode))     
    })
}

function changeDarkBtnImg(){
 
    let imgMoonSun = document.getElementById('moonSun')
    if(darkMode){
        imgMoonSun.src = '../../assets/img/sun.svg'
    }else{
        imgMoonSun.src = '../../assets/img/moon.svg'
    }
}

function usertheme(){
    darkMode = JSON.parse(localStorage.getItem(theme));
    if (darkMode) {
        changeDarkBtnImg()
        bodyJS.classList.add(theme);
    }else{
        changeDarkBtnImg()
    }
}


themeChange()

usertheme()