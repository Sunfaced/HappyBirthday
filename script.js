let arr = ['Счет с биткоинами', 'Пожать соточку', 'Найти любовь всей жизни', 'Полностью реализоваться в программировании',
'Сохранять свой фирменный позитив', 'Помогать Саньку в изучении программирования!!', 'С достоинством переживать похмелье',
 'Не облысеть', 'Сделать тройное сальто', 'Записать альбом', 'Сняться в кино', 'И много много всего еще)']
let newArr = []

const ulUse = document.querySelector('.addHB')

const firstBtn = document.querySelector('.one')
const secondBtn = document.querySelector('.two')
const thirdBtn = document.querySelector('.three')
const funcBtn = document.querySelector('.funcBtn')
const textH1 = document.querySelector('.start')

firstBtn.addEventListener('click', function(){
    firstBtn.classList.add('btnNone')
    alert('Не та кнопка что ли...?')
    secondBtn.classList.remove('btnNone')

})

secondBtn.addEventListener('click', function(){
    secondBtn.classList.add('btnNone')
    alert('Бля, сорян, что-то не то скодил, ща!')
    thirdBtn.classList.remove('btnNone')
    
})


thirdBtn.addEventListener('click', useArr)

function useArr(index){
    let oneArrElem = arr.splice(0,1)
       
    
    const randHB = `<li>
                    ${oneArrElem}
                    </li>`
                    
    ulUse.insertAdjacentHTML('beforeend', randHB)
    if(arr.length >=1){
        thirdBtn.innerText = 'ВО, КРАСАВЧИК! ЖМИ ЕЩЕ!!))'
    }else{
        // thirdBtn.innerText = 'Хватит с тебя на сегодня, поздравляем!!! =)))'
        const myImg = document.querySelector('#myImg')
        myImg.src = './img/GM.jpg'
        myImg.style.width = '1400px'
        myImg.style.height = '600px'
        funcBtn.style.display = 'none'
        
        textH1.textContent = 'Поздравляееееееееееееееееееееееееееееееееееееееееееееееем!!!!!!!!!! =))))))))'
        

}

}