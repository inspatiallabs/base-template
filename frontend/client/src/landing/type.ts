import type { WidgetProps } from "@inspatial/kit/widget/recursive/index.ts";
import type { StyleProps } from "@inspatial/kit/style";
import type { LandingStyle } from "./style.ts";
import type { SvgProps } from "@inspatial/kit/widget/media/svg/type.ts";
import type { TypographyProps } from "@inspatial/kit/widget/typography/text/type.ts";
import type { ImageProps } from "@inspatial/kit/widget/media/image/type.ts";
import type { LinkProps } from "@inspatial/kit/widget/navigation/link/type.ts";

/*################################(LANDING LOGO PROPS)################################*/

export type LandingLogoProps = StyleProps<typeof LandingStyle.logo> &
  (ImageProps | SvgProps);

/*################################(LANDING TITLE PROPS)################################*/

export type LandingTitleProps = StyleProps<typeof LandingStyle.title> &
  TypographyProps;

/*################################(LANDING DESCRIPTION PROPS)################################*/

export type LandingDescriptionProps = StyleProps<
  typeof LandingStyle.description
> &
  TypographyProps;

/*################################(LANDING LINK PROPS)################################*/

export type LandingLinkProps = StyleProps<typeof LandingStyle.link> & LinkProps;

/*################################(LANDING PROPS)################################*/

export type LandingChildrenTree = {
  logo: LandingLogoProps;
  title: LandingTitleProps;
  description: LandingDescriptionProps;
  link: LandingLinkProps;
};

export type LandingProps = StyleProps<typeof LandingStyle.root> & {
  children: LandingChildrenTree;
  // ...Additional props can be added here
} & WidgetProps; // usually best to extend the widget props your are using this in.
