export const mainAppCore = {
  data: function () {
    return {
      API: "https://sheetdb.io/api/v1/dqu2afl50gp3l",
      API_LOCAL: "./asset/js/recetas.api.json",
      recetas: null,
      errorRecetas: null,
    };
  },

  //   mounted: function () {
  //     fetch(this.API, {})
  //       .then((response) => response.json())
  //       .then((data) => (this.recetas = data))
  //       .catch((error) => console.log({ error }));
  //   },

  methods: {
    // recetasHandler: async function () {
    //   try {
    //     const response = await fetch(this.API_LOCAL, {});
    //     this.recetas = await response.json();
    //   } catch (error) {
    //     this.errorRecetas = "oops! algo salió mal";
    //   }
    // },

    recetasHandler: async function () {
      try {
        const response = await axios.get(this.API_LOCAL);
        this.recetas = await response.data;
      } catch (error) {
        this.errorRecetas = "oops! algo salió mal";
      }
    },
  },
};
