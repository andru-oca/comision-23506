export const mainAppCore = {
  data: function () {
    return {
      API: "https://rickandmortyapi.com/api/character",
      dataRetrieve: [],
      poolUser: null,
      users: null,
    };
  },

  methods: {
    fetchDataHandler: async function () {
      const response = await fetch(this.API);
      const data = await response.json();
      this.users = data.results;
      this.dataRetrieve = this.users;
    },
    fetchUniqueData: async function (url) {
      this.poolUser = null;
      const response = await fetch(url);
      const data = await response.json();
      this.poolUser = data;
    },
    selectHandler: function (id) {
      this.dataRetrieve = this.users.filter((user) => user.id == id);
    },
  },
};
