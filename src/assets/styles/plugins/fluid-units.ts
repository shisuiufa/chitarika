import plugin from "tailwindcss/plugin";

type Converter = (value: string) => string | null;

const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1080;

function singleProperty(property: string, converter: Converter) {
  return (value: string) => {
    const result = converter(value);

    return result ? { [property]: result } : {};
  };
}

function multipleProperties(
  properties: string[],
  converter: Converter,
) {
  return (value: string) => {
    const result = converter(value);

    if (!result) {
      return {};
    }

    return Object.fromEntries(
      properties.map((property) => [property, result]),
    );
  };
}

const round = (value: number) => Number(value.toFixed(4));

function createRelative(
  value: string,
  unit: "vw" | "vh",
  designSize: number,
): string | null {
  if (!value.endsWith("px")) return null;
  const px = Number.parseFloat(value);
  if (!Number.isFinite(px)) return null;
  return `${round((px / designSize) * 100)}${unit}`;
}

const toVh: Converter = (value) => createRelative(value, "vh", DESIGN_HEIGHT);
const toVw: Converter = (value) => createRelative(value, "vw", DESIGN_WIDTH);

export default plugin(({ matchUtilities }) => {
  matchUtilities(
    {
      "p-vh": singleProperty("padding", toVh),
      "px-vh": singleProperty("paddingInline", toVh),
      "py-vh": singleProperty("paddingBlock", toVh),
      "pt-vh": singleProperty("paddingTop", toVh),
      "pb-vh": singleProperty("paddingBottom", toVh),
      "pl-vh": singleProperty("paddingLeft", toVh),
      "pr-vh": singleProperty("paddingRight", toVh),

      "m-vh": singleProperty("margin", toVh),
      "mx-vh": singleProperty("marginInline", toVh),
      "my-vh": singleProperty("marginBlock", toVh),
      "mt-vh": singleProperty("marginTop", toVh),
      "mb-vh": singleProperty("marginBottom", toVh),
      "ml-vh": singleProperty("marginLeft", toVh),
      "mr-vh": singleProperty("marginRight", toVh),

      "gap-vh": singleProperty("gap", toVh),
      "gap-x-vh": singleProperty("columnGap", toVh),
      "gap-y-vh": singleProperty("rowGap", toVh),

      "h-vh": singleProperty("height", toVh),
      "min-h-vh": singleProperty("minHeight", toVh),
      "max-h-vh": singleProperty("maxHeight", toVh),

      "w-vh": singleProperty("width", toVh),
      "min-w-vh": singleProperty("minWidth", toVh),
      "max-w-vh": singleProperty("maxWidth", toVh),

      "top-vh": singleProperty("top", toVh),
      "bottom-vh": singleProperty("bottom", toVh),
      "left-vh": singleProperty("left", toVh),
      "right-vh": singleProperty("right", toVh),

      "text-vh": singleProperty("fontSize", toVh),
      "leading-vh": singleProperty("lineHeight", toVh),
      "tracking-vh": singleProperty("letterSpacing", toVh),

      "rounded-vh": singleProperty("borderRadius", toVh),
      "border-vh": singleProperty("borderWidth", toVh),
      "border-t-vh": singleProperty("borderTopWidth", toVh),
      "border-b-vh": singleProperty("borderBottomWidth", toVh),

      "size-vh": multipleProperties(["width", "height"], toVh),

      "translate-y-vh": (value: string): Record<string, string> => {
        const result = toVh(value);

        if (!result) {
          return {};
        }

        return {
          translate: `0 ${result}`,
        };
      },
    },
    {
      values: {},
      type: ["length"],
    },
  );

  matchUtilities(
    {
      "p-vw": singleProperty("padding", toVw),
      "px-vw": singleProperty("paddingInline", toVw),
      "py-vw": singleProperty("paddingBlock", toVw),
      "pt-vw": singleProperty("paddingTop", toVw),
      "pb-vw": singleProperty("paddingBottom", toVw),
      "pl-vw": singleProperty("paddingLeft", toVw),
      "pr-vw": singleProperty("paddingRight", toVw),

      "m-vw": singleProperty("margin", toVw),
      "mx-vw": singleProperty("marginInline", toVw),
      "my-vw": singleProperty("marginBlock", toVw),
      "mt-vw": singleProperty("marginTop", toVw),
      "mb-vw": singleProperty("marginBottom", toVw),
      "ml-vw": singleProperty("marginLeft", toVw),
      "mr-vw": singleProperty("marginRight", toVw),

      "gap-vw": singleProperty("gap", toVw),
      "gap-x-vw": singleProperty("columnGap", toVw),
      "gap-y-vw": singleProperty("rowGap", toVw),

      "w-vw": singleProperty("width", toVw),
      "min-w-vw": singleProperty("minWidth", toVw),
      "max-w-vw": singleProperty("maxWidth", toVw),

      "h-vw": singleProperty("height", toVw),
      "min-h-vw": singleProperty("minHeight", toVw),
      "max-h-vw": singleProperty("maxHeight", toVw),

      "top-vw": singleProperty("top", toVw),
      "bottom-vw": singleProperty("bottom", toVw),
      "left-vw": singleProperty("left", toVw),
      "right-vw": singleProperty("right", toVw),

      "text-vw": singleProperty("fontSize", toVw),
      "leading-vw": singleProperty("lineHeight", toVw),
      "tracking-vw": singleProperty("letterSpacing", toVw),

      "rounded-vw": singleProperty("borderRadius", toVw),
      "border-vw": singleProperty("borderWidth", toVw),
      "border-t-vw": singleProperty("borderTopWidth", toVw),
      "border-b-vw": singleProperty("borderBottomWidth", toVw),

      "size-vw": multipleProperties(["width", "height"], toVw),
    },
    {
      values: {},
      type: ["length"],
    },
  );
});