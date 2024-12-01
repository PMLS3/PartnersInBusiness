export default {
  BaseAccordion: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseAccordion",
    kebabName: "base-accordion",
    chunkName: "components/base-accordion",
    export: "default",
    priority: 0,
    meta: {
      type: 2,
      props: [
        {
          name: "items",
          global: false,
          description: "The items to display in the accordion.",
          tags: [],
          required: true,
          type: "{ title: string; content: unknown; }[]",
        },
        {
          name: "openItems",
          global: false,
          description: "Indexes of the items that should be opened by default.",
          tags: [],
          required: false,
          type: "number[] | undefined",
          default: "[]",
        },
        {
          name: "exclusive",
          global: false,
          description:
            "Whether if multiple elements in the accordion can be opened at same time or not.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "action",
          global: false,
          description: "Defines the icon used for accordion item toggle action",
          tags: [
            {
              name: "default",
              text: "'dot'",
            },
          ],
          required: false,
          type: '"dot" | "chevron" | "plus" | undefined',
          default: '"dot"',
        },
        {
          name: "color",
          global: false,
          description: "Defines the color of the accordion",
          tags: [
            {
              name: "since",
              text: "3.0.0",
            },
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          default: "undefined",
        },
        {
          name: "dotColor",
          global: false,
          description: "Defines the color of the accordion dot",
          tags: [
            {
              name: "since",
              text: "3.0.0",
            },
            {
              name: "default",
              text: "'primary'",
            },
          ],
          required: false,
          type: '"default" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "Defines the radius of the accordion",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; details?: string | string[] | undefined; summary?: string | string[] | undefined; header?: string | string[] | undefined; content?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
      ],
      slots: [
        {
          name: "accordion-item",
          type: "{ index: number; item: { title: string; content: unknown; }; toggle: (index: number) => void; }",
          description: "",
        },
        {
          name: "accordion-item-summary",
          type: "{ index: number; item: { title: string; content: unknown; }; toggle: (index: number) => void; }",
          description: "",
        },
        {
          name: "accordion-item-content",
          type: "{ index: number; item: { title: string; content: unknown; }; toggle: (index: number) => void; }",
          description: "",
        },
      ],
      events: [
        {
          name: "open",
          type: "{ title: string; content: unknown; }",
          signature:
            '(event: "open", item: { title: string; content: unknown; }): void',
        },
      ],
      exposed: [],
    },
  },
  BaseAvatar: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseAvatar",
    kebabName: "base-avatar",
    chunkName: "components/base-avatar",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "Defines the color of the avatar",
          tags: [
            {
              name: "since",
              text: "3.0.0",
            },
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"muted" | "primary" | "info" | "success" | "warning" | "danger" | "pink" | "yellow" | "white" | "indigo" | "violet" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the image.",
          tags: [
            {
              name: "default",
              text: "'full'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; inner?: string | string[] | undefined; img?: string | string[] | undefined; badge?: string | string[] | undefined; dot?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "dot",
          global: false,
          description:
            "Whether to display a dot on top of the image, or the color of the dot.",
          tags: [],
          required: false,
          type: 'boolean | "primary" | "info" | "success" | "warning" | "danger" | "pink" | "yellow" | undefined',
          default: "false",
        },
        {
          name: "src",
          global: false,
          description: "The URL of the image to display.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "srcDark",
          global: false,
          description:
            "The URL of a dark version of the image to display when the component is in dark mode.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "badgeSrc",
          global: false,
          description: "The URL of a badge to display on top of the image.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "text",
          global: false,
          description: "The text to display below the image.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"?"',
        },
        {
          name: "mask",
          global: false,
          description:
            "Applies an svg mask from the available presets. (needs rounded to be set to `none`).",
          tags: [],
          required: false,
          type: '"hex" | "hexed" | "deca" | "blob" | "diamond" | undefined',
          default: "undefined",
        },
        {
          name: "ring",
          global: false,
          description: "Whether to display a ring around the image .",
          tags: [],
          required: false,
          type: 'boolean | "primary" | "info" | "success" | "warning" | "danger" | "pink" | "yellow" | undefined',
          default: "false",
        },
        {
          name: "size",
          global: false,
          description: "The size of the image.",
          tags: [
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xxs" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | undefined',
          default: "undefined",
        },
        {
          name: "alt",
          global: false,
          description: "The alt text of the image.",
          tags: [],
          required: false,
          type: "string | undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
        {
          name: "badge",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; badge?(_: {}): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"muted" | "primary" | "info" | "success" | "warning" | "danger" | "pink" | "yellow" | "white" | "indigo" | "violet" | undefined',
          description: "Defines the color of the avatar",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the image.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; inner?: string | string[] | undefined; img?: string | string[] | undefined; badge?: string | string[] | undefined; dot?: string | string[] | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
        {
          name: "dot",
          type: 'boolean | "primary" | "info" | "success" | "warning" | "danger" | "pink" | "yellow"',
          description:
            "Whether to display a dot on top of the image, or the color of the dot.",
        },
        {
          name: "src",
          type: "string | undefined",
          description: "The URL of the image to display.",
        },
        {
          name: "alt",
          type: "string | undefined",
          description: "The alt text of the image.",
        },
        {
          name: "srcDark",
          type: "string | undefined",
          description:
            "The URL of a dark version of the image to display when the component is in dark mode.",
        },
        {
          name: "badgeSrc",
          type: "string | undefined",
          description: "The URL of a badge to display on top of the image.",
        },
        {
          name: "text",
          type: "string",
          description: "The text to display below the image.",
        },
        {
          name: "mask",
          type: '"hex" | "hexed" | "deca" | "blob" | "diamond" | undefined',
          description:
            "Applies an svg mask from the available presets. (needs rounded to be set to `none`).",
        },
        {
          name: "ring",
          type: 'boolean | "primary" | "info" | "success" | "warning" | "danger" | "pink" | "yellow"',
          description: "Whether to display a ring around the image .",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xxs" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | undefined',
          description: "The size of the image.",
        },
      ],
    },
  },
  BaseAvatarGroup: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseAvatarGroup",
    kebabName: "base-avatar-group",
    chunkName: "components/base-avatar-group",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "avatars",
          global: false,
          description: "An array of avatar objects.",
          tags: [],
          required: true,
          type: "{ src?: string | undefined; srcDark?: string | undefined; text?: string | undefined; }[]",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [
            {
              name: "since",
              text: "3.0.0",
            },
          ],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; count?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the avatars.",
          tags: [
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xxs" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | undefined',
          default: "undefined",
        },
        {
          name: "limit",
          global: false,
          description: "The maximum number of avatars to display.",
          tags: [
            {
              name: "default",
              text: "4",
            },
          ],
          required: false,
          type: "number | undefined",
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; count?: string | string[] | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xxs" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | undefined',
          description: "The size of the avatars.",
        },
        {
          name: "avatars",
          type: "{ src?: string | undefined; srcDark?: string | undefined; text?: string | undefined; }[]",
          description: "An array of avatar objects.",
        },
        {
          name: "limit",
          type: "number | undefined",
          description: "The maximum number of avatars to display.",
        },
      ],
    },
  },
  BaseBreadcrumb: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseBreadcrumb",
    kebabName: "base-breadcrumb",
    chunkName: "components/base-breadcrumb",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "items",
          global: false,
          description:
            "The items to display in the breadcrumb.\n\nIf not provided, the breadcrumb will be generated\nfrom the current route using page meta under `breadcrumb` key.",
          tags: [],
          required: false,
          type: "{ to?: RouteLocationRaw | undefined; label?: string | undefined; hideLabel?: boolean | undefined; icon?: string | undefined; iconClasses?: string | string[] | undefined; }[] | undefined",
          default: "undefined",
        },
        {
          name: "color",
          global: false,
          description: "Defines the hover color of the breadcrumb links",
          tags: [
            {
              name: "since",
              text: "3.0.0",
            },
            {
              name: "default",
              text: "'primary'",
            },
          ],
          required: false,
          type: '"primary" | "dark" | "black" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; list?: string | string[] | undefined; dropdown?: string | string[] | undefined; item?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
      ],
      slots: [
        {
          name: "link",
          type: "{ item: any; index: number; }",
          description: "",
        },
        {
          name: "icon",
          type: "{ item: any; index: number; }",
          description: "",
        },
        {
          name: "label",
          type: "{ item: any; index: number; }",
          description: "",
        },
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { link?(_: { item: any; index: number; }): any; icon?(_: { item: any; index: number; }): any; label?(_: { item: any; index: number; }): any; default?(_: {}): any; }",
          description: "",
        },
        {
          name: "items",
          type: "{ to?: RouteLocationRaw | undefined; label?: string | undefined; hideLabel?: boolean | undefined; icon?: string | undefined; iconClasses?: string | string[] | undefined; }[] | undefined",
          description:
            "The items to display in the breadcrumb.\n\nIf not provided, the breadcrumb will be generated\nfrom the current route using page meta under `breadcrumb` key.",
        },
        {
          name: "color",
          type: '"primary" | "dark" | "black" | undefined',
          description: "Defines the hover color of the breadcrumb links",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; list?: string | string[] | undefined; dropdown?: string | string[] | undefined; item?: string | string[] | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
      ],
    },
  },
  BaseButton: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseButton",
    kebabName: "base-button",
    chunkName: "components/base-button",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the button.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the button.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "size",
          global: false,
          description: "The size of the button",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          default: "undefined",
        },
        {
          name: "type",
          global: false,
          description: "The type of the button.",
          tags: [],
          required: false,
          type: '"button" | "submit" | "reset" | undefined',
          default: "undefined",
        },
        {
          name: "to",
          global: false,
          description:
            "The location to which the button should navigate when clicked. This is only applicable if the button is a link.",
          tags: [],
          required: false,
          type: "RouteLocationRaw | undefined",
          default: "undefined",
        },
        {
          name: "href",
          global: false,
          description:
            "Using href instead of to result in a native anchor with no router functionality.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "rel",
          global: false,
          description:
            "The value of the 'rel' attribute of the button. This attribute is used to specify the relationship of the linked document with the current document.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "target",
          global: false,
          description:
            "The value of the 'target' attribute of the button. This attribute is used to specify where to open the linked document.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "shadow",
          global: false,
          description: "Adds a flat or a on hover shadow to the button.",
          tags: [],
          required: false,
          type: '"flat" | "hover" | undefined',
          default: "undefined",
        },
        {
          name: "variant",
          global: false,
          description: "The variant of the button..",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'solid'",
            },
          ],
          required: false,
          type: '"solid" | "outline" | "pastel" | undefined',
          default: "undefined",
        },
        {
          name: "badge",
          global: false,
          description: "The button badge indicator",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "badgePulse",
          global: false,
          description: "Add a pulse animation on the badge",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "loading",
          global: false,
          description: "Whether the button is in a loading state.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "disabled",
          global: false,
          description: "Whether the button should be disabled.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | "light" | undefined',
          description: "The color of the button.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the button.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          description: "The size of the button",
        },
        {
          name: "type",
          type: '"button" | "submit" | "reset" | undefined',
          description: "The type of the button.",
        },
        {
          name: "to",
          type: "RouteLocationRaw | undefined",
          description:
            "The location to which the button should navigate when clicked. This is only applicable if the button is a link.",
        },
        {
          name: "href",
          type: "string | undefined",
          description:
            "Using href instead of to result in a native anchor with no router functionality.",
        },
        {
          name: "rel",
          type: "string",
          description:
            "The value of the 'rel' attribute of the button. This attribute is used to specify the relationship of the linked document with the current document.",
        },
        {
          name: "target",
          type: "string",
          description:
            "The value of the 'target' attribute of the button. This attribute is used to specify where to open the linked document.",
        },
        {
          name: "shadow",
          type: '"flat" | "hover" | undefined',
          description: "Adds a flat or a on hover shadow to the button.",
        },
        {
          name: "badge",
          type: "boolean | undefined",
          description: "The button badge indicator",
        },
        {
          name: "badgePulse",
          type: "boolean | undefined",
          description: "Add a pulse animation on the badge",
        },
        {
          name: "loading",
          type: "boolean | undefined",
          description: "Whether the button is in a loading state.",
        },
        {
          name: "disabled",
          type: "boolean | undefined",
          description: "Whether the button should be disabled.",
        },
        {
          name: "variant",
          type: '"solid" | "outline" | "pastel" | undefined',
          description: "The variant of the button..",
        },
      ],
    },
  },
  BaseButtonAction: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseButtonAction",
    kebabName: "base-button-action",
    chunkName: "components/base-button-action",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the button.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the button.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "type",
          global: false,
          description: "The type of button.",
          tags: [],
          required: false,
          type: '"button" | "submit" | "reset" | undefined',
          default: "undefined",
        },
        {
          name: "to",
          global: false,
          description: "The route to navigate to when the button is clicked.",
          tags: [],
          required: false,
          type: "RouteLocationRaw | undefined",
          default: "undefined",
        },
        {
          name: "href",
          global: false,
          description:
            "Using href instead of to result in a native anchor with no router functionality.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "rel",
          global: false,
          description: "The value for the `rel` attribute on the button.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "target",
          global: false,
          description: "The value for the `target` attribute on the button.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "loading",
          global: false,
          description: "Whether the button is in a loading state.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "disabled",
          global: false,
          description: "Whether the button is disabled.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | "light" | undefined',
          description: "The color of the button.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the button.",
        },
        {
          name: "type",
          type: '"button" | "submit" | "reset" | undefined',
          description: "The type of button.",
        },
        {
          name: "to",
          type: "RouteLocationRaw | undefined",
          description: "The route to navigate to when the button is clicked.",
        },
        {
          name: "href",
          type: "string | undefined",
          description:
            "Using href instead of to result in a native anchor with no router functionality.",
        },
        {
          name: "rel",
          type: "string",
          description: "The value for the `rel` attribute on the button.",
        },
        {
          name: "target",
          type: "string",
          description: "The value for the `target` attribute on the button.",
        },
        {
          name: "loading",
          type: "boolean | undefined",
          description: "Whether the button is in a loading state.",
        },
        {
          name: "disabled",
          type: "boolean | undefined",
          description: "Whether the button is disabled.",
        },
      ],
    },
  },
  BaseButtonClose: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseButtonClose",
    kebabName: "base-button-close",
    chunkName: "components/base-button-close",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the button.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "none" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the button.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'full'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "size",
          global: false,
          description: "The size of the button.",
          tags: [
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xs" | "xl" | undefined',
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "none" | undefined',
          description: "The color of the button.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the button.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xs" | "xl" | undefined',
          description: "The size of the button.",
        },
      ],
    },
  },
  BaseButtonGroup: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseButtonGroup",
    kebabName: "base-button-group",
    chunkName: "components/base-button-group",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
      ],
    },
  },
  BaseButtonIcon: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseButtonIcon",
    kebabName: "base-button-icon",
    chunkName: "components/base-button-icon",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the button.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the button or link.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "size",
          global: false,
          description: "The size of the button.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          default: "undefined",
        },
        {
          name: "type",
          global: false,
          description:
            "The type of button.\nIf this is not set and the `to` property is set, the component will be treated as a link.",
          tags: [],
          required: false,
          type: '"button" | "submit" | "reset" | undefined',
          default: "undefined",
        },
        {
          name: "to",
          global: false,
          description:
            "The route to navigate to when the button or link is clicked.\nIf this is set and the `type` property is not set, the component will be treated as a link.",
          tags: [],
          required: false,
          type: "RouteLocationRaw | undefined",
          default: "undefined",
        },
        {
          name: "href",
          global: false,
          description:
            "Using href instead of to result in a native anchor with no router functionality.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "rel",
          global: false,
          description:
            "The value for the `rel` attribute on the button or link.\nThis property is only relevant for links.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "target",
          global: false,
          description:
            "The value for the `target` attribute on the button or link.\nThis property is only relevant for links.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "loading",
          global: false,
          description: "Whether the button or link is in a loading state.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "disabled",
          global: false,
          description: "Whether the button or link is disabled.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | "light" | undefined',
          description: "The color of the button.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the button or link.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          description: "The size of the button.",
        },
        {
          name: "type",
          type: '"button" | "submit" | "reset" | undefined',
          description:
            "The type of button.\nIf this is not set and the `to` property is set, the component will be treated as a link.",
        },
        {
          name: "to",
          type: "RouteLocationRaw | undefined",
          description:
            "The route to navigate to when the button or link is clicked.\nIf this is set and the `type` property is not set, the component will be treated as a link.",
        },
        {
          name: "href",
          type: "string | undefined",
          description:
            "Using href instead of to result in a native anchor with no router functionality.",
        },
        {
          name: "rel",
          type: "string",
          description:
            "The value for the `rel` attribute on the button or link.\nThis property is only relevant for links.",
        },
        {
          name: "target",
          type: "string",
          description:
            "The value for the `target` attribute on the button or link.\nThis property is only relevant for links.",
        },
        {
          name: "loading",
          type: "boolean | undefined",
          description: "Whether the button or link is in a loading state.",
        },
        {
          name: "disabled",
          type: "boolean | undefined",
          description: "Whether the button or link is disabled.",
        },
      ],
    },
  },
  BaseCard: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseCard",
    kebabName: "base-card",
    chunkName: "components/base-card",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the card.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the card.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | undefined',
          default: "undefined",
        },
        {
          name: "shadow",
          global: false,
          description: "Adds a flat or a on hover shadow to the card.",
          tags: [],
          required: false,
          type: '"flat" | "hover" | undefined',
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | undefined',
          description: "The color of the card.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | undefined',
          description: "The radius of the card.",
        },
        {
          name: "shadow",
          type: '"flat" | "hover" | undefined',
          description: "Adds a flat or a on hover shadow to the card.",
        },
      ],
    },
  },
  BaseDropdown: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseDropdown",
    kebabName: "base-dropdown",
    chunkName: "components/base-dropdown",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the dropdown.buttonSize",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "none" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the dropdown button.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; menuWrapper?: string | string[] | undefined; menu?: string | string[] | undefined; header?: string | string[] | undefined; content?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the dropdown.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"md" | "lg" | undefined',
          default: "undefined",
        },
        {
          name: "fixed",
          global: false,
          description: "Used a fixed strategy to float the component",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
        {
          name: "variant",
          global: false,
          description: "The variant of the dropdown.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'button'",
            },
          ],
          required: false,
          type: '"text" | "button" | "context" | undefined',
          default: "undefined",
        },
        {
          name: "label",
          global: false,
          description: "The label to display for the dropdown.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "headerLabel",
          global: false,
          description: "The header label to display for the dropdown.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "buttonColor",
          global: false,
          description: "The color of the button.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "buttonSize",
          global: false,
          description: "The size of the button.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          default: "undefined",
        },
        {
          name: "placement",
          global: false,
          description: "The placement of the dropdown via floating-ui.",
          tags: [
            {
              name: "default",
              text: "'bottom-start'",
            },
          ],
          required: false,
          type: '"top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | undefined',
          default: "undefined",
        },
        {
          name: "floatOptions",
          global: false,
          description: "Optional options for the underlying float component.",
          tags: [],
          required: false,
          type: "FloatProps | undefined",
          default: "{}",
        },
        {
          name: "disabled",
          global: false,
          description: "Used a fixed strategy to float the component",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "button",
          type: "{ open: boolean; close: () => void; }",
          description: "",
        },
        {
          name: "label",
          type: "{ open: boolean; close: () => void; }",
          description: "",
        },
        {
          name: "default",
          type: "{ open: boolean; close: () => void; }",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { button?(_: { open: boolean; close: () => void; }): any; label?(_: { open: boolean; close: () => void; }): any; default?(_: { open: boolean; close: () => void; }): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "none" | undefined',
          description: "The color of the dropdown.buttonSize",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the dropdown button.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; menuWrapper?: string | string[] | undefined; menu?: string | string[] | undefined; header?: string | string[] | undefined; content?: string | string[] | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
        {
          name: "size",
          type: '"md" | "lg" | undefined',
          description: "The size of the dropdown.",
        },
        {
          name: "fixed",
          type: "boolean",
          description: "Used a fixed strategy to float the component",
        },
        {
          name: "disabled",
          type: "boolean | undefined",
          description: "Used a fixed strategy to float the component",
        },
        {
          name: "variant",
          type: '"text" | "button" | "context" | undefined',
          description: "The variant of the dropdown.",
        },
        {
          name: "label",
          type: "string",
          description: "The label to display for the dropdown.",
        },
        {
          name: "headerLabel",
          type: "string | undefined",
          description: "The header label to display for the dropdown.",
        },
        {
          name: "buttonColor",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | "light" | undefined',
          description: "The color of the button.",
        },
        {
          name: "buttonSize",
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          description: "The size of the button.",
        },
        {
          name: "placement",
          type: '"top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | undefined',
          description: "The placement of the dropdown via floating-ui.",
        },
        {
          name: "floatOptions",
          type: "FloatProps",
          description: "Optional options for the underlying float component.",
        },
      ],
    },
  },
  BaseDropdownDivider: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseDropdownDivider",
    kebabName: "base-dropdown-divider",
    chunkName: "components/base-dropdown-divider",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [],
      slots: [],
      events: [],
      exposed: [],
    },
  },
  BaseDropdownItem: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseDropdownItem",
    kebabName: "base-dropdown-item",
    chunkName: "components/base-dropdown-item",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The hover color of the dropdown-item inner elements.",
          tags: [
            {
              name: "since",
              text: "3.0.0",
            },
            {
              name: "default",
              text: "'primary'",
            },
          ],
          required: false,
          type: '"primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the dropdown-item.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the wrapper and inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; title?: string | string[] | undefined; text?: string | string[] | undefined; } | undefined",
          default:
            '{\n    title: "font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white",\n    text: "text-muted-400 font-sans text-xs",\n}',
        },
        {
          name: "text",
          global: false,
          description: "The text to display for the dropdown item.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "type",
          global: false,
          description: "The type of button.",
          tags: [],
          required: false,
          type: '"button" | "submit" | "reset" | undefined',
          default: "undefined",
        },
        {
          name: "to",
          global: false,
          description: "The route to navigate to when the button is clicked.",
          tags: [],
          required: false,
          type: "RouteLocationRaw | undefined",
          default: "undefined",
        },
        {
          name: "href",
          global: false,
          description:
            "Using href instead of to result in a native anchor with no router functionality.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "rel",
          global: false,
          description: "The value for the `rel` attribute on the button.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "target",
          global: false,
          description: "The value for the `target` attribute on the button.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "title",
          global: false,
          description: "The title to display for the dropdown item.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "contrast",
          global: false,
          description: "The contrast of the dropdown-item.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "contrast" | undefined',
          default: "undefined",
        },
        {
          name: "disabled",
          global: false,
          description: "Whether the button is disabled.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "start",
          type: "{}",
          description: "",
        },
        {
          name: "default",
          type: "{ active: boolean; close: () => void; }",
          description: "",
        },
        {
          name: "text",
          type: "{ active: boolean; close: () => void; }",
          description: "",
        },
        {
          name: "end",
          type: "{ active: boolean; close: () => void; }",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { start?(_: {}): any; default?(_: { active: boolean; close: () => void; }): any; text?(_: { active: boolean; close: () => void; }): any; end?(_: { ...; }): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | undefined',
          description: "The hover color of the dropdown-item inner elements.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | undefined',
          description: "The radius of the dropdown-item.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; title?: string | string[] | undefined; text?: string | string[] | undefined; }",
          description:
            "Optional CSS classes to apply to the wrapper and inner elements.",
        },
        {
          name: "text",
          type: "string | undefined",
          description: "The text to display for the dropdown item.",
        },
        {
          name: "type",
          type: '"button" | "submit" | "reset" | undefined',
          description: "The type of button.",
        },
        {
          name: "to",
          type: "RouteLocationRaw | undefined",
          description: "The route to navigate to when the button is clicked.",
        },
        {
          name: "href",
          type: "string | undefined",
          description:
            "Using href instead of to result in a native anchor with no router functionality.",
        },
        {
          name: "rel",
          type: "string | undefined",
          description: "The value for the `rel` attribute on the button.",
        },
        {
          name: "target",
          type: "string | undefined",
          description: "The value for the `target` attribute on the button.",
        },
        {
          name: "disabled",
          type: "boolean | undefined",
          description: "Whether the button is disabled.",
        },
        {
          name: "title",
          type: "string | undefined",
          description: "The title to display for the dropdown item.",
        },
        {
          name: "contrast",
          type: '"default" | "contrast" | undefined',
          description: "The contrast of the dropdown-item.",
        },
      ],
    },
  },
  BaseFocusLoop: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseFocusLoop",
    kebabName: "base-focus-loop",
    chunkName: "components/base-focus-loop",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "as",
          global: false,
          description: "The HTML tag to use for the wrapper",
          tags: [
            {
              name: "default",
              text: "div",
            },
          ],
          required: false,
          type: "string | undefined",
        },
        {
          name: "nextKeys",
          global: false,
          description: "Keys to trigger the next focusable element",
          tags: [
            {
              name: "default",
              text: "PageUp",
            },
            {
              name: "see",
              text: "https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values",
            },
          ],
          required: false,
          type: "string | string[] | undefined",
        },
        {
          name: "prevKeys",
          global: false,
          description: "Keys to trigger the previous focusable element",
          tags: [
            {
              name: "default",
              text: "PageDown",
            },
          ],
          required: false,
          type: "string | string[] | undefined",
        },
        {
          name: "prevent",
          global: false,
          description: "Prevent the default behavior of the keys",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "any",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default(): any; }",
          description: "",
        },
        {
          name: "as",
          type: "string | undefined",
          description: "The HTML tag to use for the wrapper",
        },
        {
          name: "nextKeys",
          type: "string | string[] | undefined",
          description: "Keys to trigger the next focusable element",
        },
        {
          name: "prevKeys",
          type: "string | string[] | undefined",
          description: "Keys to trigger the previous focusable element",
        },
        {
          name: "prevent",
          type: "boolean | undefined",
          description: "Prevent the default behavior of the keys",
        },
      ],
    },
  },
  BaseHeading: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseHeading",
    kebabName: "base-heading",
    chunkName: "components/base-heading",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "size",
          global: false,
          description: "The size of the heading.",
          tags: [
            {
              name: "default",
              text: "'xl'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined',
          default: "undefined",
        },
        {
          name: "as",
          global: false,
          description: "The HTML tag to use (e.g. `h1`, `h2`, etc.).",
          tags: [
            {
              name: "default",
              text: "'p'",
            },
          ],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "lead",
          global: false,
          description: "The spacing below the heading.",
          tags: [
            {
              name: "default",
              text: "'normal'",
            },
          ],
          required: false,
          type: '"none" | "tight" | "snug" | "normal" | "relaxed" | "loose" | undefined',
          default: "undefined",
        },
        {
          name: "weight",
          global: false,
          description: "The weight of the heading.",
          tags: [
            {
              name: "default",
              text: "'semibold'",
            },
          ],
          required: false,
          type: '"bold" | "light" | "normal" | "medium" | "semibold" | "extrabold" | undefined',
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined',
          description: "The size of the heading.",
        },
        {
          name: "as",
          type: "string | undefined",
          description: "The HTML tag to use (e.g. `h1`, `h2`, etc.).",
        },
        {
          name: "lead",
          type: '"none" | "tight" | "snug" | "normal" | "relaxed" | "loose" | undefined',
          description: "The spacing below the heading.",
        },
        {
          name: "weight",
          type: '"bold" | "light" | "normal" | "medium" | "semibold" | "extrabold" | undefined',
          description: "The weight of the heading.",
        },
      ],
    },
  },
  BaseIconBox: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseIconBox",
    kebabName: "base-icon-box",
    chunkName: "components/base-icon-box",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the box.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the icon.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "mask",
          global: false,
          description:
            "Applies an svg mask from the available presets. (needs rounded to be set to `none`).",
          tags: [],
          required: false,
          type: '"hex" | "hexed" | "deca" | "blob" | "diamond" | undefined',
          default: "undefined",
        },
        {
          name: "size",
          global: false,
          description: "The size of the icon.",
          tags: [
            {
              name: "default",
              text: "'xs'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xs" | "xl" | "2xl" | undefined',
          default: "undefined",
        },
        {
          name: "variant",
          global: false,
          description: "The variant of the box.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'solid'",
            },
          ],
          required: false,
          type: '"solid" | "outline" | "pastel" | undefined',
          default: "undefined",
        },
        {
          name: "bordered",
          global: false,
          description: "Whether the icon is bordered.",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | "light" | undefined',
          description: "The color of the box.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the icon.",
        },
        {
          name: "mask",
          type: '"hex" | "hexed" | "deca" | "blob" | "diamond" | undefined',
          description:
            "Applies an svg mask from the available presets. (needs rounded to be set to `none`).",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xs" | "xl" | "2xl" | undefined',
          description: "The size of the icon.",
        },
        {
          name: "variant",
          type: '"solid" | "outline" | "pastel" | undefined',
          description: "The variant of the box.",
        },
        {
          name: "bordered",
          type: "boolean",
          description: "Whether the icon is bordered.",
        },
      ],
    },
  },
  BaseKbd: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseKbd",
    kebabName: "base-kbd",
    chunkName: "components/base-kbd",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the kbd.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "none" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the kbd.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "size",
          global: false,
          description: "The radius of the kbd.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xs" | undefined',
          default: "undefined",
        },
        {
          name: "icon",
          global: false,
          description: "The icon to display for the kbd.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "none" | undefined',
          description: "The color of the kbd.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the kbd.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xs" | undefined',
          description: "The radius of the kbd.",
        },
        {
          name: "icon",
          type: "string | undefined",
          description: "The icon to display for the kbd.",
        },
      ],
    },
  },
  BaseLink: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseLink",
    kebabName: "base-link",
    chunkName: "components/base-link",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "to",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "RouteLocationRaw | undefined",
          default: "undefined",
        },
        {
          name: "href",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "RouteLocationRaw | undefined",
          default: "undefined",
        },
        {
          name: "rel",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "string | null | undefined",
          default: "undefined",
        },
        {
          name: "target",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: '"_blank" | "_parent" | "_self" | "_top" | (string & {}) | null | undefined',
          default: "undefined",
        },
        {
          name: "prefetch",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "undefined",
        },
        {
          name: "noPrefetch",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "undefined",
        },
        {
          name: "activeClass",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "exactActiveClass",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "ariaCurrentValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "replace",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "external",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "custom",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "noRel",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "replace",
          type: "boolean | undefined",
          description: "",
        },
        {
          name: "to",
          type: "RouteLocationRaw | undefined",
          description: "",
        },
        {
          name: "href",
          type: "RouteLocationRaw | undefined",
          description: "",
        },
        {
          name: "rel",
          type: "string | null | undefined",
          description: "",
        },
        {
          name: "target",
          type: '"_blank" | "_parent" | "_self" | "_top" | (string & {}) | null | undefined',
          description: "",
        },
        {
          name: "external",
          type: "boolean | undefined",
          description: "",
        },
        {
          name: "custom",
          type: "boolean | undefined",
          description: "",
        },
        {
          name: "noRel",
          type: "boolean | undefined",
          description: "",
        },
        {
          name: "prefetch",
          type: "boolean | undefined",
          description: "",
        },
        {
          name: "noPrefetch",
          type: "boolean | undefined",
          description: "",
        },
        {
          name: "activeClass",
          type: "string | undefined",
          description: "",
        },
        {
          name: "exactActiveClass",
          type: "string | undefined",
          description: "",
        },
        {
          name: "ariaCurrentValue",
          type: "string | undefined",
          description: "",
        },
      ],
    },
  },
  BaseList: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseList",
    kebabName: "base-list",
    chunkName: "components/base-list",
    export: "default",
    priority: 0,
    meta: {
      type: null,
      props: [],
      slots: [],
      events: [],
      exposed: [],
    },
  },
  BaseListItem: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseListItem",
    kebabName: "base-list-item",
    chunkName: "components/base-list-item",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "title",
          global: false,
          description: "The title of the list item.",
          tags: [],
          required: false,
          type: "string | undefined",
        },
        {
          name: "subtitle",
          global: false,
          description: "The subtitle of the list item.",
          tags: [],
          required: false,
          type: "string | undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
        {
          name: "title",
          type: "{}",
          description: "",
        },
        {
          name: "subtitle",
          type: "{}",
          description: "",
        },
        {
          name: "end",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; title?(_: {}): any; subtitle?(_: {}): any; end?(_: {}): any; }",
          description: "",
        },
        {
          name: "title",
          type: "string | undefined",
          description: "The title of the list item.",
        },
        {
          name: "subtitle",
          type: "string | undefined",
          description: "The subtitle of the list item.",
        },
      ],
    },
  },
  BaseMessage: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseMessage",
    kebabName: "base-message",
    chunkName: "components/base-message",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the message.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the message.",
          tags: [
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; icon?: string | string[] | undefined; text?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "icon",
          global: false,
          description:
            "Whether to show an icon, or the name of the icon to display.",
          tags: [],
          required: false,
          type: "string | boolean | undefined",
          default: "false",
        },
        {
          name: "message",
          global: false,
          description: "The message to display.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "defaultIcons",
          global: false,
          description:
            "Default icons to apply to the messages, when the icon is active.",
          tags: [],
          required: false,
          type: "{ default?: string | undefined; 'default-contrast'?: string | undefined; muted?: string | undefined; 'muted-contrast'?: string | undefined; info?: string | undefined; success?: string | undefined; warning?: string | undefined; danger?: string | undefined; primary?: string | undefined; } | undefined",
          default: "undefined",
        },
        {
          name: "closeIcon",
          global: false,
          description: "The icon to show in the close button",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"lucide:x"',
        },
        {
          name: "closable",
          global: false,
          description: "Whether to show a close button.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "icon",
          type: "{ iconName: string; }",
          description: "",
        },
        {
          name: "default",
          type: "{}",
          description: "",
        },
        {
          name: "close-button",
          type: "{}",
          description: "",
        },
      ],
      events: [
        {
          name: "close",
          type: "[]",
          signature: '(event: "close"): void',
        },
      ],
      exposed: [
        {
          name: "$slots",
          type: 'Readonly<InternalSlots> & { icon?(_: { iconName: string; }): any; default?(_: {}): any; "close-button"?(_: {}): any; }',
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | undefined',
          description: "The color of the message.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the message.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; icon?: string | string[] | undefined; text?: string | string[] | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
        {
          name: "icon",
          type: "string | boolean",
          description:
            "Whether to show an icon, or the name of the icon to display.",
        },
        {
          name: "message",
          type: "string",
          description: "The message to display.",
        },
        {
          name: "defaultIcons",
          type: "{ default?: string | undefined; 'default-contrast'?: string | undefined; muted?: string | undefined; 'muted-contrast'?: string | undefined; info?: string | undefined; success?: string | undefined; warning?: string | undefined; danger?: string | undefined; primary?: string | undefined; } | undefined",
          description:
            "Default icons to apply to the messages, when the icon is active.",
        },
        {
          name: "closeIcon",
          type: "string",
          description: "The icon to show in the close button",
        },
        {
          name: "closable",
          type: "boolean | undefined",
          description: "Whether to show a close button.",
        },
        {
          name: "onClose",
          type: "(() => any) | undefined",
          description: "",
        },
      ],
    },
  },
  BasePagination: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BasePagination",
    kebabName: "base-pagination",
    chunkName: "components/base-pagination",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "itemPerPage",
          global: false,
          description: "The number of items to display per page.",
          tags: [],
          required: true,
          type: "number",
        },
        {
          name: "totalItems",
          global: false,
          description: "The total number of items.",
          tags: [],
          required: true,
          type: "number",
        },
        {
          name: "color",
          global: false,
          description: "The color of the pagination active button.",
          tags: [
            {
              name: "since",
              text: "3.0.0",
            },
            {
              name: "default",
              text: "'primary'",
            },
          ],
          required: false,
          type: '"primary" | "dark" | "black" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the pagination.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; list?: string | string[] | undefined; link?: string | string[] | undefined; ellipsis?: string | string[] | undefined; buttons?: string | string[] | undefined; button?: string | ... 1 more ... | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "currentPage",
          global: false,
          description: "The current page number.",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "1",
        },
        {
          name: "maxLinksDisplayed",
          global: false,
          description: "The maximum number of links to display.",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "3",
        },
        {
          name: "routerQueryKey",
          global: false,
          description: "The query key to use for routing.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"page"',
        },
        {
          name: "previousIcon",
          global: false,
          description: "The icon to show for the previous button.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"lucide:chevron-left"',
        },
        {
          name: "nextIcon",
          global: false,
          description: "The icon to show for the next button.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"lucide:chevron-right"',
        },
        {
          name: "ellipsis",
          global: false,
          description: "The ellipsis to show when there are too many links.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"\\u2026"',
        },
        {
          name: "noRouter",
          global: false,
          description: "Whether to disable routing.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "before-pagination",
          type: "{}",
          description: "",
        },
        {
          name: "after-pagination",
          type: "{}",
          description: "",
        },
        {
          name: "before-navigation",
          type: "{}",
          description: "",
        },
        {
          name: "previous-icon",
          type: "{}",
          description: "",
        },
        {
          name: "next-icon",
          type: "{}",
          description: "",
        },
        {
          name: "after-navigation",
          type: "{}",
          description: "",
        },
      ],
      events: [
        {
          name: "update:currentPage",
          type: "[currentPage: number]",
          signature: '(event: "update:currentPage", currentPage: number): void',
        },
      ],
      exposed: [
        {
          name: "$slots",
          type: 'Readonly<InternalSlots> & { "before-pagination"?(_: {}): any; "after-pagination"?(_: {}): any; "before-navigation"?(_: {}): any; "previous-icon"?(_: {}): any; "next-icon"?(_: {}): any; "after-navigation"?(_: {}): any; }',
          description: "",
        },
        {
          name: "color",
          type: '"primary" | "dark" | "black" | undefined',
          description: "The color of the pagination active button.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the pagination.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; list?: string | string[] | undefined; link?: string | string[] | undefined; ellipsis?: string | string[] | undefined; buttons?: string | string[] | undefined; button?: string | ... 1 more ... | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
        {
          name: "itemPerPage",
          type: "number",
          description: "The number of items to display per page.",
        },
        {
          name: "totalItems",
          type: "number",
          description: "The total number of items.",
        },
        {
          name: "currentPage",
          type: "number",
          description: "The current page number.",
        },
        {
          name: "maxLinksDisplayed",
          type: "number",
          description: "The maximum number of links to display.",
        },
        {
          name: "noRouter",
          type: "boolean | undefined",
          description: "Whether to disable routing.",
        },
        {
          name: "routerQueryKey",
          type: "string",
          description: "The query key to use for routing.",
        },
        {
          name: "previousIcon",
          type: "string",
          description: "The icon to show for the previous button.",
        },
        {
          name: "nextIcon",
          type: "string",
          description: "The icon to show for the next button.",
        },
        {
          name: "ellipsis",
          type: "string",
          description: "The ellipsis to show when there are too many links.",
        },
        {
          name: "onUpdate:currentPage",
          type: "((currentPage: number) => any) | undefined",
          description: "",
        },
      ],
    },
  },
  BaseParagraph: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseParagraph",
    kebabName: "base-paragraph",
    chunkName: "components/base-paragraph",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "size",
          global: false,
          description: "The size of the paragraph.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined',
          default: "undefined",
        },
        {
          name: "as",
          global: false,
          description:
            "The HTML element or component name to use for the paragraph.",
          tags: [
            {
              name: "default",
              text: "'p'",
            },
          ],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "lead",
          global: false,
          description: "The lead of the paragraph.",
          tags: [
            {
              name: "default",
              text: "'normal'",
            },
          ],
          required: false,
          type: '"none" | "tight" | "snug" | "normal" | "relaxed" | "loose" | undefined',
          default: "undefined",
        },
        {
          name: "weight",
          global: false,
          description: "The weight of the paragraph.",
          tags: [
            {
              name: "default",
              text: "'normal'",
            },
          ],
          required: false,
          type: '"bold" | "light" | "normal" | "medium" | "semibold" | "extrabold" | undefined',
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined',
          description: "The size of the paragraph.",
        },
        {
          name: "as",
          type: "string | undefined",
          description:
            "The HTML element or component name to use for the paragraph.",
        },
        {
          name: "lead",
          type: '"none" | "tight" | "snug" | "normal" | "relaxed" | "loose" | undefined',
          description: "The lead of the paragraph.",
        },
        {
          name: "weight",
          type: '"bold" | "light" | "normal" | "medium" | "semibold" | "extrabold" | undefined',
          description: "The weight of the paragraph.",
        },
      ],
    },
  },
  BasePlaceholderPage: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BasePlaceholderPage",
    kebabName: "base-placeholder-page",
    chunkName: "components/base-placeholder-page",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "title",
          global: false,
          description: "The title of the placeholder.",
          tags: [],
          required: true,
          type: "string",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; inner?: string | string[] | undefined; img?: string | string[] | undefined; content?: string | string[] | undefined; title?: string | string[] | undefined; subtitle?: string | ... 1 more ... | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "subtitle",
          global: false,
          description: "The subtitle of the placeholder.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "imageSize",
          global: false,
          description: "The size of the featured image.",
          tags: [
            {
              name: "default",
              text: "'xs'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xs" | "xl" | undefined',
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "image",
          type: "{}",
          description: "",
        },
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { image?(_: {}): any; default?(_: {}): any; }",
          description: "",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; inner?: string | string[] | undefined; img?: string | string[] | undefined; content?: string | string[] | undefined; title?: string | string[] | undefined; subtitle?: string | ... 1 more ... | undefined; }",
          description:
            "Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.",
        },
        {
          name: "title",
          type: "string",
          description: "The title of the placeholder.",
        },
        {
          name: "subtitle",
          type: "string | undefined",
          description: "The subtitle of the placeholder.",
        },
        {
          name: "imageSize",
          type: '"sm" | "md" | "lg" | "xs" | "xl" | undefined',
          description: "The size of the featured image.",
        },
      ],
    },
  },
  BasePlaceload: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BasePlaceload",
    kebabName: "base-placeload",
    chunkName: "components/base-placeload",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [],
      slots: [],
      events: [],
      exposed: [],
    },
  },
  BaseProgress: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseProgress",
    kebabName: "base-progress",
    chunkName: "components/base-progress",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the progress bar.",
          tags: [
            {
              name: "default",
              text: "'primary'",
            },
          ],
          required: false,
          type: '"primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the progress bar.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'full'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; progress?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the progress bar.",
          tags: [
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xs" | "xl" | undefined',
          default: "undefined",
        },
        {
          name: "contrast",
          global: false,
          description: "The contrast ot the progress bar.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "contrast" | undefined',
          default: "undefined",
        },
        {
          name: "value",
          global: false,
          description:
            "The current value of the progress bar.\nIf `value` is not provided, the progress bar will be in an indeterminate state.",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "undefined",
        },
        {
          name: "max",
          global: false,
          description: "The maximum value of the progress bar.",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "100",
        },
      ],
      slots: [],
      events: [],
      exposed: [
        {
          name: "color",
          type: '"primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "light" | undefined',
          description: "The color of the progress bar.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the progress bar.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; progress?: string | string[] | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xs" | "xl" | undefined',
          description: "The size of the progress bar.",
        },
        {
          name: "contrast",
          type: '"default" | "contrast" | undefined',
          description: "The contrast ot the progress bar.",
        },
        {
          name: "value",
          type: "number | undefined",
          description:
            "The current value of the progress bar.\nIf `value` is not provided, the progress bar will be in an indeterminate state.",
        },
        {
          name: "max",
          type: "number",
          description: "The maximum value of the progress bar.",
        },
      ],
    },
  },
  BaseProgressCircle: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseProgressCircle",
    kebabName: "base-progress-circle",
    chunkName: "components/base-progress-circle",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "Defines the color of the progress circle",
          tags: [
            {
              name: "since",
              text: "3.0.0",
            },
            {
              name: "default",
              text: "'primary'",
            },
          ],
          required: false,
          type: '"primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; track?: string | string[] | undefined; progress?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the progress circle.",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "60",
        },
        {
          name: "animation",
          global: false,
          description:
            "Enable/disable animation, or set the animation duration (in seconds).",
          tags: [],
          required: false,
          type: "number | boolean | undefined",
          default: "2",
        },
        {
          name: "value",
          global: false,
          description: "The current value of the progress circle.",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "0",
        },
        {
          name: "max",
          global: false,
          description: "The maximum value of the progress circle.",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "100",
        },
        {
          name: "thickness",
          global: false,
          description: "The thickness of the progress circle.",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "4",
        },
      ],
      slots: [],
      events: [],
      exposed: [
        {
          name: "color",
          type: '"primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "light" | undefined',
          description: "Defines the color of the progress circle",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; track?: string | string[] | undefined; progress?: string | string[] | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
        {
          name: "size",
          type: "number",
          description: "The size of the progress circle.",
        },
        {
          name: "animation",
          type: "number | boolean",
          description:
            "Enable/disable animation, or set the animation duration (in seconds).",
        },
        {
          name: "value",
          type: "number",
          description: "The current value of the progress circle.",
        },
        {
          name: "max",
          type: "number",
          description: "The maximum value of the progress circle.",
        },
        {
          name: "thickness",
          type: "number",
          description: "The thickness of the progress circle.",
        },
      ],
    },
  },
  BaseProse: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseProse",
    kebabName: "base-prose",
    chunkName: "components/base-prose",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "rounded",
          global: false,
          description: "Inner elements shapes.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'none'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | undefined',
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | undefined',
          description: "Inner elements shapes.",
        },
      ],
    },
  },
  BaseSnack: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseSnack",
    kebabName: "base-snack",
    chunkName: "components/base-snack",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of snack.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; icon?: string | string[] | undefined; img?: string | string[] | undefined; text?: string | string[] | undefined; button?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the snack.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "xs" | undefined',
          default: "undefined",
        },
        {
          name: "label",
          global: false,
          description: "The text to display in the snackbar.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "icon",
          global: false,
          description: "An optional icon to display in the snackbar.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "image",
          global: false,
          description: "An optional image to display in the snackbar.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "icon",
          type: "{}",
          description: "",
        },
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [
        {
          name: "delete",
          type: "[]",
          signature: '(event: "delete"): void',
        },
      ],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { icon?(_: {}): any; default?(_: {}): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          description: "The color of snack.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; icon?: string | string[] | undefined; img?: string | string[] | undefined; text?: string | string[] | undefined; button?: string | string[] | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "xs" | undefined',
          description: "The size of the snack.",
        },
        {
          name: "label",
          type: "string",
          description: "The text to display in the snackbar.",
        },
        {
          name: "icon",
          type: "string | undefined",
          description: "An optional icon to display in the snackbar.",
        },
        {
          name: "image",
          type: "string | undefined",
          description: "An optional image to display in the snackbar.",
        },
        {
          name: "onDelete",
          type: "(() => any) | undefined",
          description: "",
        },
      ],
    },
  },
  BaseTabSlider: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseTabSlider",
    kebabName: "base-tab-slider",
    chunkName: "components/base-tab-slider",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "tabs",
          global: false,
          description:
            "An array of objects representing each tab. Each object should have a 'label' and a 'value' property.",
          tags: [],
          required: true,
          type: "{ label?: string | undefined; value: string; }[]",
        },
        {
          name: "color",
          global: false,
          description: "Defines the color of the active tab",
          tags: [
            {
              name: "since",
              text: "3.0.0",
            },
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "primary" | "dark" | "black" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "Controls the radius of the tabs.",
          tags: [
            {
              name: "default",
              text: "'lg'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; inner?: string | string[] | undefined; track?: string | string[] | undefined; item?: string | string[] | undefined; naver?: string | string[] | undefined; content?: string | ... 1 more ... | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the tabs.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | undefined',
          default: "undefined",
        },
        {
          name: "justify",
          global: false,
          description:
            "Controls the alignment of the tabs. Can be 'start', 'center', or 'end'.",
          tags: [
            {
              name: "default",
              text: "'start'",
            },
          ],
          required: false,
          type: '"start" | "end" | "center" | undefined',
          default: "undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "string | undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{ activeValue: string; toggle: (value: string) => void; }",
          description: "",
        },
      ],
      events: [
        {
          name: "update:modelValue",
          type: "[modelValue: string]",
          signature: '(event: "update:modelValue", modelValue: string): void',
        },
      ],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: { activeValue: string; toggle: (value: string) => void; }): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "primary" | "dark" | "black" | "light" | undefined',
          description: "Defines the color of the active tab",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "Controls the radius of the tabs.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; inner?: string | string[] | undefined; track?: string | string[] | undefined; item?: string | string[] | undefined; naver?: string | string[] | undefined; content?: string | ... 1 more ... | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
        {
          name: "size",
          type: '"sm" | "md" | undefined',
          description: "The size of the tabs.",
        },
        {
          name: "tabs",
          type: "{ label?: string | undefined; value: string; }[]",
          description:
            "An array of objects representing each tab. Each object should have a 'label' and a 'value' property.",
        },
        {
          name: "justify",
          type: '"start" | "end" | "center" | undefined',
          description:
            "Controls the alignment of the tabs. Can be 'start', 'center', or 'end'.",
        },
        {
          name: "onUpdate:modelValue",
          type: "((modelValue: string) => any) | undefined",
          description: "",
        },
        {
          name: "modelValue",
          type: "string | undefined",
          description: "",
        },
      ],
    },
  },
  BaseTabs: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseTabs",
    kebabName: "base-tabs",
    chunkName: "components/base-tabs",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "tabs",
          global: false,
          description: "An array of tab objects that contain a label and value",
          tags: [],
          required: true,
          type: "{ label: string; value: string; icon?: string | undefined; }[]",
        },
        {
          name: "color",
          global: false,
          description: "Defines the hover color of the active tab",
          tags: [
            {
              name: "since",
              text: "3.0.0",
            },
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "primary" | "dark" | "black" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; inner?: string | string[] | undefined; item?: string | string[] | undefined; content?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "type",
          global: false,
          description: "The type of tabs to display..",
          tags: [
            {
              name: "default",
              text: "'tabs'",
            },
          ],
          required: false,
          type: '"tabs" | "box" | undefined',
          default: "undefined",
        },
        {
          name: "justify",
          global: false,
          description: "The horizontal alignment of the tabs.",
          tags: [
            {
              name: "default",
              text: "'start'",
            },
          ],
          required: false,
          type: '"start" | "end" | "center" | undefined',
          default: "undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "string | undefined",
        },
        {
          name: "hideLabel",
          global: false,
          description: "Whether or not to hide the label for the tab.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "icon",
          type: "{ iconName: string; toggle: (value: string) => void; }",
          description: "",
        },
        {
          name: "tab",
          type: "{ activeValue: string; toggle: (value: string) => void; }",
          description: "",
        },
      ],
      events: [
        {
          name: "update:modelValue",
          type: "[modelValue: string]",
          signature: '(event: "update:modelValue", modelValue: string): void',
        },
      ],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { icon?(_: { iconName: string; toggle: (value: string) => void; }): any; tab?(_: { activeValue: string; toggle: (value: string) => void; }): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "primary" | "dark" | "black" | "light" | undefined',
          description: "Defines the hover color of the active tab",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; inner?: string | string[] | undefined; item?: string | string[] | undefined; content?: string | string[] | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
        {
          name: "type",
          type: '"tabs" | "box" | undefined',
          description: "The type of tabs to display..",
        },
        {
          name: "tabs",
          type: "{ label: string; value: string; icon?: string | undefined; }[]",
          description: "An array of tab objects that contain a label and value",
        },
        {
          name: "justify",
          type: '"start" | "end" | "center" | undefined',
          description: "The horizontal alignment of the tabs.",
        },
        {
          name: "onUpdate:modelValue",
          type: "((modelValue: string) => any) | undefined",
          description: "",
        },
        {
          name: "modelValue",
          type: "string | undefined",
          description: "",
        },
        {
          name: "hideLabel",
          type: "boolean | undefined",
          description: "Whether or not to hide the label for the tab.",
        },
      ],
    },
  },
  BaseTag: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseTag",
    kebabName: "base-tag",
    chunkName: "components/base-tag",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the tag.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the tag.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'lg'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "size",
          global: false,
          description: "The size of the tag.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | undefined',
          default: "undefined",
        },
        {
          name: "shadow",
          global: false,
          description: "Determines when the tag should have a shadow.",
          tags: [],
          required: false,
          type: '"flat" | "hover" | undefined',
          default: "undefined",
        },
        {
          name: "variant",
          global: false,
          description: "The variant of the tag.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'solid'",
            },
          ],
          required: false,
          type: '"solid" | "outline" | "pastel" | undefined',
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "light" | undefined',
          description: "The color of the tag.",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the tag.",
        },
        {
          name: "size",
          type: '"sm" | "md" | undefined',
          description: "The size of the tag.",
        },
        {
          name: "shadow",
          type: '"flat" | "hover" | undefined',
          description: "Determines when the tag should have a shadow.",
        },
        {
          name: "variant",
          type: '"solid" | "outline" | "pastel" | undefined',
          description: "The variant of the tag.",
        },
      ],
    },
  },
  BaseText: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseText",
    kebabName: "base-text",
    chunkName: "components/base-text",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "size",
          global: false,
          description: "The size of the text.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined',
          default: "undefined",
        },
        {
          name: "lead",
          global: false,
          description: "The lead of the text.",
          tags: [
            {
              name: "default",
              text: "'normal'",
            },
          ],
          required: false,
          type: '"none" | "tight" | "snug" | "normal" | "relaxed" | "loose" | undefined',
          default: "undefined",
        },
        {
          name: "weight",
          global: false,
          description: "The weight of the text.",
          tags: [
            {
              name: "default",
              text: "'normal'",
            },
          ],
          required: false,
          type: '"bold" | "light" | "normal" | "medium" | "semibold" | "extrabold" | undefined',
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xs" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined',
          description: "The size of the text.",
        },
        {
          name: "lead",
          type: '"none" | "tight" | "snug" | "normal" | "relaxed" | "loose" | undefined',
          description: "The lead of the text.",
        },
        {
          name: "weight",
          type: '"bold" | "light" | "normal" | "medium" | "semibold" | "extrabold" | undefined',
          description: "The weight of the text.",
        },
      ],
    },
  },
  BaseThemeSwitch: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseThemeSwitch",
    kebabName: "base-theme-switch",
    chunkName: "components/base-theme-switch",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "disableTransitions",
          global: false,
          description:
            "Disables transitions when toggling between light and dark mode.",
          tags: [
            {
              name: "default",
              text: "false",
            },
          ],
          required: false,
          type: "boolean | undefined",
          default: "undefined",
        },
      ],
      slots: [],
      events: [],
      exposed: [
        {
          name: "id",
          type: "string | undefined",
          description: "The form input identifier.",
        },
        {
          name: "disableTransitions",
          type: "boolean | undefined",
          description:
            "Disables transitions when toggling between light and dark mode.",
        },
      ],
    },
  },
  BaseThemeToggle: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseThemeToggle",
    kebabName: "base-theme-toggle",
    chunkName: "components/base-theme-toggle",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "disableTransitions",
          global: false,
          description:
            "Disables transitions when toggling between light and dark mode.",
          tags: [
            {
              name: "default",
              text: "false",
            },
          ],
          required: false,
          type: "boolean | undefined",
          default: "undefined",
        },
        {
          name: "inverted",
          global: false,
          description: "Sets the toggle element to inverted colors mode.",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
      ],
      slots: [],
      events: [],
      exposed: [
        {
          name: "id",
          type: "string | undefined",
          description: "The form input identifier.",
        },
        {
          name: "disableTransitions",
          type: "boolean | undefined",
          description:
            "Disables transitions when toggling between light and dark mode.",
        },
        {
          name: "inverted",
          type: "boolean",
          description: "Sets the toggle element to inverted colors mode.",
        },
      ],
    },
  },
  BaseAutocomplete: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseAutocomplete",
    kebabName: "base-autocomplete",
    chunkName: "components/base-autocomplete",
    export: "default",
    priority: 0,
    meta: {
      type: 2,
      props: [
        {
          name: "items",
          global: false,
          description: "The items to display in the component.",
          tags: [],
          required: false,
          type: "unknown[] | undefined",
          default: "[]",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the component.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; label?: string | string[] | undefined; input?: string | string[] | undefined; icon?: string | string[] | undefined; error?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the autocomplete component.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          default: "undefined",
        },
        {
          name: "fixed",
          global: false,
          description: "Used a fixed strategy to float the component",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
        {
          name: "loading",
          global: false,
          description: "Whether the component is in a loading state.",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
        {
          name: "disabled",
          global: false,
          description: "Whether the component is disabled.",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
        {
          name: "label",
          global: false,
          description: "The label to display for the component.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "placement",
          global: false,
          description: "The placement of the component via floating-ui.",
          tags: [],
          required: false,
          type: '"top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | undefined',
          default: '"bottom-start"',
        },
        {
          name: "floatOptions",
          global: false,
          description: "Optional options for the underlying float component.",
          tags: [],
          required: false,
          type: "FloatProps | undefined",
          default: "{}",
        },
        {
          name: "contrast",
          global: false,
          description: "The contrast of autocomplete component.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          default: "undefined",
        },
        {
          name: "icon",
          global: false,
          description: "An icon to display for the component.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "unknown",
        },
        {
          name: "labelFloat",
          global: false,
          description: "If the label should be floating.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "placeholder",
          global: false,
          description:
            "Placeholder text to display when the component is empty.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "error",
          global: false,
          description:
            "Error text to display when the component is in an error state.",
          tags: [],
          required: false,
          type: "string | boolean | undefined",
          default: '""',
        },
        {
          name: "clearValue",
          global: false,
          description: "Value used when clearing the component value.",
          tags: [],
          required: false,
          type: "any",
          default: "undefined",
        },
        {
          name: "clearIcon",
          global: false,
          description: "The icon to show in the clear button",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"lucide:x"',
        },
        {
          name: "chipClearIcon",
          global: false,
          description: "The icon to show in the chip buttons",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"lucide:x"',
        },
        {
          name: "dropdownIcon",
          global: false,
          description: "The icon to show in the dropdown button",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"lucide:chevron-down"',
        },
        {
          name: "displayValue",
          global: false,
          description:
            "A function used to render the items as strings in either the input or the tag when multiple is true.",
          tags: [],
          required: false,
          type: "((item: unknown) => string) | undefined",
          default: "undefined",
        },
        {
          name: "filterDebounce",
          global: false,
          description: "The debounce time for the filterItems method.",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "0",
        },
        {
          name: "filterItems",
          global: false,
          description:
            "A function to filter the items when query is changed.\n\nYou can use this method to implement your own filtering logic or to fetch items from an API.",
          tags: [],
          required: false,
          type: "((query?: string | undefined, items?: unknown[] | undefined) => unknown[] | Promise<unknown[]>) | undefined",
          default: "undefined",
        },
        {
          name: "allowCreate",
          global: false,
          description: "Allow custom entries by the user",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
        {
          name: "hideCreatePrompt",
          global: false,
          description:
            "Hide the create custom prompt (just set the model to the value entered)",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
        {
          name: "clearable",
          global: false,
          description: "Whether the component can be cleared by the user.",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
        {
          name: "colorFocus",
          global: false,
          description: "Wether the border should change color when focused",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
        {
          name: "dropdown",
          global: false,
          description: "Display a chevron icon to open suggestions",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
        {
          name: "multiple",
          global: false,
          description: "Whether the component allows multiple selections.",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
        {
          name: "properties",
          global: false,
          description:
            "The properties to use for the value, label, sublabel, media, and icon of the options items.",
          tags: [],
          required: false,
          type: "{ value?: string | undefined; label?: string | undefined; sublabel?: string | undefined; media?: string | undefined; icon?: string | undefined; } | undefined",
          default: "undefined",
        },
        {
          name: "i18n",
          global: false,
          description: "Translation strings.",
          tags: [
            {
              name: "default",
              text: "{ empty: 'Nothing found.', pending: 'Loading ...' }",
            },
          ],
          required: false,
          type: "{ empty: string; pending: string; } | undefined",
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "item",
          type: "{ query: string; filteredItems: unknown[]; pending: boolean; items: unknown[]; item: unknown; active: boolean; selected: boolean; }",
          description: "",
        },
        {
          name: "label",
          type: "{ query: string; filteredItems: unknown[]; pending: boolean; items: unknown[]; }",
          description: "",
        },
        {
          name: "pending",
          type: "{ query: string; filteredItems: unknown[]; pending: boolean; items: unknown[]; }",
          description: "",
        },
        {
          name: "empty",
          type: "{ query: string; filteredItems: unknown[]; pending: boolean; items: unknown[]; }",
          description: "",
        },
        {
          name: "start-item",
          type: "{ query: string; filteredItems: unknown[]; pending: boolean; items: unknown[]; }",
          description: "",
        },
        {
          name: "end-item",
          type: "{ query: string; filteredItems: unknown[]; pending: boolean; items: unknown[]; }",
          description: "",
        },
        {
          name: "create-item",
          type: "{ query: string; filteredItems: unknown[]; pending: boolean; items: unknown[]; active: boolean; selected: boolean; }",
          description: "",
        },
        {
          name: "autocomplete-multiple-list-item",
          type: "{ item: unknown; displayValue: string; removeItem: (item: unknown) => void; }",
          description: "",
        },
        {
          name: "icon",
          type: "{ iconName: string; }",
          description: "",
        },
        {
          name: "clear-icon",
          type: "any",
          description: "",
        },
        {
          name: "dropdown-icon",
          type: "any",
          description: "",
        },
      ],
      events: [
        {
          name: "keydown",
          type: "[event: KeyboardEvent]",
          signature: '(evt: "keydown", event: KeyboardEvent): void',
        },
        {
          name: "update:modelValue",
          type: "[modelValue: unknown]",
          signature: '(evt: "update:modelValue", modelValue: unknown): void',
        },
      ],
      exposed: [],
    },
  },
  BaseAutocompleteItem: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseAutocompleteItem",
    kebabName: "base-autocomplete-item",
    chunkName: "components/base-autocomplete-item",
    export: "default",
    priority: 0,
    meta: {
      type: 2,
      props: [
        {
          name: "rounded",
          global: false,
          description: "The radius of the component.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "active",
          global: false,
          description: "Whether the item is focus/hover or not.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "properties",
          global: false,
          description:
            "The properties to use for the value, label, sublabel, media, and icon of the options items.",
          tags: [],
          required: false,
          type: "{ label?: ((arg: object) => string) | undefined; sublabel?: ((arg: object) => string) | undefined; media?: ((arg: object) => string) | undefined; icon?: ((arg: object) => string) | undefined; } | undefined",
          default:
            '({\n    label: "label",\n    sublabel: "sublabel",\n    media: "media",\n    icon: "icon",\n}) as any',
        },
        {
          name: "item",
          global: false,
          description: "The items to display in the component.",
          tags: [],
          required: false,
          type: "object | undefined",
          default: "undefined",
        },
        {
          name: "selectedIcon",
          global: false,
          description: "The icon to show when the component is selected.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"lucide:check"',
        },
        {
          name: "selected",
          global: false,
          description: "Whether the item is selected or not.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "mark",
          global: false,
          description: "CSS Class applied to the matching part of the text.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"nui-mark"',
        },
      ],
      slots: [
        {
          name: "selected-icon",
          type: "any",
          description: "",
        },
      ],
      events: [],
      exposed: [],
    },
  },
  BaseCheckbox: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseCheckbox",
    kebabName: "base-checkbox",
    chunkName: "components/base-checkbox",
    export: "default",
    priority: 0,
    meta: {
      type: 2,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the checkbox.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "muted" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the checkbox.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the wrapper, label, and input elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; label?: string | string[] | undefined; input?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "disabled",
          global: false,
          description: "Whether the checkbox is disabled.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "label",
          global: false,
          description: "The label to display for the checkbox.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "value",
          global: false,
          description: "Defines the value of the checkbox when it's checked.",
          tags: [],
          required: false,
          type: "unknown",
          default: "undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "unknown",
        },
        {
          name: "error",
          global: false,
          description: "An error message to display below the checkbox label.",
          tags: [],
          required: false,
          type: "string | boolean | undefined",
          default: '""',
        },
        {
          name: "trueValue",
          global: false,
          description: "The value to set when the checkbox is checked.",
          tags: [],
          required: false,
          type: "unknown",
          default: "true as any",
        },
        {
          name: "falseValue",
          global: false,
          description: "The value to set when the checkbox is unchecked.",
          tags: [],
          required: false,
          type: "unknown",
          default: "false as any",
        },
        {
          name: "indeterminate",
          global: false,
          description: "Whether the checkbox is in indeterminate state.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "any",
          description: "",
        },
      ],
      events: [],
      exposed: [],
    },
  },
  BaseCheckboxAnimated: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseCheckboxAnimated",
    kebabName: "base-checkbox-animated",
    chunkName: "components/base-checkbox-animated",
    export: "default",
    priority: 0,
    meta: {
      type: 2,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the checkbox.",
          tags: [
            {
              name: "default",
              text: "'primary'",
            },
          ],
          required: false,
          type: '"muted" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the wrapper, label, and input elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; label?: string | string[] | undefined; input?: string | string[] | undefined; } | undefined",
          default: "{\n    wrapper: [],\n    label: [],\n    input: [],\n}",
        },
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "value",
          global: false,
          description: "The value of the component.",
          tags: [],
          required: false,
          type: "unknown",
          default: "undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "unknown",
        },
        {
          name: "trueValue",
          global: false,
          description: "The value to set when the component is checked.",
          tags: [],
          required: false,
          type: "unknown",
          default: "true as any",
        },
        {
          name: "falseValue",
          global: false,
          description: "The value to set when the component is unchecked.",
          tags: [],
          required: false,
          type: "unknown",
          default: "false as any",
        },
      ],
      slots: [],
      events: [],
      exposed: [],
    },
  },
  BaseCheckboxHeadless: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseCheckboxHeadless",
    kebabName: "base-checkbox-headless",
    chunkName: "components/base-checkbox-headless",
    export: "default",
    priority: 0,
    meta: {
      type: 2,
      props: [
        {
          name: "label",
          global: false,
          description: "The label to display for the checkbox.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "value",
          global: false,
          description: "Defines the value of the checkbox when it's checked.",
          tags: [],
          required: false,
          type: "unknown",
          default: "undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "unknown",
        },
        {
          name: "trueValue",
          global: false,
          description: "The value to set when the checkbox is checked.",
          tags: [],
          required: false,
          type: "unknown",
          default: "true as any",
        },
        {
          name: "falseValue",
          global: false,
          description: "The value to set when the checkbox is unchecked.",
          tags: [],
          required: false,
          type: "unknown",
          default: "false as any",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{ value: unknown; }",
          description: "",
        },
      ],
      events: [],
      exposed: [],
    },
  },
  BaseFullscreenDropfile: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseFullscreenDropfile",
    kebabName: "base-fullscreen-dropfile",
    chunkName: "components/base-fullscreen-dropfile",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "Defines the color of the icon",
          tags: [
            {
              name: "since",
              text: "3.0.0",
            },
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"primary" | "dark" | "black" | undefined',
          default: "undefined",
        },
        {
          name: "label",
          global: false,
          description: "Label to display when file is being dropped.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"Drop your files"',
        },
        {
          name: "icon",
          global: false,
          description: "Icon to display when file is being dropped.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "filterFileDropped",
          global: false,
          description: "Allows to filter files when dropped.",
          tags: [],
          required: false,
          type: "((file: File) => boolean) | undefined",
          default: "true",
        },
      ],
      slots: [],
      events: [
        {
          name: "drop",
          type: "[value: FileList]",
          signature: '(event: "drop", value: FileList): void',
        },
      ],
      exposed: [
        {
          name: "color",
          type: '"primary" | "dark" | "black" | undefined',
          description: "Defines the color of the icon",
        },
        {
          name: "label",
          type: "string",
          description: "Label to display when file is being dropped.",
        },
        {
          name: "icon",
          type: "string",
          description: "Icon to display when file is being dropped.",
        },
        {
          name: "filterFileDropped",
          type: "(file: File) => boolean",
          description: "Allows to filter files when dropped.",
        },
        {
          name: "onDrop",
          type: "((value: FileList) => any) | undefined",
          description: "",
        },
      ],
    },
  },
  BaseInput: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseInput",
    kebabName: "base-input",
    chunkName: "components/base-input",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "rounded",
          global: false,
          description: "The radius of the input.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; label?: string | string[] | undefined; input?: string | string[] | undefined; addon?: string | string[] | undefined; error?: string | ... 1 more ... | undefined; icon?: string | ... 1 more ... | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the input.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          default: "undefined",
        },
        {
          name: "type",
          global: false,
          description: "The type of input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"text"',
        },
        {
          name: "label",
          global: false,
          description: "The label to display for the input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "contrast",
          global: false,
          description: "The contrast of the input.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          default: "undefined",
        },
        {
          name: "icon",
          global: false,
          description: "The icon to display for the input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "placeholder",
          global: false,
          description: "The placeholder to display for the input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "error",
          global: false,
          description:
            "An error message or boolean value indicating whether the input is in an error state.",
          tags: [],
          required: false,
          type: "string | boolean | undefined",
          default: "false",
        },
        {
          name: "loading",
          global: false,
          description: "Whether the input is in a loading state.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "string | number | undefined",
        },
        {
          name: "labelFloat",
          global: false,
          description: "If the label should be floating.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "colorFocus",
          global: false,
          description:
            "Whether the color of the input should change when it is focused.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "modelModifiers",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: 'Record<"number" | "trim" | "lazy", true> | undefined',
        },
      ],
      slots: [
        {
          name: "label",
          type: "{}",
          description: "",
        },
        {
          name: "icon",
          type: "{}",
          description: "",
        },
        {
          name: "action",
          type: "{}",
          description: "",
        },
      ],
      events: [
        {
          name: "update:modelValue",
          type: "[modelValue: string | number]",
          signature:
            '(event: "update:modelValue", modelValue: string | number): void',
        },
      ],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { label?(_: {}): any; icon?(_: {}): any; action?(_: {}): any; }",
          description: "",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the input.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; label?: string | string[] | undefined; input?: string | string[] | undefined; addon?: string | string[] | undefined; error?: string | ... 1 more ... | undefined; icon?: string | ... 1 more ... | undefined; }",
          description:
            "Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          description: "The size of the input.",
        },
        {
          name: "type",
          type: "string",
          description: "The type of input.",
        },
        {
          name: "loading",
          type: "boolean | undefined",
          description: "Whether the input is in a loading state.",
        },
        {
          name: "label",
          type: "string | undefined",
          description: "The label to display for the input.",
        },
        {
          name: "contrast",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          description: "The contrast of the input.",
        },
        {
          name: "icon",
          type: "string | undefined",
          description: "The icon to display for the input.",
        },
        {
          name: "onUpdate:modelValue",
          type: "((modelValue: string | number) => any) | undefined",
          description: "",
        },
        {
          name: "modelValue",
          type: "string | number | undefined",
          description: "",
        },
        {
          name: "labelFloat",
          type: "boolean | undefined",
          description: "If the label should be floating.",
        },
        {
          name: "placeholder",
          type: "string | undefined",
          description: "The placeholder to display for the input.",
        },
        {
          name: "error",
          type: "string | boolean",
          description:
            "An error message or boolean value indicating whether the input is in an error state.",
        },
        {
          name: "colorFocus",
          type: "boolean | undefined",
          description:
            "Whether the color of the input should change when it is focused.",
        },
        {
          name: "modelModifiers",
          type: 'Record<"number" | "trim" | "lazy", true> | undefined',
          description: "",
        },
        {
          name: "el",
          type: "any",
          description: "The underlying HTMLInputElement element.",
        },
        {
          name: "id",
          type: "any",
          description: "The internal id of the radio input.",
        },
      ],
    },
  },
  BaseInputFile: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseInputFile",
    kebabName: "base-input-file",
    chunkName: "components/base-input-file",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "rounded",
          global: false,
          description: "The radius of the file input.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the wrapper, label, input, text, error, and icon elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; label?: string | string[] | undefined; input?: string | string[] | undefined; text?: string | string[] | undefined; error?: string | string[] | undefined; icon?: string | ... 1 more ... | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the input.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          default: "undefined",
        },
        {
          name: "label",
          global: false,
          description: "The label to display for the file input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "contrast",
          global: false,
          description: "The contrast of the input.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | undefined',
          default: "undefined",
        },
        {
          name: "icon",
          global: false,
          description: "The icon to display for the file input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "placeholder",
          global: false,
          description: "The placeholder to display for the file input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "error",
          global: false,
          description:
            "An error message or boolean value indicating whether the file input is in an error state.",
          tags: [],
          required: false,
          type: "string | boolean | undefined",
          default: "false",
        },
        {
          name: "i18n",
          global: false,
          description: "Translation strings.",
          tags: [
            {
              name: "default",
              text: "{ empty: 'No file chosen', invalid: 'Invalid file selected', multiple: '{count} files selected'}",
            },
          ],
          required: false,
          type: "{ empty: string; invalid: string; multiple: string; } | undefined",
          default: "undefined",
        },
        {
          name: "textValue",
          global: false,
          description: "Method to return the text value of the file input.",
          tags: [],
          required: false,
          type: "((fileList?: FileList | null | undefined) => string) | undefined",
          default: "undefined",
        },
        {
          name: "loading",
          global: false,
          description: "Whether the file input is in a loading state.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "FileList | null | undefined",
        },
        {
          name: "colorFocus",
          global: false,
          description:
            "Whether the color of the file input should change when it is focused.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "label",
          type: "{}",
          description: "",
        },
        {
          name: "icon",
          type: "{}",
          description: "",
        },
      ],
      events: [
        {
          name: "update:modelValue",
          type: "[modelValue: FileList | null]",
          signature:
            '(event: "update:modelValue", modelValue: FileList | null): void',
        },
      ],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { label?(_: {}): any; icon?(_: {}): any; }",
          description: "",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the file input.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; label?: string | string[] | undefined; input?: string | string[] | undefined; text?: string | string[] | undefined; error?: string | string[] | undefined; icon?: string | ... 1 more ... | undefined; }",
          description:
            "Optional CSS classes to apply to the wrapper, label, input, text, error, and icon elements.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          description: "The size of the input.",
        },
        {
          name: "loading",
          type: "boolean | undefined",
          description: "Whether the file input is in a loading state.",
        },
        {
          name: "label",
          type: "string | undefined",
          description: "The label to display for the file input.",
        },
        {
          name: "contrast",
          type: '"default" | "default-contrast" | undefined',
          description: "The contrast of the input.",
        },
        {
          name: "icon",
          type: "string | undefined",
          description: "The icon to display for the file input.",
        },
        {
          name: "onUpdate:modelValue",
          type: "((modelValue: FileList | null) => any) | undefined",
          description: "",
        },
        {
          name: "modelValue",
          type: "FileList | null | undefined",
          description: "",
        },
        {
          name: "placeholder",
          type: "string | undefined",
          description: "The placeholder to display for the file input.",
        },
        {
          name: "error",
          type: "string | boolean",
          description:
            "An error message or boolean value indicating whether the file input is in an error state.",
        },
        {
          name: "colorFocus",
          type: "boolean | undefined",
          description:
            "Whether the color of the file input should change when it is focused.",
        },
        {
          name: "i18n",
          type: "{ empty: string; invalid: string; multiple: string; } | undefined",
          description: "Translation strings.",
        },
        {
          name: "textValue",
          type: "((fileList?: FileList | null | undefined) => string) | undefined",
          description: "Method to return the text value of the file input.",
        },
        {
          name: "el",
          type: "any",
          description: "The underlying HTMLInputElement element.",
        },
        {
          name: "id",
          type: "any",
          description: "The internal id of the radio input.",
        },
      ],
    },
  },
  BaseInputFileHeadless: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseInputFileHeadless",
    kebabName: "base-input-file-headless",
    chunkName: "components/base-input-file-headless",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "multiple",
          global: false,
          description: "Allows multiple files to be selected.",
          tags: [],
          required: false,
          type: "boolean | undefined",
          default: "false",
        },
        {
          name: "filterFileDropped",
          global: false,
          description: "Allows to filter files when dropped.",
          tags: [],
          required: false,
          type: "((file: File) => boolean) | undefined",
          default: "true",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "FileList | null | undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{ id: any; el: any; files: FileList | null | undefined; open: () => void; remove: (file?: File | undefined) => void; preview: (_file: MaybeRefOrGetter<File | null | undefined>) => any; drop: (event: DragEvent) => void; }",
          description: "",
        },
      ],
      events: [
        {
          name: "update:modelValue",
          type: "[modelValue: FileList | null]",
          signature:
            '(event: "update:modelValue", modelValue: FileList | null): void',
        },
      ],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: { id: any; el: any; files: FileList | null | undefined; open: () => void; remove: (file?: File | undefined) => void; preview: (_file: MaybeRefOrGetter<...>) => any; drop: (event: DragEvent) => void; }): any; }",
          description: "",
        },
        {
          name: "onUpdate:modelValue",
          type: "((modelValue: FileList | null) => any) | undefined",
          description: "",
        },
        {
          name: "modelValue",
          type: "FileList | null | undefined",
          description: "",
        },
        {
          name: "multiple",
          type: "boolean",
          description: "Allows multiple files to be selected.",
        },
        {
          name: "filterFileDropped",
          type: "(file: File) => boolean",
          description: "Allows to filter files when dropped.",
        },
        {
          name: "el",
          type: "any",
          description: "The underlying HTMLInputElement element.",
        },
        {
          name: "id",
          type: "any",
          description: "The form input identifier.",
        },
        {
          name: "files",
          type: "FileList | null | undefined",
          description: "The model value of the file input.",
        },
        {
          name: "open",
          type: "() => void",
          description: "Opens the native file input selector.",
        },
        {
          name: "remove",
          type: "(file?: File | undefined) => void",
          description: "Removes a file from the input.",
        },
        {
          name: "preview",
          type: "(_file: MaybeRefOrGetter<File | null | undefined>) => any",
          description: "Returns the preview DataURL of a file.",
        },
        {
          name: "drop",
          type: "(event: DragEvent) => void",
          description: "Handles the drop event.",
        },
      ],
    },
  },
  BaseInputHelpText: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseInputHelpText",
    kebabName: "base-input-help-text",
    chunkName: "components/base-input-help-text",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the button.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | "light" | undefined',
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { default?(_: {}): any; }",
          description: "",
        },
        {
          name: "color",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "none" | "light" | undefined',
          description: "The color of the button.",
        },
      ],
    },
  },
  BaseInputNumber: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseInputNumber",
    kebabName: "base-input-number",
    chunkName: "components/base-input-number",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "rounded",
          global: false,
          description: "The radius of the input.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; label?: string | string[] | undefined; input?: string | string[] | undefined; addon?: string | string[] | undefined; error?: string | ... 1 more ... | undefined; icon?: string | ... 1 more ... | undefined; buttons?: string | ... 1 more...",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the input.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          default: "undefined",
        },
        {
          name: "type",
          global: false,
          description: "The type of input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"text"',
        },
        {
          name: "label",
          global: false,
          description: "The label to display for the input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "contrast",
          global: false,
          description: "The contrast of the input.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          default: "undefined",
        },
        {
          name: "icon",
          global: false,
          description: "The icon to display for the input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "max",
          global: false,
          description: "Maximum value allowed when decrementing",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "undefined",
        },
        {
          name: "placeholder",
          global: false,
          description: "The placeholder to display for the input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "error",
          global: false,
          description:
            "An error message or boolean value indicating whether the input is in an error state.",
          tags: [],
          required: false,
          type: "string | boolean | undefined",
          default: "false",
        },
        {
          name: "min",
          global: false,
          description: "Minimum value allowed when decrementing",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "undefined",
        },
        {
          name: "step",
          global: false,
          description:
            "Sets the stepping interval when clicking up and down spinner buttons",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "1",
        },
        {
          name: "inputmode",
          global: false,
          description:
            "The inputmode to use for the input, usually for mobile devices.",
          tags: [],
          required: false,
          type: '"numeric" | "decimal" | undefined',
          default: "undefined",
        },
        {
          name: "iconDecrement",
          global: false,
          description: "The icon to display for the decrement button.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"lucide:minus"',
        },
        {
          name: "iconIncrement",
          global: false,
          description: "The icon to display for the increment button.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"lucide:plus"',
        },
        {
          name: "loading",
          global: false,
          description: "Whether the input is in a loading state.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "disabled",
          global: false,
          description: "Whether the input is in a disabled state.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "number | undefined",
        },
        {
          name: "labelFloat",
          global: false,
          description: "If the label should be floating.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "colorFocus",
          global: false,
          description:
            "Whether the color of the input should change when it is focused.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "modelModifiers",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: 'Record<"lazy" | "raw", true> | undefined',
        },
      ],
      slots: [
        {
          name: "label",
          type: "{}",
          description: "",
        },
        {
          name: "icon",
          type: "{}",
          description: "",
        },
      ],
      events: [
        {
          name: "update:modelValue",
          type: "[modelValue: number]",
          signature: '(event: "update:modelValue", modelValue: number): void',
        },
      ],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { label?(_: {}): any; icon?(_: {}): any; }",
          description: "",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the input.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; label?: string | string[] | undefined; input?: string | string[] | undefined; addon?: string | string[] | undefined; error?: string | ... 1 more ... | undefined; icon?: string | ... 1 more ... | undefined; buttons?: string | ... 1 more...",
          description:
            "Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          description: "The size of the input.",
        },
        {
          name: "type",
          type: "string",
          description: "The type of input.",
        },
        {
          name: "loading",
          type: "boolean | undefined",
          description: "Whether the input is in a loading state.",
        },
        {
          name: "disabled",
          type: "boolean | undefined",
          description: "Whether the input is in a disabled state.",
        },
        {
          name: "label",
          type: "string | undefined",
          description: "The label to display for the input.",
        },
        {
          name: "contrast",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          description: "The contrast of the input.",
        },
        {
          name: "icon",
          type: "string | undefined",
          description: "The icon to display for the input.",
        },
        {
          name: "max",
          type: "number | undefined",
          description: "Maximum value allowed when decrementing",
        },
        {
          name: "onUpdate:modelValue",
          type: "((modelValue: number) => any) | undefined",
          description: "",
        },
        {
          name: "modelValue",
          type: "number | undefined",
          description: "",
        },
        {
          name: "labelFloat",
          type: "boolean | undefined",
          description: "If the label should be floating.",
        },
        {
          name: "placeholder",
          type: "string | undefined",
          description: "The placeholder to display for the input.",
        },
        {
          name: "error",
          type: "string | boolean",
          description:
            "An error message or boolean value indicating whether the input is in an error state.",
        },
        {
          name: "colorFocus",
          type: "boolean | undefined",
          description:
            "Whether the color of the input should change when it is focused.",
        },
        {
          name: "modelModifiers",
          type: 'Record<"lazy" | "raw", true> | undefined',
          description: "",
        },
        {
          name: "min",
          type: "number | undefined",
          description: "Minimum value allowed when decrementing",
        },
        {
          name: "step",
          type: "number",
          description:
            "Sets the stepping interval when clicking up and down spinner buttons",
        },
        {
          name: "inputmode",
          type: '"numeric" | "decimal" | undefined',
          description:
            "The inputmode to use for the input, usually for mobile devices.",
        },
        {
          name: "iconDecrement",
          type: "string",
          description: "The icon to display for the decrement button.",
        },
        {
          name: "iconIncrement",
          type: "string",
          description: "The icon to display for the increment button.",
        },
        {
          name: "el",
          type: "any",
          description: "The underlying HTMLInputElement element.",
        },
        {
          name: "id",
          type: "any",
          description: "The internal id of the radio input.",
        },
      ],
    },
  },
  BaseListbox: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseListbox",
    kebabName: "base-listbox",
    chunkName: "components/base-listbox",
    export: "default",
    priority: 0,
    meta: {
      type: 2,
      props: [
        {
          name: "items",
          global: false,
          description: "The items to display in the multiselect.",
          tags: [],
          required: true,
          type: "unknown[]",
        },
        {
          name: "rounded",
          global: false,
          description: "The radius of the multiselect.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; label?: string | string[] | undefined; button?: string | string[] | undefined; icon?: string | string[] | undefined; error?: string | ... 1 more ... | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the listbox.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          default: "undefined",
        },
        {
          name: "fixed",
          global: false,
          description: "Used a fixed strategy to float the component",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "loading",
          global: false,
          description: "Whether the multiselect is in a loading state.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "disabled",
          global: false,
          description: "Whether the multiselect is disabled.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "label",
          global: false,
          description: "The label to display for the multiselect.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "placement",
          global: false,
          description: "The placement of the component via floating-ui.",
          tags: [
            {
              name: "default",
              text: "'bottom-start'",
            },
          ],
          required: false,
          type: '"top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end" | undefined',
          default: "undefined",
        },
        {
          name: "floatOptions",
          global: false,
          description: "Optional options for the underlying float component.",
          tags: [],
          required: false,
          type: "FloatProps | undefined",
          default: "{}",
        },
        {
          name: "contrast",
          global: false,
          description: "The contrast of the listbox.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          default: "undefined",
        },
        {
          name: "icon",
          global: false,
          description: "The icon to display for the multiselect.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "unknown",
        },
        {
          name: "labelFloat",
          global: false,
          description: "If the label should be floating.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "placeholder",
          global: false,
          description:
            "The placeholder text to display when no selection has been made.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "error",
          global: false,
          description:
            "An error message or boolean value indicating whether the input is in an error state.",
          tags: [],
          required: false,
          type: "string | boolean | undefined",
          default: "false",
        },
        {
          name: "colorFocus",
          global: false,
          description: "Wether the border should change color when focused",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "multiple",
          global: false,
          description: "Whether the multiselect allows multiple selections.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "properties",
          global: false,
          description:
            "The properties to use for the value, label, sublabel, media, and icon of the options items.",
          tags: [],
          required: false,
          type: "{ value?: string | undefined; label?: string | undefined; sublabel?: string | undefined; media?: string | undefined; icon?: string | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "selectedIcon",
          global: false,
          description: "The icon to show when the component is selected.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"lucide:check"',
        },
        {
          name: "multipleLabel",
          global: false,
          description:
            "The label to display for multiple selections, or a function that returns the label.",
          tags: [],
          required: false,
          type: "string | ((value: unknown[], labelProperty?: string | undefined) => string) | undefined",
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "label",
          type: "any",
          description: "",
        },
        {
          name: "icon",
          type: "any",
          description: "",
        },
        {
          name: "listbox-button",
          type: "{ value: unknown; open: boolean; }",
          description: "",
        },
        {
          name: "listbox-item",
          type: "{ item: unknown; open: boolean; active: boolean; selected: boolean; }",
          description: "",
        },
      ],
      events: [],
      exposed: [],
    },
  },
  BaseListboxItem: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseListboxItem",
    kebabName: "base-listbox-item",
    chunkName: "components/base-listbox-item",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "value",
          global: false,
          description: "The values to display in the component.",
          tags: [],
          required: false,
          type: "{ value?: any; label?: string | undefined; sublabel?: string | undefined; media?: string | undefined; icon?: string | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "selectedIcon",
          global: false,
          description: "The icon to show when the component is selected.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '"lucide:check"',
        },
        {
          name: "active",
          global: false,
          description: "Whether the item is focus/hover or not.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "selected",
          global: false,
          description: "Whether the item is selected or not.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [],
      events: [],
      exposed: [
        {
          name: "active",
          type: "boolean | undefined",
          description: "Whether the item is focus/hover or not.",
        },
        {
          name: "value",
          type: "{ value?: any; label?: string | undefined; sublabel?: string | undefined; media?: string | undefined; icon?: string | undefined; }",
          description: "The values to display in the component.",
        },
        {
          name: "selectedIcon",
          type: "string",
          description: "The icon to show when the component is selected.",
        },
        {
          name: "selected",
          type: "boolean | undefined",
          description: "Whether the item is selected or not.",
        },
      ],
    },
  },
  BaseRadio: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseRadio",
    kebabName: "base-radio",
    chunkName: "components/base-radio",
    export: "default",
    priority: 0,
    meta: {
      type: 2,
      props: [
        {
          name: "color",
          global: false,
          description: "The color of the radio.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "muted" | "primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | "light" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Classes to apply to the various parts of the radio input.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; label?: string | string[] | undefined; inputDot?: string | string[] | undefined; inputBg?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "label",
          global: false,
          description: "The label for the radio input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "value",
          global: false,
          description: "The value of the radio input.",
          tags: [],
          required: false,
          type: "unknown",
          default: "undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "unknown",
        },
        {
          name: "error",
          global: false,
          description: "An error message to display below the radio label.",
          tags: [],
          required: false,
          type: "string | boolean | undefined",
          default: "undefined",
        },
      ],
      slots: [
        {
          name: "default",
          type: "any",
          description: "",
        },
      ],
      events: [],
      exposed: [],
    },
  },
  BaseRadioHeadless: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseRadioHeadless",
    kebabName: "base-radio-headless",
    chunkName: "components/base-radio-headless",
    export: "default",
    priority: 0,
    meta: {
      type: 2,
      props: [
        {
          name: "label",
          global: false,
          description: "The label for the radio input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "name",
          global: false,
          description: "The name of the radio input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "value",
          global: false,
          description: "The value of the radio input.",
          tags: [],
          required: false,
          type: "unknown",
          default: "undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "unknown",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{ value: unknown; }",
          description: "",
        },
      ],
      events: [],
      exposed: [],
    },
  },
  BaseSelect: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseSelect",
    kebabName: "base-select",
    chunkName: "components/base-select",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "rounded",
          global: false,
          description: "The radius of the select input.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description: "Classes to apply to the select input.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; label?: string | string[] | undefined; select?: string | string[] | undefined; chevron?: string | string[] | undefined; icon?: string | ... 1 more ... | undefined; error?: string | ... 1 more ... | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the select input.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          default: "undefined",
        },
        {
          name: "label",
          global: false,
          description: "The label text for the select input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "contrast",
          global: false,
          description: "The contrast of the select input.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          default: "undefined",
        },
        {
          name: "icon",
          global: false,
          description: "An icon to display in the select input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "placeholder",
          global: false,
          description: "The placeholder to display for the select input.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "error",
          global: false,
          description:
            "An error message to display, or a boolean indicating whether there is an error.",
          tags: [],
          required: false,
          type: "string | boolean | undefined",
          default: "false",
        },
        {
          name: "loading",
          global: false,
          description: "Whether the select input is in a loading state.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "disabled",
          global: false,
          description: "Whether the select input is disabled.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "any",
        },
        {
          name: "labelFloat",
          global: false,
          description: "If the label should be floating.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "colorFocus",
          global: false,
          description:
            "Whether the color of the input should change when it is focused.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "label",
          type: "{}",
          description: "",
        },
        {
          name: "default",
          type: "{}",
          description: "",
        },
        {
          name: "icon",
          type: "{}",
          description: "",
        },
      ],
      events: [
        {
          name: "update:modelValue",
          type: "[modelValue: any]",
          signature: '(event: "update:modelValue", modelValue: any): void',
        },
      ],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { label?(_: {}): any; default?(_: {}): any; icon?(_: {}): any; }",
          description: "",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the select input.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; label?: string | string[] | undefined; select?: string | string[] | undefined; chevron?: string | string[] | undefined; icon?: string | ... 1 more ... | undefined; error?: string | ... 1 more ... | undefined; }",
          description: "Classes to apply to the select input.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | "xl" | undefined',
          description: "The size of the select input.",
        },
        {
          name: "loading",
          type: "boolean | undefined",
          description: "Whether the select input is in a loading state.",
        },
        {
          name: "disabled",
          type: "boolean | undefined",
          description: "Whether the select input is disabled.",
        },
        {
          name: "label",
          type: "string",
          description: "The label text for the select input.",
        },
        {
          name: "contrast",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          description: "The contrast of the select input.",
        },
        {
          name: "icon",
          type: "string | undefined",
          description: "An icon to display in the select input.",
        },
        {
          name: "onUpdate:modelValue",
          type: "((modelValue: any) => any) | undefined",
          description: "",
        },
        {
          name: "modelValue",
          type: "any",
          description: "",
        },
        {
          name: "labelFloat",
          type: "boolean | undefined",
          description: "If the label should be floating.",
        },
        {
          name: "placeholder",
          type: "string",
          description: "The placeholder to display for the select input.",
        },
        {
          name: "error",
          type: "string | boolean",
          description:
            "An error message to display, or a boolean indicating whether there is an error.",
        },
        {
          name: "colorFocus",
          type: "boolean | undefined",
          description:
            "Whether the color of the input should change when it is focused.",
        },
        {
          name: "el",
          type: "any",
          description: "The underlying HTMLInputElement element.",
        },
        {
          name: "id",
          type: "any",
          description: "The internal id of the radio input.",
        },
      ],
    },
  },
  BaseSwitchBall: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseSwitchBall",
    kebabName: "base-switch-ball",
    chunkName: "components/base-switch-ball",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "Main color of the switch.",
          tags: [
            {
              name: "default",
              text: "'primary'",
            },
          ],
          required: false,
          type: '"primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; input?: string | string[] | undefined; handle?: string | string[] | undefined; track?: string | string[] | undefined; icon?: string | ... 1 more ... | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "label",
          global: false,
          description: "Accessible label for the switch.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "sublabel",
          global: false,
          description: "The sublabel of the switch.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [],
      events: [
        {
          name: "update:modelValue",
          type: "[modelValue: boolean]",
          signature: '(event: "update:modelValue", modelValue: boolean): void',
        },
      ],
      exposed: [
        {
          name: "color",
          type: '"primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | undefined',
          description: "Main color of the switch.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; input?: string | string[] | undefined; handle?: string | string[] | undefined; track?: string | string[] | undefined; icon?: string | ... 1 more ... | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
        {
          name: "label",
          type: "string | undefined",
          description: "Accessible label for the switch.",
        },
        {
          name: "onUpdate:modelValue",
          type: "((modelValue: boolean) => any) | undefined",
          description: "",
        },
        {
          name: "modelValue",
          type: "boolean | undefined",
          description: "",
        },
        {
          name: "sublabel",
          type: "string | undefined",
          description: "The sublabel of the switch.",
        },
        {
          name: "el",
          type: "any",
          description: "The underlying HTMLInputElement element.",
        },
        {
          name: "id",
          type: "any",
          description: "The internal id of the radio input.",
        },
      ],
    },
  },
  BaseSwitchThin: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseSwitchThin",
    kebabName: "base-switch-thin",
    chunkName: "components/base-switch-thin",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "color",
          global: false,
          description: "Main color of the switch.",
          tags: [
            {
              name: "default",
              text: "'primary'",
            },
          ],
          required: false,
          type: '"primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the component inner elements.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; input?: string | string[] | undefined; handle?: string | string[] | undefined; track?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "label",
          global: false,
          description: "Accessible label of the switch.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "sublabel",
          global: false,
          description: "The sublabel of the switch.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [],
      events: [
        {
          name: "update:modelValue",
          type: "[modelValue: boolean]",
          signature: '(event: "update:modelValue", modelValue: boolean): void',
        },
      ],
      exposed: [
        {
          name: "color",
          type: '"primary" | "info" | "success" | "warning" | "danger" | "dark" | "black" | undefined',
          description: "Main color of the switch.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; outer?: string | string[] | undefined; input?: string | string[] | undefined; handle?: string | string[] | undefined; track?: string | string[] | undefined; }",
          description:
            "Optional CSS classes to apply to the component inner elements.",
        },
        {
          name: "label",
          type: "string | undefined",
          description: "Accessible label of the switch.",
        },
        {
          name: "onUpdate:modelValue",
          type: "((modelValue: boolean) => any) | undefined",
          description: "",
        },
        {
          name: "modelValue",
          type: "boolean | undefined",
          description: "",
        },
        {
          name: "sublabel",
          type: "string | undefined",
          description: "The sublabel of the switch.",
        },
        {
          name: "el",
          type: "any",
          description: "The underlying HTMLInputElement element.",
        },
        {
          name: "id",
          type: "any",
          description: "The internal id of the radio input.",
        },
      ],
    },
  },
  BaseTextarea: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseTextarea",
    kebabName: "base-textarea",
    chunkName: "components/base-textarea",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "rounded",
          global: false,
          description: "The radius of the textarea.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "classes",
          global: false,
          description:
            "A set of classes to apply to the various elements of the textarea.",
          tags: [],
          required: false,
          type: "{ wrapper?: string | string[] | undefined; label?: string | string[] | undefined; textarea?: string | string[] | undefined; addon?: string | string[] | undefined; error?: string | string[] | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "size",
          global: false,
          description: "The size of the textarea.",
          tags: [
            {
              name: "default",
              text: "'md'",
            },
          ],
          required: false,
          type: '"sm" | "md" | "lg" | undefined',
          default: "undefined",
        },
        {
          name: "label",
          global: false,
          description: "The label for the textarea.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "id",
          global: false,
          description: "The form input identifier.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "name",
          global: false,
          description: "The name of the textarea.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: "undefined",
        },
        {
          name: "contrast",
          global: false,
          description: "The contrast of the textarea.",
          tags: [
            {
              name: "default",
              text: "'default'",
            },
          ],
          required: false,
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          default: "undefined",
        },
        {
          name: "placeholder",
          global: false,
          description: "The placeholder text for the textarea.",
          tags: [],
          required: false,
          type: "string | undefined",
          default: '""',
        },
        {
          name: "error",
          global: false,
          description:
            "The error message for the textarea, or whether it is in an error state.",
          tags: [],
          required: false,
          type: "string | boolean | undefined",
          default: "false",
        },
        {
          name: "rows",
          global: false,
          description: "The number of rows to display in the textarea.",
          tags: [],
          required: false,
          type: "string | number | undefined",
          default: "4",
        },
        {
          name: "maxHeight",
          global: false,
          description:
            "The maximum height of the textarea when autogrow is enabled.",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "undefined",
        },
        {
          name: "loading",
          global: false,
          description: "Whether the textarea is in a loading state.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "disabled",
          global: false,
          description: "Whether the textarea is disabled.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "string | undefined",
        },
        {
          name: "labelFloat",
          global: false,
          description: "If the label should be floating.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "colorFocus",
          global: false,
          description: "Whether to apply the focus color to the textarea.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "modelModifiers",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: 'Record<"trim" | "lazy", true> | undefined',
        },
        {
          name: "readonly",
          global: false,
          description: "Whether the textarea is read-only.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "addon",
          global: false,
          description: "Whether to display an addon element in the textarea.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "resize",
          global: false,
          description: "Whether to allow the user to resize the textarea.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
        {
          name: "autogrow",
          global: false,
          description:
            "Whether to automatically grow the textarea as text is entered.",
          tags: [],
          required: false,
          type: "boolean | undefined",
        },
      ],
      slots: [
        {
          name: "label",
          type: "{}",
          description: "",
        },
        {
          name: "addon",
          type: "{}",
          description: "",
        },
      ],
      events: [
        {
          name: "update:modelValue",
          type: "[modelValue: string]",
          signature: '(event: "update:modelValue", modelValue: string): void',
        },
      ],
      exposed: [
        {
          name: "$slots",
          type: "Readonly<InternalSlots> & { label?(_: {}): any; addon?(_: {}): any; }",
          description: "",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the textarea.",
        },
        {
          name: "classes",
          type: "{ wrapper?: string | string[] | undefined; label?: string | string[] | undefined; textarea?: string | string[] | undefined; addon?: string | string[] | undefined; error?: string | string[] | undefined; }",
          description:
            "A set of classes to apply to the various elements of the textarea.",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg" | undefined',
          description: "The size of the textarea.",
        },
        {
          name: "loading",
          type: "boolean | undefined",
          description: "Whether the textarea is in a loading state.",
        },
        {
          name: "disabled",
          type: "boolean | undefined",
          description: "Whether the textarea is disabled.",
        },
        {
          name: "label",
          type: "string | undefined",
          description: "The label for the textarea.",
        },
        {
          name: "name",
          type: "string | undefined",
          description: "The name of the textarea.",
        },
        {
          name: "contrast",
          type: '"default" | "default-contrast" | "muted" | "muted-contrast" | undefined',
          description: "The contrast of the textarea.",
        },
        {
          name: "onUpdate:modelValue",
          type: "((modelValue: string) => any) | undefined",
          description: "",
        },
        {
          name: "modelValue",
          type: "string | undefined",
          description: "",
        },
        {
          name: "labelFloat",
          type: "boolean | undefined",
          description: "If the label should be floating.",
        },
        {
          name: "placeholder",
          type: "string",
          description: "The placeholder text for the textarea.",
        },
        {
          name: "error",
          type: "string | boolean",
          description:
            "The error message for the textarea, or whether it is in an error state.",
        },
        {
          name: "colorFocus",
          type: "boolean | undefined",
          description: "Whether to apply the focus color to the textarea.",
        },
        {
          name: "modelModifiers",
          type: 'Record<"trim" | "lazy", true> | undefined',
          description: "",
        },
        {
          name: "readonly",
          type: "boolean | undefined",
          description: "Whether the textarea is read-only.",
        },
        {
          name: "addon",
          type: "boolean | undefined",
          description: "Whether to display an addon element in the textarea.",
        },
        {
          name: "rows",
          type: "string | number",
          description: "The number of rows to display in the textarea.",
        },
        {
          name: "resize",
          type: "boolean | undefined",
          description: "Whether to allow the user to resize the textarea.",
        },
        {
          name: "autogrow",
          type: "boolean | undefined",
          description:
            "Whether to automatically grow the textarea as text is entered.",
        },
        {
          name: "maxHeight",
          type: "number | undefined",
          description:
            "The maximum height of the textarea when autogrow is enabled.",
        },
        {
          name: "el",
          type: "any",
          description: "The underlying HTMLTextAreaElement element.",
        },
        {
          name: "id",
          type: "any",
          description: "The internal id of the radio input.",
        },
        {
          name: "fitSize",
          type: "() => void",
          description: "A method to resize the textarea to fit its content.",
        },
      ],
    },
  },
  BaseTreeSelect: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseTreeSelect",
    kebabName: "base-tree-select",
    chunkName: "components/base-tree-select",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "classes",
          global: false,
          description:
            "Optional CSS classes to apply to the wrapper, label, and input elements.",
          tags: [],
          required: false,
          type: "{ pendingIcon?: string | string[] | undefined; emptyIcon?: string | string[] | undefined; treeIcon?: string | string[] | undefined; itemIcon?: string | string[] | undefined; treeline?: string | string[] | undefined; checkbox?: any; } | undefined",
          default:
            '{\n    pendingIcon: "",\n    emptyIcon: "",\n    treeIcon: "",\n    itemIcon: "",\n    treeline: "border-muted-300 dark:border-muted-700",\n    checkbox: {\n        wrapper: "text-primary-500 scale-[0.8] me-1",\n    },\n}',
        },
        {
          name: "children",
          global: false,
          description: "The tree items",
          tags: [],
          required: false,
          type: "TreeViewTreeSource | undefined",
          default: "undefined",
        },
        {
          name: "i18n",
          global: false,
          description: "Translation strings.",
          tags: [],
          required: false,
          type: "{ pending: string; empty: string; } | undefined",
          default: '{\n    pending: "pending...",\n    empty: "empty",\n}',
        },
        {
          name: "icons",
          global: false,
          description: "Custom icons to use for the component.",
          tags: [],
          required: false,
          type: "{ open?: string | undefined; closed?: string | undefined; item?: string | undefined; pending?: string | undefined; empty?: string | undefined; } | undefined",
          default:
            '{\n    open: "lucide:minus",\n    closed: "lucide:plus",\n    item: "",\n    pending: "",\n    empty: "",\n}',
        },
        {
          name: "treeline",
          global: false,
          description: "Display a line between items of the same level.",
          tags: [],
          required: false,
          type: "boolean | { offset?: string | undefined; minLevel?: number | undefined; } | undefined",
          default: "false",
        },
        {
          name: "level",
          global: false,
          description: "",
          tags: [
            {
              name: "internal",
            },
          ],
          required: false,
          type: "number | undefined",
          default: "1",
        },
        {
          name: "parent",
          global: false,
          description: "",
          tags: [
            {
              name: "internal",
            },
          ],
          required: false,
          type: "any",
          default: "undefined",
        },
        {
          name: "modelValue",
          global: false,
          description: "",
          tags: [],
          required: false,
          type: "any[] | undefined",
        },
      ],
      slots: [
        {
          name: "pending",
          type: "any",
          description: "",
        },
        {
          name: "pending-icon",
          type: "any",
          description: "",
        },
        {
          name: "pending-label",
          type: "any",
          description: "",
        },
        {
          name: "empty",
          type: "any",
          description: "",
        },
        {
          name: "empty-icon",
          type: "any",
          description: "",
        },
        {
          name: "empty-label",
          type: "any",
          description: "",
        },
        {
          name: "item",
          type: "any",
          description: "",
        },
        {
          name: "item-icon",
          type: "any",
          description: "",
        },
        {
          name: "item-select",
          type: "any",
          description: "",
        },
        {
          name: "item-label",
          type: "any",
          description: "",
        },
        {
          name: "children",
          type: "any",
          description: "",
        },
      ],
      events: [
        {
          name: "update:modelValue",
          type: "[modelValue: any[]]",
          signature: '(event: "update:modelValue", modelValue: any[]): void',
        },
      ],
      exposed: [
        {
          name: "$slots",
          type: 'Readonly<InternalSlots> & { pending?(_: any): any; "pending-icon"?(_: any): any; "pending-label"?(_: any): any; empty?(_: any): any; "empty-icon"?(_: any): any; ... 5 more ...; children?(_: any): any; }',
          description: "",
        },
        {
          name: "classes",
          type: "{ pendingIcon?: string | string[] | undefined; emptyIcon?: string | string[] | undefined; treeIcon?: string | string[] | undefined; itemIcon?: string | string[] | undefined; treeline?: string | string[] | undefined; checkbox?: any; }",
          description:
            "Optional CSS classes to apply to the wrapper, label, and input elements.",
        },
        {
          name: "children",
          type: "TreeViewTreeSource | undefined",
          description: "The tree items",
        },
        {
          name: "onUpdate:modelValue",
          type: "((modelValue: any[]) => any) | undefined",
          description: "",
        },
        {
          name: "modelValue",
          type: "any[] | undefined",
          description: "",
        },
        {
          name: "i18n",
          type: "{ pending: string; empty: string; }",
          description: "Translation strings.",
        },
        {
          name: "icons",
          type: "{ open?: string | undefined; closed?: string | undefined; item?: string | undefined; pending?: string | undefined; empty?: string | undefined; }",
          description: "Custom icons to use for the component.",
        },
        {
          name: "treeline",
          type: "boolean | { offset?: string | undefined; minLevel?: number | undefined; }",
          description: "Display a line between items of the same level.",
        },
        {
          name: "level",
          type: "number",
          description: "",
        },
        {
          name: "parent",
          type: "any",
          description: "",
        },
        {
          name: "tree",
          type: "any",
          description: "The loaded tree items from the `children` prop.",
        },
        {
          name: "loadTree",
          type: "(source?: TreeViewTreeSource | undefined) => Promise<void>",
          description:
            "Force the component to load the tree from the `children` prop.",
        },
        {
          name: "getChildren",
          type: "(tree?: TreeViewTreeSource | undefined) => any",
          description: "Returns all nodes from a tree source",
        },
        {
          name: "getNodeChildren",
          type: "(node?: TreeViewItemNode | undefined) => any",
          description: "Returns the children from a node.",
        },
        {
          name: "areAllChildSelected",
          type: "(node?: TreeViewItemNode | undefined) => boolean",
          description: "Check if all sub-nodes are selected from a node.",
        },
        {
          name: "areSomeChildSelected",
          type: "(node?: TreeViewItemNode | undefined) => boolean",
          description: "Check if some sub-nodes are selected from a node.",
        },
        {
          name: "selectAllNode",
          type: "(node?: TreeViewItemNode | undefined) => void",
          description: "Select all sub-nodes from a node.",
        },
        {
          name: "unselectAllNode",
          type: "(node?: TreeViewItemNode | undefined) => void",
          description: "Unselect all leaf nodes from a node.",
        },
        {
          name: "isUndeterminate",
          type: "(node?: TreeViewItemNode | undefined) => boolean",
          description:
            "Is a node in undeterminate state. (some children are selected / children not loaded)",
        },
        {
          name: "isNodeLoaded",
          type: "(node?: TreeViewItemNode | undefined) => any",
          description: "Is a node loaded.",
        },
        {
          name: "toggleNodeSelection",
          type: "(node?: TreeViewItemNode | undefined, event?: Event | undefined) => void",
          description: "Invert the selection state from a node.",
        },
        {
          name: "toggleChildrenSelection",
          type: "(tree?: TreeViewItemNode[] | undefined, event?: Event | undefined) => void",
          description: "Invert the selection state.",
        },
        {
          name: "selectAllChildren",
          type: "(tree?: TreeViewItemNode[] | undefined) => void",
          description: "Select all nodes.",
        },
        {
          name: "unselectAllChildren",
          type: "(tree?: TreeViewItemNode[] | undefined) => void",
          description: "Unselect all nodes.",
        },
      ],
    },
  },
  BaseTreeSelectItem: {
    mode: "all",
    global: false,
    prefetch: false,
    preload: false,
    pascalName: "BaseTreeSelectItem",
    kebabName: "base-tree-select-item",
    chunkName: "components/base-tree-select-item",
    export: "default",
    priority: 0,
    meta: {
      type: 1,
      props: [
        {
          name: "rounded",
          global: false,
          description: "The radius of the component.",
          tags: [
            {
              name: "since",
              text: "2.0.0",
            },
            {
              name: "default",
              text: "'sm'",
            },
          ],
          required: false,
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          default: "undefined",
        },
        {
          name: "value",
          global: false,
          description: "The items to display in the component.",
          tags: [],
          required: false,
          type: "{ name?: string | undefined; text?: string | undefined; media?: string | undefined; icon?: string | undefined; } | undefined",
          default: "{}",
        },
        {
          name: "toggle",
          global: false,
          description: "Action triggered when the item is clicked.",
          tags: [],
          required: false,
          type: "(() => void) | undefined",
          default: "undefined",
        },
        {
          name: "level",
          global: false,
          description: "The level in the tree of the item.",
          tags: [],
          required: false,
          type: "number | undefined",
          default: "1",
        },
      ],
      slots: [
        {
          name: "default",
          type: "{}",
          description: "",
        },
        {
          name: "item-icon",
          type: "{}",
          description: "",
        },
      ],
      events: [],
      exposed: [
        {
          name: "$slots",
          type: 'Readonly<InternalSlots> & { default?(_: {}): any; "item-icon"?(_: {}): any; }',
          description: "",
        },
        {
          name: "rounded",
          type: '"none" | "sm" | "md" | "lg" | "full" | undefined',
          description: "The radius of the component.",
        },
        {
          name: "value",
          type: "{ name?: string | undefined; text?: string | undefined; media?: string | undefined; icon?: string | undefined; }",
          description: "The items to display in the component.",
        },
        {
          name: "toggle",
          type: "(() => void) | undefined",
          description: "Action triggered when the item is clicked.",
        },
        {
          name: "level",
          type: "number",
          description: "The level in the tree of the item.",
        },
      ],
    },
  },
  // ... existing code ...

  TairoCheckAnimated: {
    mode: "all",
    global: true,
    props: [
      {
        name: "color",
        type: "'primary' | 'info' | 'success' | 'warning' | 'danger'",
        default: "'success'",
        description: "The color of the icon",
      },
      {
        name: "size",
        type: "'xs' | 'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "The size of the icon",
      },
    ],
  },

  TairoContentWrapper: {
    mode: "all",
    global: true,
    props: [
      {
        name: "reverse",
        type: "boolean",
        default: "false",
        description: "Reverse the flex direction on desktop",
      },
    ],
    slots: [
      {
        name: "left",
        description: "Left side content",
      },
      {
        name: "right",
        description: "Right side content",
      },
      {
        name: "default",
        description: "Default slot content",
      },
    ],
  },

  TairoContentWrapperTabbed: {
    mode: "all",
    global: true,
    props: [
      {
        name: "title",
        type: "string",
        description: "Title text",
      },
      {
        name: "shape",
        type: "'straight' | 'rounded' | 'curved' | 'full'",
        default: "'rounded'",
        description: "Shape of the tabs",
      },
      {
        name: "labels",
        type: "string[]",
        required: true,
        description: "Labels for the tabs",
      },
      {
        name: "reverse",
        type: "boolean",
        default: "false",
        description: "Reverse the flex direction",
      },
    ],
    slots: [
      {
        name: "left",
        description: "Left side content",
      },
      {
        name: "right",
        description: "Right side content",
      },
      {
        name: "tab-1",
        description: "Content for first tab",
      },
      {
        name: "tab-2",
        description: "Content for second tab",
      },
    ],
  },

  TairoFlexTable: {
    mode: "all",
    global: true,
    slots: [
      {
        name: "header",
        description: "Table header content",
      },
      {
        name: "default",
        description: "Table body content",
      },
    ],
  },

  TairoFlexTableRow: {
    mode: "all",
    global: true,
    props: [
      {
        name: "rounded",
        type: "'none' | 'sm' | 'md' | 'lg'",
        description: "Border radius of the row",
      },
      {
        name: "spaced",
        type: "boolean",
        description: "Add extra padding",
      },
      {
        name: "condensed",
        type: "boolean",
        description: "Reduce padding between rows",
      },
    ],
    slots: [
      {
        name: "start",
        description: "Start content",
      },
      {
        name: "end",
        description: "End content",
      },
    ],
  },

  TairoFlexTableHeading: {
    mode: "all",
    global: true,
    props: [
      {
        name: "type",
        type: "'grow' | 'shrink' | 'stable'",
        default: "'stable'",
        description: "Type of column width behavior",
      },
    ],
  },

  TairoFlexTableCell: {
    mode: "all",
    global: true,
    props: [
      {
        name: "type",
        type: "'grow' | 'shrink' | 'stable'",
        default: "'stable'",
        description: "Type of column width behavior",
      },
      {
        name: "light",
        type: "boolean",
        description: "Use lighter text color",
      },
      {
        name: "clamp",
        type: "false | 1 | 2 | 3 | 4 | 5 | 6",
        default: "1",
        description: "Number of lines to clamp text to",
      },
    ],
  },

  TairoFormGroup: {
    mode: "all",
    global: true,
    props: [
      {
        name: "label",
        type: "string",
        description: "Form group label",
      },
      {
        name: "sublabel",
        type: "string",
        description: "Form group sublabel",
      },
    ],
  },

  TairoFormSave: {
    mode: "all",
    global: true,
    props: [
      {
        name: "rounded",
        type: "'none' | 'sm' | 'md' | 'lg' | 'full'",
        default: "'sm'",
        description: "Border radius of buttons",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Disable the buttons",
      },
      {
        name: "loading",
        type: "boolean",
        description: "Show loading state",
      },
    ],
    emits: [
      {
        name: "reset",
        description: "Reset form event",
      },
    ],
  },
  // ... previous components ...

  TairoModal: {
    mode: "all",
    global: true,
    props: [
      {
        name: "open",
        type: "boolean",
        description: "Whether the modal is open",
      },
      {
        name: "as",
        type: "string",
        default: "'div'",
        description: "The HTML tag to use as modal wrapper",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'",
        description: "The size of the modal",
      },
      {
        name: "rounded",
        type: "'none' | 'sm' | 'md' | 'lg'",
        default: "'sm'",
        description: "The radius of the modal",
      },
      {
        name: "footerAlign",
        type: "'start' | 'end' | 'center' | 'between'",
        default: "'end'",
        description: "The alignment of the footer content",
      },
      {
        name: "classes",
        type: "{ wrapper?: string | string[]; dialog?: string | string[]; }",
        description: "Optional CSS classes",
      },
    ],
    slots: [
      {
        name: "header",
        description: "Modal header content",
      },
      {
        name: "default",
        description: "Modal body content",
      },
      {
        name: "footer",
        description: "Modal footer content",
      },
    ],
    emits: [
      {
        name: "close",
        description: "Modal close event",
      },
    ],
  },

  TairoPopover: {
    mode: "all",
    global: true,
    props: [
      {
        name: "rounded",
        type: "'none' | 'sm' | 'md' | 'lg'",
        default: "'sm'",
        description: "The radius of the popover",
      },
      {
        name: "size",
        type: "'sm' | 'md' | 'lg'",
        default: "'md'",
        description: "The size of the popover",
      },
      {
        name: "orientation",
        type: "'start' | 'end'",
        default: "'start'",
        description: "The orientation of the popover (deprecated)",
      },
      {
        name: "fixed",
        type: "boolean",
        default: "false",
        description: "Used a fixed strategy to float the component",
      },
      {
        name: "placement",
        type: "'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'",
        description: "The placement of the dropdown via floating-ui",
      },
    ],
    slots: [
      {
        name: "default",
        description: "Trigger content",
      },
      {
        name: "content",
        description: "Popover content",
      },
    ],
  },

  TairoPopoverContentDual: {
    mode: "all",
    global: true,
    props: [
      {
        name: "stats",
        type: "Array<{ title: string; subtitle: string; icon?: string; image?: string; }>",
        description: "An array of stats to display",
      },
      {
        name: "image",
        type: "string",
        description: "The URL of the main image",
      },
      {
        name: "title",
        type: "string",
        description: "The main title",
      },
      {
        name: "subtitle",
        type: "string",
        description: "The main subtitle",
      },
      {
        name: "footerTitle",
        type: "string",
        description: "The title of the footer",
      },
      {
        name: "footerText",
        type: "string",
        description: "The text of the footer",
      },
      {
        name: "linkLabel",
        type: "string",
        description: "The label for the link",
      },
      {
        name: "to",
        type: "RouteLocationRaw",
        description: "The URL for the link",
      },
    ],
  },

  TairoPopoverContentHelp: {
    mode: "all",
    global: true,
    props: [
      {
        name: "title",
        type: "string",
        required: true,
        description: "The title of the help popover",
      },
      {
        name: "subtitle",
        type: "string",
        required: true,
        description: "The subtitle of the help popover",
      },
      {
        name: "text",
        type: "string",
        required: true,
        description: "The text of the help popover",
      },
      {
        name: "icon",
        type: "string",
        required: true,
        description: "The name of the icon to display",
      },
      {
        name: "iconColor",
        type: "'default' | 'none' | 'dark' | 'light' | 'muted' | 'black' | 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'default-contrast' | 'muted-contrast'",
        default: "'primary'",
        description: "The color of the icon",
      },
    ],
  },

  TairoPopoverContentMedia: {
    mode: "all",
    global: true,
    props: [
      {
        name: "images",
        type: "string[]",
        required: true,
        description: "An array of image URLs to display",
      },
      {
        name: "title",
        type: "string",
        required: true,
        description: "The main title",
      },
      {
        name: "subtitle",
        type: "string",
        description: "The main subtitle",
      },
      {
        name: "text",
        type: "string",
        description: "The main text",
      },
      {
        name: "footerTitle",
        type: "string",
        description: "The title of the footer",
      },
      {
        name: "footerText",
        type: "string",
        description: "The text of the footer",
      },
      {
        name: "linkLabel",
        type: "string",
        required: true,
        description: "The label for the link",
      },
      {
        name: "to",
        type: "RouteLocationRaw",
        required: true,
        description: "The URL for the link",
      },
    ],
  },

  TairoSidebarTools: {
    mode: "all",
    global: true,
  },

  TairoTable: {
    mode: "all",
    global: true,
    props: [
      {
        name: "rounded",
        type: "'none' | 'sm' | 'md' | 'lg'",
        default: "'sm'",
        description: "The radius of the table",
      },
      {
        name: "scrollable",
        type: "boolean",
        default: "true",
        description: "Enable horizontal scrolling",
      },
    ],
    slots: [
      {
        name: "header",
        description: "Table header content",
      },
      {
        name: "default",
        description: "Table body content",
      },
    ],
  },

  TairoTableRow: {
    mode: "all",
    global: true,
    props: [
      {
        name: "hoverable",
        type: "boolean",
        default: "true",
        description: "Enable hover effect on row",
      },
    ],
  },

  TairoTableCell: {
    mode: "all",
    global: true,
    props: [
      {
        name: "light",
        type: "boolean",
        default: "false",
        description: "Use lighter text color",
      },
      {
        name: "spaced",
        type: "boolean",
        default: "false",
        description: "Add extra padding",
      },
    ],
  },

  TairoTableHeading: {
    mode: "all",
    global: true,
    props: [
      {
        name: "uppercase",
        type: "boolean",
        default: "false",
        description: "Transform text to uppercase",
      },
      {
        name: "spaced",
        type: "boolean",
        default: "false",
        description: "Add extra padding and borders",
      },
    ],
  },

  TairoToaster: {
    mode: "all",
    global: true,
    props: [
      {
        name: "title",
        type: "string",
        description: "Toast title",
      },
      {
        name: "message",
        type: "string",
        description: "Toast message",
      },
      {
        name: "color",
        type: "'primary' | 'success' | 'danger' | 'warning' | 'info' | 'muted'",
        default: "'muted'",
        description: "Toast color scheme",
      },
      {
        name: "icon",
        type: "string",
        description: "Toast icon",
      },
      {
        name: "closable",
        type: "boolean",
        description: "Show close button",
      },
    ],
  },

  TairoToc: {
    mode: "all",
    global: true,
    slots: [
      {
        name: "nav-end",
        description: "Content to show at the end of navigation",
      },
    ],
  },

  TairoTocAnchor: {
    mode: "all",
    global: true,
    props: [
      {
        name: "label",
        type: "string",
        required: true,
        description: "Anchor label text",
      },
      {
        name: "id",
        type: "string",
        description: "Custom anchor ID",
      },
      {
        name: "level",
        type: "number | string",
        description: "Heading level",
      },
      {
        name: "prefix",
        type: "string",
        default: "'#'",
        description: "Prefix character",
      },
      {
        name: "prefixClasses",
        type: "string",
        description: "CSS classes for prefix",
      },
      {
        name: "suffix",
        type: "string",
        default: "''",
        description: "Suffix character",
      },
      {
        name: "suffixClasses",
        type: "string",
        description: "CSS classes for suffix",
      },
    ],
    slots: [
      {
        name: "prefix",
        description: "Custom prefix content",
      },
      {
        name: "suffix",
        description: "Custom suffix content",
      },
    ],
  },
}
