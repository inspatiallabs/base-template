import type { WidgetTreeProps } from "@inspatial/kit/widget/recursive/index.ts";
import type { StyleProps } from "@inspatial/kit/style";
import type { LandingStyle } from "./style.ts";
import type { TypographyProps } from "@inspatial/kit/widget/typography/text/type.ts";
import type { ImageProps } from "@inspatial/kit/widget/media/image/type.ts";
import type { LinkProps } from "@inspatial/kit/widget/navigation/link/type.ts";

/**################################(LANDING WIDGET OVERRIDE PROPS)################################*/
type LandingWidgetOverrideProps<T> = Partial<
  Omit<T, "children" | "is" | "for">
>;

/*################################(LANDING ROOTS PROPS)################################*/

export type LandingRootProps = StyleProps<typeof LandingStyle.root> &
  Omit<WidgetTreeProps<"window">, "children" | "for" | "is">;

/*################################(LANDING LOGO PROPS)################################*/

export type LandingLogoProps = StyleProps<typeof LandingStyle.logo> &
  LandingWidgetOverrideProps<ImageProps>;

/*################################(LANDING TITLE PROPS)################################*/

export type LandingTitleProps = StyleProps<typeof LandingStyle.title> &
  LandingWidgetOverrideProps<TypographyProps>;

/*################################(LANDING DESCRIPTION PROPS)################################*/

export type LandingDescriptionProps = StyleProps<
  typeof LandingStyle.description
> &
  LandingWidgetOverrideProps<TypographyProps>;

/*################################(LANDING LINK PROPS)################################*/

export type LandingLinkProps = StyleProps<typeof LandingStyle.link> &
  LandingWidgetOverrideProps<LinkProps>;

/*################################(LANDING PROPS)################################*/

export type LandingChildrenTree = {
  logo?: LandingLogoProps;
  title?: LandingTitleProps;
  description?: LandingDescriptionProps;
  link?: LandingLinkProps;
};

export type LandingProps = LandingRootProps & {
  children?: LandingChildrenTree;
};
