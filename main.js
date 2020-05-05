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
        "ЯРКОЕ И ЗНАКОМОЕ СОЧЕТАНИЕ <br> СВЕЖЕВЫЖАТОГО ЛИМОННОГО И АПЕЛЬСИНОВОГО СОКА  ",
        "СОСТАВ: ОЧИЩЕННАЯ ВОДЫ, СОК АПЕЛЬСИНОВЫЙ,<br> СОК ЛИМОННЫЙ, САХАРНЫЙ СИРОП.",
        "pictures/klassika.svg" 
    );
    prods_set[2] = new prod_obj(
        "pictures/tarhun.png", 
        "ТАРХУН", 
        "НАТУРАЛЬНЫЙ ЭКСТРАКТ ЭСТРАГОНА <br>И СВЕЖЕВЫЖАТЫЙ СОК ЛИМОНА<br>ПОДАРЯТ ПОЗИТИВ И БОДРОСТЬ", "СОСТАВ: ОЧИЩЕННАЯ ВОДА, СВЕЖЕВЫЖАТЫЙ ЛИМОННЫЙ СОК, ЭКСТРАКТ ЭСТРАГОНА, САХАРНЫЙ ПЕСОК.",
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
    let div_prod = document.querySelector('.products');

    function transp(elem, t, callback) {
        let steps = 10;
        let timer_transp = setInterval(function(){
            elem.style.opacity = 1 - 0.1*(10-steps);
            console.log(elem.style.opacity);
            steps--;
            if (steps == 0) {
                clearInterval(timer_transp);
                callback.call(elem);
            }
        }, t);
        
    }
    function transp_off(elem, t) {
        let steps = 100;
        let timer_transp_off = setInterval(function(){
            console.log(elem.style.opacity);
            elem.style.opacity = 0.01 *(100-steps);

           steps--;
            if (steps == 0) {
                clearInterval(timer_transp_off);
            }
        }, t);
    }

    buttonBack.onclick = function () {
        if(i==0) {
            i=2;
        }
        else {
            i--;
        }
        //console.log(div_prod);
        grad.style.backgroundImage = 'url(./' + prods_set[i].grad + ')';
        transp(div_prod, 10, function() {
            name.innerHTML = prods_set [i].name;
            text.innerHTML = prods_set [i].text;
            about.innerHTML = prods_set [i].about;
            pict.src = prods_set [i].pict;
            
            transp_off(div_prod, 10);
        });
        

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
        transp(pict, 10, function() {
            pict.src = prods_set [i].pict;
            grad.style.backgroundImage = 'url(./' + prods_set[i].grad + ')';
            transp_off(pict, 10);
        });
        transp(pict, 10, function() {
            pict.src = prods_set [i].pict;
            transp_off(pict, 10);
        });
    }

    let arrow = document.querySelector('.arrow1');
    arrow.onclick = function () {
        let steps = 100;
        let timer_scroll = setInterval(function(){
            window.scrollBy(0,9);
            steps--;
            if (steps == 0) {
                clearInterval(timer_scroll);
            }
        }, 10);
        
    }
    










}