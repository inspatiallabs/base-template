import { ErrorBoundary } from "@inspatial/kit/control-flow";
import { Widget } from "@inspatial/kit/widget";
import { iss } from "@inspatial/kit/style";
import { LandingStyle } from "./style.ts";
import type { LandingProps } from "./type.ts";

/*################################(WINDOW)################################*/
export function LandingWindow(props: LandingProps) {
  /**************************** (Props) ****************************/

  const { className, class: cls, ...rest } = props;
  const logoProps = props.children?.logo ?? {};
  const titleProps = props.children?.title ?? {};
  const descriptionProps = props.children?.description ?? {};

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
          children={[
            {
              is: "media/image",
              children: {
                src: "./asset/logo.png",
                alt: "Bioloon",
                className: LandingStyle.logo.getStyle(logoProps),
                ...logoProps,
              },
            },
            {
              is: "typography/text",
              children: {
                variant: "paragraph",
                label: "COMING SOON...",
                className: LandingStyle.title.getStyle(titleProps),
                ...titleProps,
              },
            },
            {
              is: "typography/text",
              children: {
                variant: "paragraph",
                label: "For press & media please contact",
                className: LandingStyle.description.getStyle(descriptionProps),
                ...descriptionProps,
              },
            },
          ]}
        />
      </ErrorBoundary>
    </>
  );
}

export default LandingWindow;
