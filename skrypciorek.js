function pobieranie () {

    let txt = document.getElementById('lol').value;
    let slct = document.getElementById('bombaa');
    let opts = document.createElement('option');
    opts.value=txt;
    opts.text=txt;
    slct.add(opts, slct.options[0]);
    document.getElementById('lol').value='';
    
    
}

document.addEventListener('keydown', event=>{
    if (event.key === 'Enter') {
        pobieranie();
}
})

//const pobieranie = ()=>{} inny zapis funkcji
