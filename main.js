// Descrizione
// Partendo da un array di immagini, 
// realizziamo uno slider con Vue.js come da mockup
// Al click delle freccette "sinistra" e "destra" lo slider cambierà 
// l'immagine visibile passando alla successiva oppure alla precedente.
// Consigli
// Ricordiamoci come visualizzare un singolo elemento alla volta di un array
// Attenzione
// Quando le immagini terminano, lo slider ricomincerà dalla prima
// Bonus
// applicare l'autoplay allo slider: ogni 3 secondi, 
// cambia immagine automaticamente 
// ( riguardare la documentazione su i lifecycle hooks )
// Al click su un pallino verrà visualizzata l'immagine di riferimento
//  associata ( il terzo pallino sarà associato alla terza immagine e così via..)




var app = new Vue({
    el: '#tutto',
    data: {
        immagini: ["https://www.chimerarevo.com/wp-content/uploads/2020/04/immagini-gratis.jpg", "https://www.venetoformazione.it/wp-content/uploads/2022/02/ottimizzare-immagini-display-retina.jpg",
            "https://www.pantareinews.com/wp-content/uploads/2019/06/come-ritagliare-immagii-in-forme-diverse.jpg", "https://codicicolori.com/images/IMM-BELLE/DASCARICARE/immagini-belle-da-scaricare-luna-mare.jpg"],
        indice: 0,
    },
    methods: {
        slideDestra: function(){
            if(this.indice == (this.immagini.length -1)){
                this.indice = 0;
            } else {
                this.indice ++;
            }
        },

         slideSinistra: function () {
            if (this.indice == 0) {
                this.indice = this.immagini.length - 1;
            } else {
                this.indice--;
            }
        }
    }
});