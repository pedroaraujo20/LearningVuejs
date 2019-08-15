let app = new Vue({
    el:'#app',
    data: { 
        nome: '',
        contatos: [],
        aviso: '',
        timer: null,
        nomePronto: false
    },
    watch: {
        nome: function() {
            if(this.timer != null) {
                clearTimeout(this.timer);
                this.aviso = "";
            }

            if(this.nome != '') {
                this.aviso = "Digitando...";
                this.nomePronto = false;
                this.timer = setInterval(this.ficarPronto, 1000);
            }
        }
    },
    computed: {
        totalContatos: function() {
            return `Total de Contatos: ${this.contatos.length}`
        }
    },
    methods: {
        ficarPronto: function() {
            this.aviso = '';
            this.nomePronto = true;            
        },
        addContato: function() {
            this.contatos.push(this.nome);
            this.nome = '';
            this.nomePronto = false;
        }
    },
});


