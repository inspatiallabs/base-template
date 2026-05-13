import { ErrorBoundary } from "@inspatial/kit/control-flow";
import { Widget } from "@inspatial/kit/recursive";
import { iss } from "@inspatial/kit/style";
import { LandingStyle } from "./style.ts";
import type { LandingProps } from "./type.ts";
import { getSection } from "./cloud.ts";

/*################################(WINDOW)################################*/
export function LandingWindow(props: LandingProps) {
  /**************************** (Props) ****************************/
  const { className, class: cls, children, ...rest } = props;
  const logoProps = children?.logo ?? {};
  const titleProps = children?.title ?? {};
  const descriptionProps = children?.description ?? {};
  const linkProps = children?.link ?? {};

  /*************************** (Render) ***************************/
  return (
    <ErrorBoundary>
      <Widget
        is="widget-tree"
        for="window"
        on:mount={() => getSection.run({ data: { name: "hero" } })}
        className={iss(
          LandingStyle.root.getStyle({ className, class: cls, ...rest }),
        )}
        children={[
          {
            is: "structure/view",
            children: {
              style: {
                web: {
                  minHeight: "100vh",
                  width: "100%",
                  backgroundImage: () => {
                    const url = getSection.data.get()?.backgroundImageUrl;
                    return url ? `url("${url}")` : "none";
                  },
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                },
              },
              children: [
                {
                  is: "structure/stack/y-stack",
                  children: {
                    space: "2",
                    style: {
                      web: {
                        minHeight: "100vh",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    },
                    children: [
                      {
                        is: "media/image",
                        children: {
                          src: () => getSection.data.get()?.logoUrl ?? "",
                          alt: "Bioloon",
                          ...logoProps,
                          className: LandingStyle.logo.getStyle(logoProps),
                        },
                      },
                      {
                        is: "typography/text",
                        children: {
                          variant: "paragraph",
                          label: () => getSection.data.get()?.title ?? "",
                          ...titleProps,
                          className: LandingStyle.title.getStyle(titleProps),
                        },
                      },
                      {
                        is: "structure/stack/y-stack",
                        children: {
                          space: "0",
                          children: [
                            {
                              is: "typography/text",
                              children: {
                                variant: "paragraph",
                                label: () =>
                                  getSection.data.get()?.description ?? "",
                                ...descriptionProps,
                                className:
                                  LandingStyle.description.getStyle(
                                    descriptionProps,
                                  ),
                              },
                            },
                            {
                              is: "navigation/link",
                              children: {
                                to: () => getSection.data.get()?.link ?? "#",
                                label: () =>
                                  getSection.data.get()?.linkLabel ??
                                    getSection.data.get()?.link ?? "",
                                ...linkProps,
                                className: LandingStyle.link.getStyle(
                                  linkProps,
                                ),
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ]}
      />
    </ErrorBoundary>
  );
}

export default LandingWindow;
