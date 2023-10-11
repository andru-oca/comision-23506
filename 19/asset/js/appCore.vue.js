import users from "./userdb.json" assert { type: "json" };

export const appCore = {
  data: function () {
    return {
      count: 10,
      message: "Bienvenido",
      saludoFormal: `<b>sr/sra</b>`,
      display: true,
      users: users,
      claseHover: "",
    };
  },
};
