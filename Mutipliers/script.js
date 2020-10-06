document.querySelector(`input#botao`).addEventListener(`click`, tabuada)
function tabuada(){
    var tabu = document.getElementById('num')
    var tabua = document.getElementById('seltab')
    if (tabu.value.length == 0){
        window.alert('[ERRO] Valor Invalido')
    } else {
        var n = Number(tabu.value)
        tabua.innerHTML = ""
        for (var tab = 1; tab <= 10; tab++){
            var item = document.createElement('option')
            item.text = `${n} x ${tab} = ${n * tab}`
            item.value = `tabua${tab}`
            tabua.appendChild(item)
        }       
        /* var n = Number(tabu.value)
        var tab = 1
        while (tab <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${tab} = ${n*tab}`
            tabua.appendChild(item)
            tab++
        }*/
    }
}   
