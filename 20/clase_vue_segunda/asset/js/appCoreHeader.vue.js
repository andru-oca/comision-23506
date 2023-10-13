const headerLogo = {
    template: `
    <div>
        <img :src="logoUrl" :class="style" >
    </div>
    `,
    data: () => ({
        logoUrl: "./asset/media/logo.png",
        style: "logo",
    }),
};

const section = {
    template: `
    
    <li>
        <a :href="link" >{{nombre}}</a>
    </li>
    
    `,

    props: {
        nombre: String,
        link: String,
    },
};

export const appCoreHeader = {
    data: () => ({
        sections: [
            {
                nombre: "home",
                link: "#home",
            },
            {
                nombre: "beer",
                link: "#beer",
            },
            {
                nombre: "contact",
                link: "#contact",
            },
        ],
    }),
    components: {
        logo: headerLogo,
        place: section,
    },
};
