const todoComponent = {
  template: `<p>{{title}}</p>
                <p>todo id {{id}}</p>
            `,

  props: {
    title: String,
    id: Number,
  },
};

export const mainCore = {
  //   data: () => ({
  //     mensaje: "Hola mundo con arrow functions",
  //   }),

  data: function () {
    return {
      classInactiva: "inactive",
      pedido: {
        id: crypto.randomUUID().slice(0, 3),
        status: true,
        date: new Date().toISOString(),
        nombrePedido: "",
        cantidad: "",
        precio: "",
      },

      listaPedidos: [],
      cantPedidos: null,
      todos: null,
    };
  },
  components: {
    todo: todoComponent,
  },
  methods: {
    fetchHandler: function () {
      fetch("https://jsonplaceholder.typicode.com/todos", {})
        .then((res) => res.json())
        .then((data) => (this.todos = data))
        .catch((err) => console.log({ err }));
    },
    pedidoHandler: function () {
      let newPedido = this.pedido;
      this.listaPedidos.push(newPedido);
      this.pedido = {
        id: crypto.randomUUID().slice(0, 3),
        status: true,
        date: new Date().toISOString(),
        nombrePedido: "",
        cantidad: "",
        precio: "",
      };
      console.log(this.listaPedidos);
    },
    deleteHandler: function (id) {
      const validation = prompt(`Para borrar ingrese el siguiente valor : 
        ${id}`);
      if (validation != id) {
        return;
      }
      this.listaPedidos = this.listaPedidos.filter((pedido) => pedido.id != id);
    },
  },

  computed: {
    listaPedidosCantidad() {
      return this.listaPedidos.length;
    },
  },
  watch: {
    listaPedidosCantidad: {
      handler: function (init, final) {
        this.cantPedidos = this.listaPedidos.length;
      },
      deep: true,
    },
  },
};
