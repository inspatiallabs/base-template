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
      //   ...WidgetThemeProp.get(),
    },
    defaultSettings: {
      format: "hero",
      //   radius: "none",
      //   size: undefined,
      //   padding: undefined,
      //   margin: undefined,
      //   space: undefined,
      //   effect: "none",
      //   material: "flat",
      //   color: "none",
      //   background: "",
      //   cursor: "auto",
      //   axis: "x",
      //   disabled: false,
    },
  }),

  /*===================== Logo ======================*/
  logo: createStyle({
    name: "landing-logo",
    base: [
      {
        web: {
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          fontSize: "3rem",
        },
        ios: {
          fontSize: "20px",
        },
        android: {
          fontSize: "20px",
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
          fontSize: "52px",
          fontFamily: "poppins",
          letterSpacing: "14px",
          width: "100%",
          color: "white",
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
          fontSize: "18px",
          fontFamily: "poppins",
          color: "brand",
        },
      },
    ],
  }),
};
