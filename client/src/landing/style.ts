import { createStyle } from "@inspatial/kit/style";
// import { WidgetThemeProp } from "@inspatial/kit/theme";

/*################################(CREATE STYLE)################################*/

export const LandingStyle = {
  /*===================== Root ======================*/
  root: createStyle({
    name: "landing",
    base: [
      {
        web: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          minWidth: "100vw",
        },
      },
    ],
    settings: {
      format: {
        base: [
          {
            web: {
              background: "background",
            },
          },
        ],
        hero: [
          {
            web: {
              backgroundImage: "url('./asset/hero.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              boxShadow: "",
            },
          },
        ],
        // Add more formats here...
      },
    },
    defaultSettings: {
      format: "hero",
    },
  }),

  /*===================== Logo ======================*/
  logo: createStyle({
    name: "landing-logo",
    base: [
      {
        web: {
          display: "block",
          height: "auto",
          objectFit: "contain",
          "@media (min-width: 640px)": {
            width: "220px",
          },
          "@media (min-width: 768px)": {
            width: "280px",
          },
          "@media (min-width: 1024px)": {
            width: "400px",
          },
          "@media (min-width: 1280px)": {
            width: "460px",
          },
          "@media (min-width: 1536px)": {
            width: "520px",
          },
          "@media (max-width: 1536px)": {
            width: "460px",
          },
          "@media (max-width: 1280px)": {
            width: "400px",
          },
          "@media (max-width: 1024px)": {
            width: "320px",
          },
          "@media (max-width: 768px)": {
            width: "240px",
          },
          "@media (max-width: 640px)": {
            width: "168px",
          },
        },
        ios: {
          width: "168px",
          maxWidth: "38vw",
        },
        android: {
          width: "168px",
          maxWidth: "38vw",
        },
      },
    ],
  }),

  /*===================== Title ======================*/
  title: createStyle({
    name: "landing-title",
    base: [
      {
        web: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "poppins",
          letterSpacing: "14px",
          width: "100%",
          color: "white",
          "@media (min-width: 640px)": {
            fontSize: "24px",
          },
        },
      },
    ],
  }),

  /*===================== Description ======================*/

  description: createStyle({
    name: "landing-description",
    base: [
      {
        web: {
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontFamily: "poppins",
          color: "white",
        },
      },
    ],
  }),

  /*===================== Link ======================*/

  link: createStyle({
    name: "landing-link",
    base: [
      {
        web: {
          display: "flex",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          fontFamily: "poppins",
          color: "#04bade",
          textDecoration: "unset",
        },
      },
    ],
  }),
};
