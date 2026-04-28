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
          fontFamily: "poppins, sans-serif",
          letterSpacing: "14px",
          width: "100%",
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
          fontFamily: "poppins, sans-serif",
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
