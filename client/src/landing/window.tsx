import { ErrorBoundary } from "@inspatial/kit/control-flow";
import { Widget } from "@inspatial/kit/recursive";
import { iss } from "@inspatial/kit/style";
import { LandingStyle } from "./style.ts";
import type { LandingProps } from "./type.ts";

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
    <>
      <ErrorBoundary>
        <Widget
          is="widget-tree"
          for="window"
          className={iss(
            LandingStyle.root.getStyle({ className, class: cls, ...rest }),
          )}
          {...rest}
          children={[
            {
              is: "media/image",
              children: {
                src: "./asset/logo.png",
                alt: "Bioloon",
                ...logoProps,
                className: LandingStyle.logo.getStyle(logoProps),
              },
            },
            {
              is: "typography/text",
              children: {
                variant: "paragraph",
                label: "COMING SOON...",
                ...titleProps,
                className: LandingStyle.title.getStyle(titleProps),
              },
            },
            {
              is: "structure/stack/y-stack",
              children: {
                space: "2",
                children: [
                  {
                    is: "typography/text",
                    children: {
                      variant: "paragraph",
                      label: "For press & media please contact",
                      ...descriptionProps,
                      className: LandingStyle.description.getStyle(
                        descriptionProps,
                      ),
                    },
                  },
                  {
                    is: "navigation/link",
                    children: {
                      to: "mailto:hello@bioloon.com",
                      label: "hello@bioloon.com",
                      ...linkProps,
                      className: LandingStyle.link.getStyle(linkProps),
                    },
                  },
                ],
              },
            },
          ]}
        />
      </ErrorBoundary>
    </>
  );
}

export default LandingWindow;
