window.onload = function() {

    function prod_obj(pict, name, text, about, grad) {
        this.pict = pict;
        this.name = name;
        this.text = text;
        this.about = about;
        this.grad = grad;
    }
    let prods_set =[];
    prods_set[0] = new prod_obj(
        "pictures/yabloko.png", 
        "ЯБЛОКО-ШИПОВНИК", 
        "МЫ СОХРАНИЛИ ВСЕ ПОЛЕЗНЫЕ СВОЙСТВА ШИПОВНИКА,<br> ДОПОЛНИВ ЕГО СВЕЖЕВЫЖАТЫМ ЯБЛОЧНЫМ СОКОМ", "СОСТАВ: СОК ЯБЛОЧНЫЙ, СОК ЛИМОНА, <br> СИРОП ИЗ ЯГОД ШИПОВНИКА.",
        "pictures/yabloko.svg" 
    );
    prods_set[1] = new prod_obj(
        "pictures/classic.png", 
        "КЛАССИЧЕСКИЙ", 
        "ЯРКОЕ И ЗНАКОМОЕ СОЧЕТАНИЕ <br> СВЕЖЕВЫЖАТОГО ЛИМОННОГО <br>И АПЕЛЬСИНОВОГО СОКА  ",
        "СОСТАВ: ОЧИЩЕННАЯ ВОДЫ, СОК АПЕЛЬСИНОВЫЙ, СОК ЛИМОННЫЙ, САХАРНЫЙ СИРОП.",
        "pictures/klassika.svg" 
    );
    prods_set[2] = new prod_obj(
        "pictures/tarhun.png", 
        "ТАРХУН", 
        "НАТУРАЛЬНЫЙ ЭКСТРАКТ ЭСТРАГОНА <br>И СВЕЖЕВЫЖАТЫЙ СОК ЛИМОНА<br>ПОДАРЯТ ПОЗИТИВ И БОДРОСТЬ", "СОСТАВ: ОЧИЩЕННАЯ ВОДА, <br> СВЕЖЕВЫЖАТЫЙ ЛИМОННЫЙ СОК, <br>ЭКСТРАКТ ЭСТРАГОНА, <br>САХАРНЫЙ ПЕСОК.",
        "pictures/tarkhun.svg" 
    );
        let i = 0;
    let name=document.querySelector('.name');
    let text=document.querySelector('.text');
    let about=document.querySelector('.about');
    let pict=document.querySelector('.bottle img');
    let grad=document.querySelector('.products');
    let buttonForward = document.querySelector('.arrowRight');
    let buttonBack = document.querySelector('.arrowLeft');
    buttonBack.onclick = function () {
        if(i==0) {
            i=2;
        }
        else {
            i--;
        }
        name.innerHTML = prods_set [i].name;
        text.innerHTML = prods_set [i].text;
        about.innerHTML = prods_set [i].about;
        pict.src = prods_set [i].pict;
        grad.style.backgroundImage = 'url(../' + prods_set[i].grad + ')';
    }

    buttonForward.onclick = function () {
        if(i==2) {
            i=0;
        }
        else {
            i++;
        }
        name.innerHTML = prods_set [i].name;
        text.innerHTML = prods_set [i].text;
        about.innerHTML = prods_set [i].about;
        pict.src = prods_set [i].pict;
    }












}