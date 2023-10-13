const orden = {
    id: "",
    nombre: "",
    pedido: "",
    direccion: "",
    total: "",
    valorEnvio: "",
    hora: "",
    status: "",
};

export const appCoreMain = {
    data() {
        return {
            recibeOrden: false,
            orden: orden,
            listaElementos: [],
            listaDeOrdenes: [],
            cantPedidos: null,
        };
    },
    mounted() {
        this.listaElementos = Object.keys(this.orden);
    },

    methods: {
        agregar(e) {
            e.preventDefault();
            let newPedido = {
                ...this.orden,
                ...{
                    id: crypto.randomUUID(),
                    hora: new Date(Date.now()).toISOString(),
                },
            };
            this.listaDeOrdenes.push(newPedido);
            this.orden = {
                id: "",
                nombre: "",
                pedido: "",
                direccion: "",
                total: "",
                valorEnvio: "",
                hora: "",
                status: "",
            };
        },
        deleteItem(key) {
            const validation = prompt(`
            Para borrar el item ingrese :
            ${key}
            `);

            if (validation == key) {
                this.listaDeOrdenes = this.listaDeOrdenes.filter(
                    (el) => el.id != key
                );
            }

            return null;
        },
    },
    computed: {
        ordeneslength() {
            return this.listaDeOrdenes.length;
        },
    },
    watch: {
        ordeneslength: {
            handler: function (init, final) {
                this.cantPedidos = this.listaDeOrdenes.length;
            },
            deep: true,
        },
    },
};
