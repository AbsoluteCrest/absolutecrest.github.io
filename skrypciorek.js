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

/*
function dodajOpcje() {
    // Pobierz wartość z pola tekstowego
    var tekst = document.getElementById('textInput').value;

    // Pobierz tabelę select
    var select = document.getElementById('selectTable');

    // Stwórz nową opcję
    var nowaOpcja = document.createElement('option');
    nowaOpcja.value = tekst;
    nowaOpcja.text = tekst;

    // Dodaj nową opcję na początek tabeli select
    select.add(nowaOpcja, select.options[0]);

    // Wyczyść zawartość pola tekstowego
    document.getElementById('textInput').value = '';
*/