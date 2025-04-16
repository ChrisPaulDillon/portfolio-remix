var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { renderToString } from "react-dom/server";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { RemixServer } from "@remix-run/react";

// app/context.tsx
import { createContext } from "react";
var ServerStyleContext = createContext(null), ClientStyleContext = createContext(
  null
);

// app/createEmotionCache.ts
import createCache from "@emotion/cache";
var defaultCache = createEmotionCache();
function createEmotionCache() {
  return createCache({ key: "cha" });
}

// app/entry.server.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = createEmotionServer(cache), html = renderToString(
    /* @__PURE__ */ jsxDEV(ServerStyleContext.Provider, { value: null, children: /* @__PURE__ */ jsxDEV(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = renderToString(
    /* @__PURE__ */ jsxDEV(ServerStyleContext.Provider, { value: chunks.styles, children: /* @__PURE__ */ jsxDEV(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
import { ChakraProvider } from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { useContext, useEffect as useEffect2 } from "react";

// app/features/layout/AppBody.tsx
import { Container as Container3, Grid as Grid2, GridItem as GridItem2 } from "@chakra-ui/react";

// app/features/layout/Footer.tsx
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  useColorModeValue as useColorModeValue2,
  VStack
} from "@chakra-ui/react";
import { useLocation } from "@remix-run/react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

// app/features/layout/const.ts
import { BsFolderFill } from "react-icons/bs";
import {
  MdHome,
  MdOutlineBiotech,
  MdPermContactCalendar,
  MdWork
} from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
var NAV_LINKS = [
  { icon: MdHome, href: "/", label: "Home" },
  { icon: RiQuestionnaireFill, href: "/aboutme", label: "About Me" },
  { icon: BsFolderFill, href: "/portfolio", label: "Portfolio" },
  { icon: MdOutlineBiotech, href: "/technology", label: "Technologies" },
  { icon: MdWork, href: "/experience", label: "Experience" },
  { icon: MdPermContactCalendar, href: "/contact", label: "Contact" }
];

// app/features/layout/SocialButton.tsx
import {
  chakra,
  useColorModeValue,
  VisuallyHidden
} from "@chakra-ui/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var SocialButton = ({
  children,
  label,
  href
}) => /* @__PURE__ */ jsxDEV2(
  chakra.button,
  {
    bg: useColorModeValue("blackAlpha.100", "whiteAlpha.100"),
    rounded: "full",
    w: 8,
    h: 8,
    cursor: "pointer",
    as: "a",
    href,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.3s ease",
    _hover: {
      bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
    },
    children: [
      /* @__PURE__ */ jsxDEV2(VisuallyHidden, { children: label }, void 0, !1, {
        fileName: "app/features/layout/SocialButton.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      children
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/features/layout/SocialButton.tsx",
    lineNumber: 20,
    columnNumber: 5
  },
  this
);

// app/features/layout/Footer.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var FooterText = ({
  href,
  ...rest
}) => {
  let { pathname } = useLocation(), isHighlighted = pathname === href, textColor = useColorModeValue2("gray.600", "gray.400");
  return /* @__PURE__ */ jsxDEV3(
    Text,
    {
      fontSize: "sm",
      color: textColor,
      w: "100%",
      lineHeight: 1.6,
      textDecor: isHighlighted ? "underline" : "inherit",
      _hover: { color: useColorModeValue2("gray.800", "gray.200") },
      transition: "color 0.2s",
      textAlign: { base: "center", md: "left" },
      ...rest
    },
    void 0,
    !1,
    {
      fileName: "app/features/layout/Footer.tsx",
      lineNumber: 32,
      columnNumber: 5
    },
    this
  );
}, FooterHeading = (props) => /* @__PURE__ */ jsxDEV3(
  Heading,
  {
    size: "md",
    mb: 4,
    color: useColorModeValue2("gray.700", "gray.300"),
    textAlign: { base: "center", md: "left" },
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/features/layout/Footer.tsx",
    lineNumber: 47,
    columnNumber: 3
  },
  this
), Footer = () => {
  let borderColor = useColorModeValue2("gray.200", "gray.700"), bgColor = useColorModeValue2("white", "gray.900");
  return /* @__PURE__ */ jsxDEV3(
    Box,
    {
      as: "footer",
      borderTop: "1px",
      borderColor,
      bg: bgColor,
      py: 8,
      children: /* @__PURE__ */ jsxDEV3(Container, { maxW: "1250px", children: [
        /* @__PURE__ */ jsxDEV3(
          Grid,
          {
            templateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
            gap: { base: 8, md: 12 },
            children: [
              /* @__PURE__ */ jsxDEV3(GridItem, { children: [
                /* @__PURE__ */ jsxDEV3(FooterHeading, { children: "Browse" }, void 0, !1, {
                  fileName: "app/features/layout/Footer.tsx",
                  lineNumber: 74,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV3(VStack, { align: { base: "center", md: "flex-start" }, spacing: 2, children: NAV_LINKS.map((link) => /* @__PURE__ */ jsxDEV3(Link, { href: link.href, children: /* @__PURE__ */ jsxDEV3(FooterText, { href: link.href, children: link.label }, void 0, !1, {
                  fileName: "app/features/layout/Footer.tsx",
                  lineNumber: 78,
                  columnNumber: 19
                }, this) }, link.label, !1, {
                  fileName: "app/features/layout/Footer.tsx",
                  lineNumber: 77,
                  columnNumber: 17
                }, this)) }, void 0, !1, {
                  fileName: "app/features/layout/Footer.tsx",
                  lineNumber: 75,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/features/layout/Footer.tsx",
                lineNumber: 73,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV3(GridItem, { children: [
                /* @__PURE__ */ jsxDEV3(FooterHeading, { children: "Contact" }, void 0, !1, {
                  fileName: "app/features/layout/Footer.tsx",
                  lineNumber: 85,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV3(VStack, { align: { base: "center", md: "flex-start" }, spacing: 3, children: [
                  /* @__PURE__ */ jsxDEV3(HStack, { spacing: 3, children: [
                    /* @__PURE__ */ jsxDEV3(Icon, { as: GoLocation, color: useColorModeValue2("gray.600", "gray.400") }, void 0, !1, {
                      fileName: "app/features/layout/Footer.tsx",
                      lineNumber: 88,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV3(FooterText, { children: "Scotland, United Kingdom" }, void 0, !1, {
                      fileName: "app/features/layout/Footer.tsx",
                      lineNumber: 89,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/features/layout/Footer.tsx",
                    lineNumber: 87,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV3(HStack, { spacing: 3, children: [
                    /* @__PURE__ */ jsxDEV3(Icon, { as: AiOutlineMail, color: useColorModeValue2("gray.600", "gray.400") }, void 0, !1, {
                      fileName: "app/features/layout/Footer.tsx",
                      lineNumber: 92,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ jsxDEV3(FooterText, { children: "chrispauldillon@live.com" }, void 0, !1, {
                      fileName: "app/features/layout/Footer.tsx",
                      lineNumber: 93,
                      columnNumber: 17
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/features/layout/Footer.tsx",
                    lineNumber: 91,
                    columnNumber: 15
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/features/layout/Footer.tsx",
                  lineNumber: 86,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/features/layout/Footer.tsx",
                lineNumber: 84,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV3(GridItem, { children: [
                /* @__PURE__ */ jsxDEV3(FooterHeading, { children: "Connect" }, void 0, !1, {
                  fileName: "app/features/layout/Footer.tsx",
                  lineNumber: 99,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV3(HStack, { spacing: 4, justify: { base: "center", md: "flex-start" }, children: [
                  /* @__PURE__ */ jsxDEV3(
                    SocialButton,
                    {
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/christopher-d-106005183/",
                      children: /* @__PURE__ */ jsxDEV3(FaLinkedin, {}, void 0, !1, {
                        fileName: "app/features/layout/Footer.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/features/layout/Footer.tsx",
                      lineNumber: 101,
                      columnNumber: 15
                    },
                    this
                  ),
                  /* @__PURE__ */ jsxDEV3(
                    SocialButton,
                    {
                      label: "GitHub",
                      href: "https://github.com/ChrisPaulDillon",
                      children: /* @__PURE__ */ jsxDEV3(FaGithub, {}, void 0, !1, {
                        fileName: "app/features/layout/Footer.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/features/layout/Footer.tsx",
                      lineNumber: 107,
                      columnNumber: 15
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/features/layout/Footer.tsx",
                  lineNumber: 100,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/features/layout/Footer.tsx",
                lineNumber: 98,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/features/layout/Footer.tsx",
            lineNumber: 69,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3(
          Text,
          {
            fontSize: "xs",
            textAlign: "center",
            color: useColorModeValue2("gray.500", "gray.500"),
            mt: 8,
            children: [
              "\xA9 ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " Chris Dillon. All rights reserved"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/features/layout/Footer.tsx",
            lineNumber: 117,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/features/layout/Footer.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/features/layout/Footer.tsx",
      lineNumber: 61,
      columnNumber: 5
    },
    this
  );
};

// app/features/layout/TopBar.tsx
import {
  Box as Box2,
  Container as Container2,
  Flex,
  HStack as HStack2,
  IconButton as IconButton2,
  useColorModeValue as useColorModeValue6,
  useDisclosure
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

// app/hooks/useIsScrolling.tsx
import { useEffect, useState } from "react";
var useIsScrolling = () => {
  let [isScrolling, setIsScrolling] = useState(!1), handleScroll = () => {
    let position = window.pageYOffset;
    setIsScrolling(position > 0);
  };
  return useEffect(() => (window.addEventListener("scroll", handleScroll, { passive: !0 }), () => {
    window.removeEventListener("scroll", handleScroll);
  }), []), { isScrolling };
};

// app/features/shared/ColorModeButton.tsx
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  IconButton,
  useColorMode,
  useColorModeValue as useColorModeValue3
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var ColorModeButton = ({
  ...rest
}) => {
  let { toggleColorMode } = useColorMode();
  return /* @__PURE__ */ jsxDEV4(AnimatePresence, { mode: "wait", initial: !1, children: /* @__PURE__ */ jsxDEV4(
    motion.div,
    {
      style: { display: "inline-block" },
      initial: { y: -10, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 10, opacity: 0 },
      transition: { duration: 0.15 },
      children: /* @__PURE__ */ jsxDEV4(
        IconButton,
        {
          "aria-label": "Toggle color mode",
          variant: "ghost",
          color: useColorModeValue3("gray.600", "gray.300"),
          icon: useColorModeValue3(
            /* @__PURE__ */ jsxDEV4(MoonIcon, { boxSize: 4 }, void 0, !1, {
              fileName: "app/features/shared/ColorModeButton.tsx",
              lineNumber: 30,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV4(SunIcon, { boxSize: 4 }, void 0, !1, {
              fileName: "app/features/shared/ColorModeButton.tsx",
              lineNumber: 31,
              columnNumber: 13
            }, this)
          ),
          onClick: toggleColorMode,
          size: "sm",
          p: 1,
          minW: 8,
          h: 8,
          _hover: {
            bg: useColorModeValue3("gray.100", "gray.700"),
            transform: "translateY(-1px)"
          },
          ...rest
        },
        void 0,
        !1,
        {
          fileName: "app/features/shared/ColorModeButton.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      )
    },
    useColorModeValue3("light", "dark"),
    !1,
    {
      fileName: "app/features/shared/ColorModeButton.tsx",
      lineNumber: 17,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/features/shared/ColorModeButton.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};

// app/features/layout/Logo.tsx
import { Image } from "@chakra-ui/react";
import { Link as Link2 } from "@remix-run/react";

// app/hooks/useAssetUrl.ts
import { useLocation as useLocation2 } from "@remix-run/react";
function useAssetUrl(assetPath) {
  return `${useLocation2().pathname === "/" ? "" : ".."}${assetPath}`;
}

// app/features/layout/Logo.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var Logo = (props) => {
  let logoUrl = useAssetUrl("/images/logo.svg");
  return /* @__PURE__ */ jsxDEV5(Link2, { to: "/", children: /* @__PURE__ */ jsxDEV5(
    Image,
    {
      alt: "logo",
      src: logoUrl,
      height: "50px",
      width: "50px",
      ...props
    },
    void 0,
    !1,
    {
      fileName: "app/features/layout/Logo.tsx",
      lineNumber: 15,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/features/layout/Logo.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
};

// app/features/layout/NavItem.tsx
import {
  Button,
  Icon as Icon2,
  Text as Text2,
  useColorModeValue as useColorModeValue4
} from "@chakra-ui/react";
import { Link as Link3, useLocation as useLocation3 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var NavItem = ({
  icon,
  href,
  label,
  onClose,
  isScrolling,
  ...rest
}) => {
  let { pathname } = useLocation3(), active = pathname === href, textColor = useColorModeValue4("gray.700", "gray.200"), activeTextColor = useColorModeValue4("purple.600", "purple.300"), hoverBg = useColorModeValue4("gray.100", "gray.700"), activeBg = useColorModeValue4("purple.50", "purple.900");
  return /* @__PURE__ */ jsxDEV6(Link3, { to: href, children: /* @__PURE__ */ jsxDEV6(
    Button,
    {
      variant: "ghost",
      size: "sm",
      px: 3,
      py: 2,
      display: "flex",
      alignItems: "center",
      gap: 2,
      color: active ? activeTextColor : textColor,
      bg: active ? activeBg : "transparent",
      _hover: {
        bg: hoverBg,
        transform: "translateY(-1px)"
      },
      onClick: onClose,
      transition: "all 0.2s",
      ...rest,
      children: [
        /* @__PURE__ */ jsxDEV6(Icon2, { as: icon, boxSize: 4 }, void 0, !1, {
          fileName: "app/features/layout/NavItem.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV6(
          Text2,
          {
            fontSize: "sm",
            fontWeight: active ? "semibold" : "medium",
            children: label
          },
          void 0,
          !1,
          {
            fileName: "app/features/layout/NavItem.tsx",
            lineNumber: 50,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/features/layout/NavItem.tsx",
      lineNumber: 31,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/features/layout/NavItem.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
};

// app/features/layout/SideBarDrawer.tsx
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useColorModeValue as useColorModeValue5,
  VStack as VStack2
} from "@chakra-ui/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var SideBarDrawer = ({
  ...rest
}) => {
  let { onClose } = { ...rest }, bgColor = useColorModeValue5("white", "gray.800");
  return /* @__PURE__ */ jsxDEV7(Drawer, { placement: "left", size: "xs", ...rest, children: [
    /* @__PURE__ */ jsxDEV7(DrawerOverlay, {}, void 0, !1, {
      fileName: "app/features/layout/SideBarDrawer.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7(DrawerContent, { bg: bgColor, children: [
      /* @__PURE__ */ jsxDEV7(DrawerCloseButton, { size: "lg" }, void 0, !1, {
        fileName: "app/features/layout/SideBarDrawer.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(DrawerHeader, { borderBottomWidth: "1px", px: 4, py: 4, children: /* @__PURE__ */ jsxDEV7(Logo, { height: "40px", width: "40px" }, void 0, !1, {
        fileName: "app/features/layout/SideBarDrawer.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/features/layout/SideBarDrawer.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7(DrawerBody, { px: 2, py: 4, children: /* @__PURE__ */ jsxDEV7(VStack2, { spacing: 2, align: "stretch", children: NAV_LINKS.map((item, idx) => /* @__PURE__ */ jsxDEV7(
        NavItem,
        {
          w: "full",
          justifyContent: "flex-start",
          ...item,
          onClose
        },
        idx,
        !1,
        {
          fileName: "app/features/layout/SideBarDrawer.tsx",
          lineNumber: 33,
          columnNumber: 15
        },
        this
      )) }, void 0, !1, {
        fileName: "app/features/layout/SideBarDrawer.tsx",
        lineNumber: 31,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/features/layout/SideBarDrawer.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/features/layout/SideBarDrawer.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/layout/SideBarDrawer.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};

// app/features/layout/TopBar.tsx
import { Fragment, jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var TopBar = (props) => {
  let { isScrolling } = useIsScrolling(), { onOpen, onClose, isOpen } = useDisclosure(), bgColor = useColorModeValue6("white", "gray.800"), scrollBgColor = useColorModeValue6("white", "gray.800"), shadowColor = useColorModeValue6(
    "0 2px 10px rgba(0,0,0,0.05)",
    "0 2px 10px rgba(0,0,0,0.2)"
  );
  return /* @__PURE__ */ jsxDEV8(Fragment, { children: [
    /* @__PURE__ */ jsxDEV8(SideBarDrawer, { isOpen, onClose }, void 0, !1, {
      fileName: "app/features/layout/TopBar.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8(
      Box2,
      {
        as: "header",
        position: "fixed",
        top: 0,
        w: "full",
        zIndex: 999,
        bg: isScrolling ? scrollBgColor : bgColor,
        transition: "all 0.3s ease",
        boxShadow: isScrolling ? shadowColor : "none",
        backdropFilter: isScrolling ? "blur(10px)" : "none",
        ...props,
        children: /* @__PURE__ */ jsxDEV8(Container2, { maxW: "1250px", children: /* @__PURE__ */ jsxDEV8(
          Flex,
          {
            px: { base: 4, md: 6 },
            py: 3,
            align: "center",
            justify: "space-between",
            children: [
              /* @__PURE__ */ jsxDEV8(Box2, { children: /* @__PURE__ */ jsxDEV8(Logo, { height: "40px", width: "40px" }, void 0, !1, {
                fileName: "app/features/layout/TopBar.tsx",
                lineNumber: 53,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/features/layout/TopBar.tsx",
                lineNumber: 52,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV8(
                Flex,
                {
                  as: "nav",
                  display: { base: "none", lg: "flex" },
                  align: "center",
                  gap: 1,
                  children: NAV_LINKS.map((item, idx) => /* @__PURE__ */ jsxDEV8(NavItem, { isScrolling, ...item }, idx, !1, {
                    fileName: "app/features/layout/TopBar.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                  }, this))
                },
                void 0,
                !1,
                {
                  fileName: "app/features/layout/TopBar.tsx",
                  lineNumber: 56,
                  columnNumber: 13
                },
                this
              ),
              /* @__PURE__ */ jsxDEV8(HStack2, { spacing: 2, children: [
                /* @__PURE__ */ jsxDEV8(
                  ColorModeButton,
                  {
                    size: "sm",
                    variant: "ghost",
                    "aria-label": "Toggle color mode"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/features/layout/TopBar.tsx",
                    lineNumber: 68,
                    columnNumber: 15
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV8(
                  IconButton2,
                  {
                    "aria-label": "Open menu",
                    variant: "ghost",
                    display: { base: "inline-flex", lg: "none" },
                    onClick: onOpen,
                    icon: /* @__PURE__ */ jsxDEV8(FiMenu, {}, void 0, !1, {
                      fileName: "app/features/layout/TopBar.tsx",
                      lineNumber: 78,
                      columnNumber: 23
                    }, this),
                    size: "sm"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/features/layout/TopBar.tsx",
                    lineNumber: 73,
                    columnNumber: 15
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/features/layout/TopBar.tsx",
                lineNumber: 67,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/features/layout/TopBar.tsx",
            lineNumber: 46,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/features/layout/TopBar.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/features/layout/TopBar.tsx",
        lineNumber: 33,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/features/layout/TopBar.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
};

// app/features/layout/AppBody.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var AppBody = ({ children }) => /* @__PURE__ */ jsxDEV9(Grid2, { templateRows: "minmax(80vh, auto) auto", overflowY: "hidden", h: "100%", children: [
  /* @__PURE__ */ jsxDEV9(TopBar, {}, void 0, !1, {
    fileName: "app/features/layout/AppBody.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV9(GridItem2, { overflow: "hidden", children: /* @__PURE__ */ jsxDEV9(Container3, { pt: 1, as: "main", h: "100%", maxW: "1250px", children }, void 0, !1, {
    fileName: "app/features/layout/AppBody.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/features/layout/AppBody.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV9(GridItem2, { children: /* @__PURE__ */ jsxDEV9(Footer, {}, void 0, !1, {
    fileName: "app/features/layout/AppBody.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/features/layout/AppBody.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/features/layout/AppBody.tsx",
  lineNumber: 7,
  columnNumber: 3
}, this);

// app/theme/theme.ts
import { extendTheme } from "@chakra-ui/react";
import { mode as mode2 } from "@chakra-ui/theme-tools";

// app/theme/components.ts
import { mode } from "@chakra-ui/theme-tools";
var components = {
  Button: {
    defaultProps: {
      colorScheme: "brand"
    }
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("brand.600", "brand.300")(props),
      textUnderlineOffset: 3
    })
  },
  Text: {
    baseStyle: (props) => ({
      color: mode("gray.800", "gray.200")(props),
      textUnderlineOffset: 3,
      fontWeight: "normal"
    })
  },
  Heading: {
    baseStyle: (props) => ({
      color: mode("gray.800", "gray.100")(props),
      textUnderlineOffset: 3
    })
  }
};

// app/theme/semanticTokens.ts
var semanticTokens = {
  colors: {
    primary: {
      default: "red.600",
      _dark: "red.400"
    },
    secondary: {
      default: "purple.600",
      _dark: "purple.400"
    },
    faded: {
      default: "gray.700",
      _dark: "gray.400"
    },
    text: {
      default: "gray.800",
      _dark: "gray.400"
    },
    border: {
      default: "gray.300",
      _dark: "gray.700"
    }
  }
};

// app/theme/theme.ts
var styles = {
  global: (props) => ({
    body: {
      bg: mode2("gray.50", "#1a1b1e")(props)
    }
  })
}, fonts = {
  heading: "'Rubik', sans-serif",
  body: "'Rubik', sans-serif"
}, colors = {
  brand: {
    50: "#f0e4ff",
    100: "#cbb2ff",
    200: "#a480ff",
    300: "#7c4dff",
    400: "#551bff",
    500: "#3b01e6",
    600: "#2e00b4",
    700: "#210082",
    800: "#140051",
    900: "#070021"
  },
  accent: {
    50: "#ffe4eb",
    100: "#ffb3c5",
    200: "#fc819f",
    300: "#f94f79",
    400: "#f61d53",
    500: "#dd0939",
    600: "#ad032c",
    700: "#7c001f",
    800: "#4c0012",
    900: "#1f0007"
  }
}, config = {
  initialColorMode: "dark",
  useSystemColorMode: !1
}, theme = extendTheme({
  config,
  styles,
  components: {
    ...components,
    Button: {
      defaultProps: {
        colorScheme: "brand"
      }
    }
  },
  colors,
  semanticTokens: {
    ...semanticTokens,
    colors: {
      primary: {
        default: "brand.500",
        _dark: "brand.300"
      },
      secondary: {
        default: "accent.500",
        _dark: "accent.300"
      },
      faded: {
        default: "gray.700",
        _dark: "gray.400"
      },
      text: {
        default: "gray.800",
        _dark: "gray.200"
      },
      border: {
        default: "gray.200",
        _dark: "gray.700"
      }
    }
  },
  fonts
}), theme_default = theme;

// app/root.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var meta = () => [
  { charset: "utf-8" },
  { title: "Chris Dillon - Senior Full Stack Engineer in Scotland" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  {
    name: "description",
    content: "Senior Full Stack Engineer based in Scotland with expertise in C#, TypeScript, React, and modern web technologies. Specializing in building exceptional digital experiences."
  },
  { name: "theme-color", content: "#1a1b1e" },
  { name: "robots", content: "index, follow" },
  { property: "og:type", content: "website" },
  { property: "og:title", content: "Chris Dillon - Senior Full Stack Engineer in Scotland" },
  {
    property: "og:description",
    content: "Senior Full Stack Engineer based in Scotland with expertise in C#, TypeScript, React, and modern web technologies. Specializing in building exceptional digital experiences."
  },
  { property: "og:site_name", content: "Chris Dillon Portfolio" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Chris Dillon - Senior Full Stack Engineer in Scotland" },
  {
    name: "twitter:description",
    content: "Senior Full Stack Engineer based in Scotland with expertise in C#, TypeScript, React, and modern web technologies. Specializing in building exceptional digital experiences."
  },
  { name: "keywords", content: "Senior Full Stack Engineer, Software Engineer Scotland, C#, TypeScript, React, .NET Developer, Web Development, Software Development Edinburgh, Glasgow Developer" }
], links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
  },
  { rel: "canonical", href: "https://chrisdillon.dev" }
], Document = withEmotionCache(
  ({ children }, emotionCache) => {
    let serverStyleData = useContext(ServerStyleContext), clientStyleData = useContext(ClientStyleContext);
    return useEffect2(() => {
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData?.reset();
    }, []), /* @__PURE__ */ jsxDEV10("html", { lang: "en", children: [
      /* @__PURE__ */ jsxDEV10("head", { children: [
        /* @__PURE__ */ jsxDEV10(Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10(Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        serverStyleData?.map(({ key, ids, css }) => /* @__PURE__ */ jsxDEV10(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 80,
            columnNumber: 13
          },
          this
        )),
        /* @__PURE__ */ jsxDEV10("script", { type: "application/ld+json", dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Chris Dillon",
            jobTitle: "Senior Full Stack Engineer",
            url: "https://chrisdillon.dev",
            sameAs: [
              "https://www.linkedin.com/in/christopher-d-106005183/",
              "https://github.com/ChrisPaulDillon"
            ],
            address: {
              "@type": "PostalAddress",
              addressRegion: "Scotland",
              addressCountry: "United Kingdom"
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Glasgow Caledonian University"
            },
            knowsAbout: [
              "Full Stack Development",
              "C#",
              "TypeScript",
              "React",
              "Software Architecture",
              "Web Development"
            ]
          })
        } }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV10("body", { children: [
        children,
        /* @__PURE__ */ jsxDEV10(ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10(Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV10(LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this);
  }
);
function App() {
  return /* @__PURE__ */ jsxDEV10(Document, { children: /* @__PURE__ */ jsxDEV10(ChakraProvider, { theme: theme_default, children: /* @__PURE__ */ jsxDEV10(AppBody, { children: /* @__PURE__ */ jsxDEV10(Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 133,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 132,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 131,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}

// app/routes/experience.tsx
var experience_exports = {};
__export(experience_exports, {
  default: () => experience_default
});
import {
  Box as Box4,
  Card,
  CardBody,
  CardHeader,
  Flex as Flex2,
  Grid as Grid3,
  Heading as Heading3,
  Icon as Icon3,
  List,
  ListIcon,
  ListItem,
  Stack,
  Tag,
  Text as Text3,
  useColorModeValue as useColorModeValue7
} from "@chakra-ui/react";
import { MdCheckCircle, MdWork as MdWork2 } from "react-icons/md";

// app/features/layout/PageContainer.tsx
import { Box as Box3 } from "@chakra-ui/react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var PageContainer = (props) => /* @__PURE__ */ jsxDEV11(Box3, { w: "100%", my: "100px", ...props }, void 0, !1, {
  fileName: "app/features/layout/PageContainer.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);

// app/features/shared/SectionHeading.tsx
import { Heading as Heading2 } from "@chakra-ui/react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var SectionHeading = (props) => /* @__PURE__ */ jsxDEV12(
  Heading2,
  {
    textDecor: "red underline",
    pb: 3,
    as: "h2",
    textUnderlineOffset: 10,
    textAlign: { base: "center", sm: "center", lg: "left" },
    fontSize: { base: "2xl", sm: "3xl", md: "4xl" },
    lineHeight: { base: 1.4, md: 1.2 },
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/features/shared/SectionHeading.tsx",
    lineNumber: 4,
    columnNumber: 3
  },
  this
);

// app/features/work-experience/const.ts
var WORK_EXPERIENCE_DATA = [
  {
    companyName: "Serial Affinity",
    role: "Senior Full Stack Engineer",
    description: "Leading development of enterprise-scale web applications and mentoring junior developers.",
    date: "June 2023 - Present",
    responsibilities: [
      "Architected and implemented scalable microservices using .NET Core and React",
      "Led technical design discussions and code reviews for team of 5 developers",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted technical interviews"
    ],
    technologies: ["C#", ".NET Core", "React", "TypeScript", "Azure", "Docker"]
  },
  {
    companyName: "Serial Affinity",
    role: "Full Stack Engineer",
    description: "Developed and maintained complex web applications using modern technologies.",
    date: "March 2020 - June 2023",
    responsibilities: [
      "Developed full-stack features using React and .NET Core",
      "Optimized database performance reducing query times by 60%",
      "Implemented real-time data synchronization using SignalR",
      "Contributed to architecture decisions and technical documentation"
    ],
    technologies: ["C#", ".NET Core", "React", "SQL Server", "Redis", "TypeScript"]
  },
  {
    companyName: "My1Login",
    role: "Graduate Full Stack Engineer",
    description: "Contributed to identity and access management solutions.",
    date: "September 2017 - March 2020",
    responsibilities: [
      "Developed secure authentication workflows",
      "Built responsive web interfaces using React",
      "Implemented RESTful APIs using .NET Core",
      "Participated in agile development processes"
    ],
    technologies: ["C#", ".NET Core", "React", "OAuth", "SAML", "SQL Server"]
  }
];

// app/routes/experience.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
function calculateExperience(startDate) {
  let timeDifference = (/* @__PURE__ */ new Date()).getTime() - startDate.getTime(), millisecondsInYear = 1e3 * 60 * 60 * 24 * 365.25, millisecondsInMonth = millisecondsInYear / 12, years = Math.floor(timeDifference / millisecondsInYear), months = Math.floor(timeDifference % millisecondsInYear / millisecondsInMonth);
  return { years, months };
}
var ExperiencePage = () => {
  let { years } = calculateExperience(/* @__PURE__ */ new Date("2017-09-24")), cardBg = useColorModeValue7("white", "gray.800"), borderColor = useColorModeValue7("brand.100", "brand.800"), iconBg = useColorModeValue7("brand.50", "brand.900"), tagBg = useColorModeValue7("accent.50", "accent.900"), tagColor = useColorModeValue7("accent.800", "accent.200"), subtleText = useColorModeValue7("gray.600", "gray.400"), headingColor = useColorModeValue7("gray.900", "white");
  return /* @__PURE__ */ jsxDEV13(PageContainer, { children: /* @__PURE__ */ jsxDEV13(Stack, { spacing: 8, children: [
    /* @__PURE__ */ jsxDEV13(Box4, { children: [
      /* @__PURE__ */ jsxDEV13(SectionHeading, { mb: 2, color: headingColor, children: "Professional Experience" }, void 0, !1, {
        fileName: "app/routes/experience.tsx",
        lineNumber: 49,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV13(
        Text3,
        {
          fontSize: "lg",
          color: subtleText,
          maxW: "2xl",
          children: [
            years,
            "+ years of experience building scalable applications and leading development teams"
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/experience.tsx",
          lineNumber: 52,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/experience.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV13(Grid3, { gap: 8, children: WORK_EXPERIENCE_DATA.map((experience, index) => /* @__PURE__ */ jsxDEV13(
      Card,
      {
        bg: cardBg,
        borderWidth: "2px",
        borderColor,
        borderRadius: "2xl",
        overflow: "hidden",
        transition: "all 0.3s ease",
        _hover: {
          transform: "translateY(-4px)",
          boxShadow: "xl",
          borderColor: useColorModeValue7("brand.300", "brand.600")
        },
        children: [
          /* @__PURE__ */ jsxDEV13(CardHeader, { pb: 4, children: /* @__PURE__ */ jsxDEV13(Flex2, { align: "center", gap: 4, children: [
            /* @__PURE__ */ jsxDEV13(
              Box4,
              {
                p: 3,
                borderRadius: "xl",
                bg: iconBg,
                children: /* @__PURE__ */ jsxDEV13(
                  Icon3,
                  {
                    as: MdWork2,
                    boxSize: 6,
                    color: useColorModeValue7("brand.500", "brand.200")
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/experience.tsx",
                    lineNumber: 84,
                    columnNumber: 21
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/experience.tsx",
                lineNumber: 79,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV13(Box4, { flex: "1", children: [
              /* @__PURE__ */ jsxDEV13(
                Heading3,
                {
                  size: "lg",
                  color: headingColor,
                  letterSpacing: "tight",
                  children: experience.role
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/experience.tsx",
                  lineNumber: 91,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV13(
                Flex2,
                {
                  align: { base: "start", md: "center" },
                  direction: { base: "column", md: "row" },
                  gap: { base: 1, md: 2 },
                  mt: 2,
                  children: [
                    /* @__PURE__ */ jsxDEV13(
                      Text3,
                      {
                        fontSize: "md",
                        color: subtleText,
                        fontWeight: "medium",
                        children: experience.companyName
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/experience.tsx",
                        lineNumber: 104,
                        columnNumber: 23
                      },
                      this
                    ),
                    /* @__PURE__ */ jsxDEV13(
                      Text3,
                      {
                        fontSize: "md",
                        color: subtleText,
                        children: experience.date
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/experience.tsx",
                        lineNumber: 111,
                        columnNumber: 23
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/experience.tsx",
                  lineNumber: 98,
                  columnNumber: 21
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/experience.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/experience.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/experience.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV13(CardBody, { pt: 0, children: /* @__PURE__ */ jsxDEV13(Stack, { spacing: 6, children: [
            /* @__PURE__ */ jsxDEV13(
              Text3,
              {
                color: useColorModeValue7("gray.700", "gray.300"),
                fontSize: "lg",
                children: experience.description
              },
              void 0,
              !1,
              {
                fileName: "app/routes/experience.tsx",
                lineNumber: 124,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ jsxDEV13(Box4, { children: [
              /* @__PURE__ */ jsxDEV13(
                Text3,
                {
                  fontSize: "md",
                  fontWeight: "semibold",
                  color: headingColor,
                  mb: 3,
                  children: "Key Responsibilities"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/experience.tsx",
                  lineNumber: 132,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV13(List, { spacing: 3, children: experience.responsibilities.map((responsibility, idx) => /* @__PURE__ */ jsxDEV13(
                ListItem,
                {
                  fontSize: "md",
                  color: useColorModeValue7("gray.700", "gray.300"),
                  display: "flex",
                  alignItems: "flex-start",
                  children: [
                    /* @__PURE__ */ jsxDEV13(
                      ListIcon,
                      {
                        as: MdCheckCircle,
                        color: useColorModeValue7("brand.500", "brand.200"),
                        mt: 1
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/experience.tsx",
                        lineNumber: 149,
                        columnNumber: 27
                      },
                      this
                    ),
                    responsibility
                  ]
                },
                idx,
                !0,
                {
                  fileName: "app/routes/experience.tsx",
                  lineNumber: 142,
                  columnNumber: 25
                },
                this
              )) }, void 0, !1, {
                fileName: "app/routes/experience.tsx",
                lineNumber: 140,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/experience.tsx",
              lineNumber: 131,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV13(Box4, { children: [
              /* @__PURE__ */ jsxDEV13(
                Text3,
                {
                  fontSize: "md",
                  fontWeight: "semibold",
                  color: headingColor,
                  mb: 3,
                  children: "Technologies"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/experience.tsx",
                  lineNumber: 161,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ jsxDEV13(Flex2, { gap: 2, flexWrap: "wrap", children: experience.technologies.map((tech, idx) => /* @__PURE__ */ jsxDEV13(
                Tag,
                {
                  size: "md",
                  bg: tagBg,
                  color: tagColor,
                  borderRadius: "full",
                  px: 4,
                  py: 2,
                  fontWeight: "medium",
                  _hover: {
                    transform: "translateY(-2px)",
                    boxShadow: "sm"
                  },
                  transition: "all 0.2s",
                  children: tech
                },
                idx,
                !1,
                {
                  fileName: "app/routes/experience.tsx",
                  lineNumber: 171,
                  columnNumber: 25
                },
                this
              )) }, void 0, !1, {
                fileName: "app/routes/experience.tsx",
                lineNumber: 169,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/experience.tsx",
              lineNumber: 160,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/experience.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/experience.tsx",
            lineNumber: 122,
            columnNumber: 15
          }, this)
        ]
      },
      index,
      !0,
      {
        fileName: "app/routes/experience.tsx",
        lineNumber: 63,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/routes/experience.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/experience.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/experience.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}, experience_default = ExperiencePage;

// app/routes/technology.tsx
var technology_exports = {};
__export(technology_exports, {
  default: () => technology_default
});
import { Box as Box5, Container as Container4, Flex as Flex3, Image as Image2, Text as Text4, useColorModeValue as useColorModeValue8, VStack as VStack3 } from "@chakra-ui/react";

// app/features/technology/const.ts
var TECHNOLOGIES = [
  { title: "React", imgSrc: "/images/technologies/react.svg" },
  { title: "NextJS", imgSrc: "/images/technologies/nextjs.png" },
  { title: "Redux", imgSrc: "/images/technologies/redux.png" },
  { title: "TypeScript", imgSrc: "/images/technologies/typescript.gif" },
  { title: "Hardhat", imgSrc: "/images/technologies/hardhat.jpg" },
  { title: "Solidity", imgSrc: "/images/technologies/solidity.png" },
  { title: "Ethereum", imgSrc: "/images/technologies/ethereum.jpg" },
  { title: "SQL", imgSrc: "/images/technologies/sql.jpg" },
  { title: "DotNetCore", imgSrc: "/images/technologies/dotnetcore.png" },
  { title: "Chakra UI", imgSrc: "/images/technologies/chakraui.png" },
  { title: "Jest", imgSrc: "/images/technologies/jest.png" },
  { title: "Truffle", imgSrc: "/images/technologies/truffle.jpg" }
];

// app/routes/technology.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var TechnologyCard = ({ title, imgSrc }) => {
  let imageUrl = useAssetUrl(imgSrc), cardBg = useColorModeValue8("white", "gray.800"), borderColor = useColorModeValue8("purple.100", "purple.700"), hoverBorderColor = useColorModeValue8("purple.300", "purple.500");
  return /* @__PURE__ */ jsxDEV14(
    Box5,
    {
      bg: cardBg,
      borderWidth: "1px",
      borderColor,
      borderRadius: "xl",
      overflow: "hidden",
      p: 4,
      w: { base: "150px", md: "180px" },
      transition: "all 0.3s ease",
      _hover: {
        transform: "translateY(-4px)",
        borderColor: hoverBorderColor,
        boxShadow: "lg"
      },
      children: /* @__PURE__ */ jsxDEV14(VStack3, { spacing: 4, children: [
        /* @__PURE__ */ jsxDEV14(
          Box5,
          {
            position: "relative",
            w: "full",
            h: { base: "60px", md: "80px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            children: /* @__PURE__ */ jsxDEV14(
              Image2,
              {
                src: imageUrl,
                alt: title,
                maxH: "100%",
                maxW: "100%",
                objectFit: "contain",
                loading: "lazy",
                transition: "transform 0.3s ease",
                _hover: { transform: "scale(1.1)" }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/technology.tsx",
                lineNumber: 38,
                columnNumber: 11
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/routes/technology.tsx",
            lineNumber: 30,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ jsxDEV14(
          Text4,
          {
            fontSize: { base: "sm", md: "md" },
            fontWeight: "medium",
            textAlign: "center",
            color: useColorModeValue8("gray.700", "gray.200"),
            children: title
          },
          void 0,
          !1,
          {
            fileName: "app/routes/technology.tsx",
            lineNumber: 49,
            columnNumber: 9
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/technology.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/technology.tsx",
      lineNumber: 14,
      columnNumber: 5
    },
    this
  );
}, TechnologyPage = () => {
  let sectionBg = useColorModeValue8("gray.50", "gray.900");
  return /* @__PURE__ */ jsxDEV14(PageContainer, { children: /* @__PURE__ */ jsxDEV14(VStack3, { spacing: 8, align: "stretch", children: [
    /* @__PURE__ */ jsxDEV14(SectionHeading, { children: "Technology Experience" }, void 0, !1, {
      fileName: "app/routes/technology.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV14(
      Box5,
      {
        bg: sectionBg,
        borderRadius: "2xl",
        p: { base: 4, md: 8 },
        shadow: "sm",
        children: /* @__PURE__ */ jsxDEV14(Container4, { maxW: "container.xl", px: 0, children: /* @__PURE__ */ jsxDEV14(
          Flex3,
          {
            wrap: "wrap",
            gap: { base: 4, md: 6 },
            justify: { base: "center", md: "flex-start" },
            children: TECHNOLOGIES.map((tech, index) => /* @__PURE__ */ jsxDEV14(TechnologyCard, { ...tech }, index, !1, {
              fileName: "app/routes/technology.tsx",
              lineNumber: 83,
              columnNumber: 17
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/routes/technology.tsx",
            lineNumber: 77,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/technology.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/technology.tsx",
        lineNumber: 70,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/technology.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/technology.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}, technology_default = TechnologyPage;

// app/routes/portfolio.tsx
var portfolio_exports = {};
__export(portfolio_exports, {
  default: () => portfolio_default
});
import { Flex as Flex5 } from "@chakra-ui/react";

// app/features/portfolio/PortfolioCard.tsx
import {
  Box as Box6,
  Card as Card2,
  CardBody as CardBody2,
  CardFooter,
  CardHeader as CardHeader2,
  Flex as Flex4,
  Heading as Heading5,
  Icon as Icon4,
  Image as Image3,
  Stack as Stack2,
  Tag as Tag2,
  Text as Text6,
  useColorModeValue as useColorModeValue9
} from "@chakra-ui/react";
import { Link as Link4 } from "@remix-run/react";
import { BsFolderFill as BsFolderFill2, BsGithub } from "react-icons/bs";

// app/features/home/HomeBodyText.tsx
import { Text as Text5 } from "@chakra-ui/react";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var HomeBodyText = (props) => /* @__PURE__ */ jsxDEV15(
  Text5,
  {
    textAlign: { base: "center", lg: "left" },
    fontSize: { base: "md", sm: "lg" },
    lineHeight: { base: 1.6, md: 1.8 },
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/features/home/HomeBodyText.tsx",
    lineNumber: 5,
    columnNumber: 5
  },
  this
);

// app/features/portfolio/PortfolioCard.tsx
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var PortfolioCard = ({
  title,
  description,
  linkItems,
  categories,
  ...rest
}) => {
  let linkItem = linkItems[0], imageUrl = useAssetUrl("/images/programming.png"), cardBg = useColorModeValue9("linear-gradient(to right, #ffffff, #f8f9fa)", "linear-gradient(to right, #1a202c, #2d3748)"), borderColor = useColorModeValue9("purple.100", "purple.900"), shadowColor = useColorModeValue9(
    "0 4px 6px rgba(160, 174, 192, 0.2)",
    "0 4px 6px rgba(9, 17, 28, 0.4)"
  );
  return /* @__PURE__ */ jsxDEV16(
    Card2,
    {
      w: { base: "full", lg: "47%" },
      mx: 2,
      my: 4,
      bg: cardBg,
      borderWidth: "1px",
      borderColor,
      borderRadius: "2xl",
      overflow: "hidden",
      transition: "all 0.4s ease-in-out",
      boxShadow: shadowColor,
      _hover: {
        transform: "translateY(-8px)",
        boxShadow: useColorModeValue9(
          "0 12px 24px rgba(160, 174, 192, 0.3)",
          "0 12px 24px rgba(9, 17, 28, 0.5)"
        )
      },
      ...rest,
      children: [
        /* @__PURE__ */ jsxDEV16(CardHeader2, { pb: 2, children: /* @__PURE__ */ jsxDEV16(Flex4, { justify: "space-between", align: "center", children: [
          /* @__PURE__ */ jsxDEV16(Flex4, { align: "center", gap: 3, children: [
            /* @__PURE__ */ jsxDEV16(
              Box6,
              {
                p: { base: 1.5, md: 2 },
                borderRadius: "lg",
                bg: useColorModeValue9("red.50", "red.900"),
                children: /* @__PURE__ */ jsxDEV16(
                  Icon4,
                  {
                    as: BsFolderFill2,
                    boxSize: { base: 3, md: 5 },
                    color: useColorModeValue9("red.500", "red.200")
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/features/portfolio/PortfolioCard.tsx",
                    lineNumber: 78,
                    columnNumber: 15
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/features/portfolio/PortfolioCard.tsx",
                lineNumber: 73,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV16(
              Heading5,
              {
                size: { base: "sm", md: "md" },
                textAlign: { base: "center", lg: "left" },
                bgGradient: useColorModeValue9(
                  "linear(to-r, purple.600, red.500)",
                  "linear(to-r, purple.200, red.200)"
                ),
                bgClip: "text",
                children: title
              },
              void 0,
              !1,
              {
                fileName: "app/features/portfolio/PortfolioCard.tsx",
                lineNumber: 84,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/features/portfolio/PortfolioCard.tsx",
            lineNumber: 72,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV16(Link4, { to: linkItem.linkUrl, children: /* @__PURE__ */ jsxDEV16(
            Icon4,
            {
              as: BsGithub,
              boxSize: { base: 5, md: 6 },
              color: useColorModeValue9("gray.600", "gray.300"),
              _hover: {
                color: useColorModeValue9("purple.500", "purple.300"),
                transform: "scale(1.1)"
              },
              transition: "all 0.3s"
            },
            void 0,
            !1,
            {
              fileName: "app/features/portfolio/PortfolioCard.tsx",
              lineNumber: 97,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/features/portfolio/PortfolioCard.tsx",
            lineNumber: 96,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/features/portfolio/PortfolioCard.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/features/portfolio/PortfolioCard.tsx",
          lineNumber: 70,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV16(CardBody2, { py: 4, children: /* @__PURE__ */ jsxDEV16(Stack2, { spacing: 4, children: [
          /* @__PURE__ */ jsxDEV16(
            HomeBodyText,
            {
              fontSize: { base: "sm", md: "md" },
              color: useColorModeValue9("gray.600", "gray.300"),
              lineHeight: "1.6",
              children: description
            },
            void 0,
            !1,
            {
              fileName: "app/features/portfolio/PortfolioCard.tsx",
              lineNumber: 113,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV16(
            Box6,
            {
              position: "relative",
              overflow: "hidden",
              borderRadius: "xl",
              boxShadow: "inner",
              children: /* @__PURE__ */ jsxDEV16(Link4, { to: linkItem.linkUrl, children: /* @__PURE__ */ jsxDEV16(
                Image3,
                {
                  src: imageUrl,
                  alt: title,
                  w: "full",
                  h: "200px",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                  _hover: { transform: "scale(1.08)" },
                  loading: "lazy"
                },
                void 0,
                !1,
                {
                  fileName: "app/features/portfolio/PortfolioCard.tsx",
                  lineNumber: 127,
                  columnNumber: 15
                },
                this
              ) }, void 0, !1, {
                fileName: "app/features/portfolio/PortfolioCard.tsx",
                lineNumber: 126,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/features/portfolio/PortfolioCard.tsx",
              lineNumber: 120,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/features/portfolio/PortfolioCard.tsx",
          lineNumber: 112,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/features/portfolio/PortfolioCard.tsx",
          lineNumber: 111,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV16(
          CardFooter,
          {
            pt: 0,
            flexWrap: "wrap",
            gap: 2,
            sx: {
              "& > button": {
                minW: "136px"
              }
            },
            children: categories?.map((category) => /* @__PURE__ */ jsxDEV16(
              Tag2,
              {
                bgGradient: useColorModeValue9(
                  "linear(to-r, purple.100, pink.100)",
                  "linear(to-r, purple.900, pink.900)"
                ),
                color: useColorModeValue9("purple.800", "purple.100"),
                size: "sm",
                borderRadius: "full",
                px: 3,
                py: 1,
                _hover: {
                  transform: "translateY(-1px)",
                  bgGradient: useColorModeValue9(
                    "linear(to-r, purple.200, pink.200)",
                    "linear(to-r, purple.800, pink.800)"
                  )
                },
                transition: "all 0.3s",
                children: /* @__PURE__ */ jsxDEV16(
                  Text6,
                  {
                    fontSize: { base: "xs", md: "sm" },
                    fontWeight: "medium",
                    children: category
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/features/portfolio/PortfolioCard.tsx",
                    lineNumber: 173,
                    columnNumber: 13
                  },
                  this
                )
              },
              category,
              !1,
              {
                fileName: "app/features/portfolio/PortfolioCard.tsx",
                lineNumber: 153,
                columnNumber: 11
              },
              this
            ))
          },
          void 0,
          !1,
          {
            fileName: "app/features/portfolio/PortfolioCard.tsx",
            lineNumber: 142,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/features/portfolio/PortfolioCard.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    this
  );
};

// app/features/portfolio/const.ts
var PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "ZumoSwap",
    description: "A singular token exchange designed to swap tokens and Ether in a decentralised manner.",
    extendedDescription: "ZumoSwap was a pilot project that allowed for swapping a token with ether on the Ethereum Testnet. Users can connect their wallet to the blockchain via a 3rd party such as MetaMask and interact with the blockchain through the Decentralised App (dApp). Built with Chakra UI, NextJs & Redux.",
    linkItems: [
      {
        linkText: "Github",
        linkUrl: "https://github.com/ChrisPaulDillon/ZumoDEX"
      }
    ],
    categories: ["Solidity", "React", "Web3", "Ethers.js", "Redux", "Chakra UI"]
  },
  {
    id: 2,
    title: "Crypto Trading Bot",
    description: "Polls various cryptocurrency exchanges and once a new coin listing has been announced, purchases on the GateIO exchange. Also announces on Discord.",
    extendedDescription: "Cryptocurrency Bot which polls various exchanges (KuCoin, Binance) listening for changes in coin announcements. Once a new coin has been announced by the exchange, the bot will then proceed to buy the same token on the GateIo exchange and sell when it reaches a set percentage of profit. The coin listing is also announced on Discord.",
    linkItems: [
      {
        linkText: "GitHub",
        linkUrl: "https://github.com/ChrisPaulDillon/CryptoTradingBotDiscordAnnouncer"
      }
    ],
    categories: ["C#", "Discord API", "Web Scraping"]
  },
  {
    id: 3,
    title: "EVM Benchmarking",
    description: "Performance analysis of modern EVM implementations. This includes Cardanos novel KEVM implementation.",
    extendedDescription: "This was part of my PhD research, investing the performance of different EVM client implementations. Factors such as the OS running the node client was also evaluated, with surprising results. Also includes a Big Data pipeline for automatically generating graph results using python.",
    linkItems: [
      {
        linkText: "GitHub",
        linkUrl: "https://github.com/ChrisPaulDillon/SmartContractBenchmarking"
      }
    ],
    categories: ["Python", "Blockchain", "EVM", "Data Analysis"]
  },
  {
    id: 4,
    title: "PowerBuddy",
    description: "Weightlifting tracker designed to automatically log personal bests and generate custom weightlifting templates based on the individuals criteria.",
    extendedDescription: "Weightlifting tracker designed to automatically log personal bests and generate custom weightlifting templates based on the individuals criteria. Choose from popular powerlifting programme templates such as 5/3/1, Stronglifts 5x5, Russian Squat Routine and many more. Personal bests are automatically recorded, giving a historical timeline of your progress!",
    linkItems: [
      {
        linkText: "Frontend",
        linkUrl: "https://github.com/ChrisPaulDillon/PowerBuddy-Next"
      },
      {
        linkText: "Backend",
        linkUrl: "https://github.com/ChrisPaulDillon/PowerBuddy.API"
      }
    ],
    categories: ["React", "Redux", "C#", "Chakra UI"]
  },
  {
    id: 5,
    title: "ImFeelingBullish.com",
    description: "Cryptocurrency aggregator used to automatically filter out potential high return crypto based on a multitude of data points.",
    extendedDescription: "Cryptocurrency aggregator used to automatically filter out potential high return crypto based on a multitude of data points. This project was designed to automatically filter out coins that were being manipulated in the market and provide additional information on tokens that had high return potential.",
    linkItems: [
      {
        linkText: "Front End",
        linkUrl: "https://github.com/ChrisPaulDillon/ImFeelingBullish-Next"
      }
    ],
    categories: ["React", "Web3", "Chakra UI", "Coingecko API"]
  }
];

// app/routes/portfolio.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var PortfolioPage = () => /* @__PURE__ */ jsxDEV17(PageContainer, { children: [
  /* @__PURE__ */ jsxDEV17(SectionHeading, { children: "Portfolio" }, void 0, !1, {
    fileName: "app/routes/portfolio.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV17(
    Flex5,
    {
      flexDir: "row",
      flexWrap: "wrap",
      justifyContent: { base: "center", lg: "left" },
      children: PORTFOLIO_ITEMS.map((item) => /* @__PURE__ */ jsxDEV17(PortfolioCard, { ...item }, item.title, !1, {
        fileName: "app/routes/portfolio.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this))
    },
    void 0,
    !1,
    {
      fileName: "app/routes/portfolio.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/routes/portfolio.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this), portfolio_default = PortfolioPage;

// app/routes/aboutme.tsx
var aboutme_exports = {};
__export(aboutme_exports, {
  default: () => aboutme_default
});
import { Text as Text7 } from "@chakra-ui/react";
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var AboutMePage = () => /* @__PURE__ */ jsxDEV18(PageContainer, { children: [
  /* @__PURE__ */ jsxDEV18(SectionHeading, { children: "About Me" }, void 0, !1, {
    fileName: "app/routes/aboutme.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV18(Text7, { mt: 2, children: [
    "Hello! My name is Chris and I have a passionate for designing and developing technology. I started programming at the young age of 14, creating scripts for the popular online MMORPG game called RuneScape. More recently, I achieved a Masters in Big Data Technologies and progressed onto a PhD programme in Blockchain Technology. During my PhD, I had the privilege of teaching modules at Masters level at Newcastle University.",
    /* @__PURE__ */ jsxDEV18("br", {}, void 0, !1, {
      fileName: "app/routes/aboutme.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("br", {}, void 0, !1, {
      fileName: "app/routes/aboutme.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    "Fast forward to today, I am a seasoned Software Engineer with a huge range of skills including full stack development, creation of agents, data analysis and mobile development.The core technology stack I have worked on includes C#, NextJs, TypeScript, Chakra UI & React. I have extensive experience with Data Analysis with the programming language Python, including utilising the popular Data Science libraries such as NumPY, SkLearn & more.",
    /* @__PURE__ */ jsxDEV18("br", {}, void 0, !1, {
      fileName: "app/routes/aboutme.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18("br", {}, void 0, !1, {
      fileName: "app/routes/aboutme.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    "In my spare time, I love keeping fit and going to the gym. I am also an avid reader and study many topics such as programming, neuroscience and psychology. My favourite books rergarding programming are Refactoring: Improving the Design of Existing Code, Head First Design Patterns and the You Don't Know Javascript Series."
  ] }, void 0, !0, {
    fileName: "app/routes/aboutme.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/aboutme.tsx",
  lineNumber: 7,
  columnNumber: 3
}, this), aboutme_default = AboutMePage;

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default
});

// app/features/contact/ContactFormExtended.tsx
import {
  Box as Box9,
  Flex as Flex7,
  HStack as HStack3,
  Icon as Icon5,
  IconButton as IconButton3,
  Text as Text8,
  VStack as VStack5,
  useColorModeValue as useColorModeValue12
} from "@chakra-ui/react";
import { Link as Link5 } from "@remix-run/react";
import { BsGithub as BsGithub2 } from "react-icons/bs";
import { FaLinkedin as FaLinkedin2 } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

// app/features/contact/ContactFormContainer.tsx
import {
  Box as Box8,
  Button as Button2,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  VStack as VStack4,
  useColorModeValue as useColorModeValue11
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { BsPerson } from "react-icons/bs";
import { MdSubject } from "react-icons/md";

// app/hooks/useAppToast.tsx
import {
  Box as Box7,
  Flex as Flex6,
  chakra as chakra2,
  useColorMode as useColorMode2,
  useColorModeValue as useColorModeValue10,
  useToast
} from "@chakra-ui/react";
import { FaBan, FaCheckCircle, FaExclamation } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var ToastBody = ({
  title,
  description,
  toastType,
  Icon: Icon9,
  color
}) => /* @__PURE__ */ jsxDEV19(Flex6, { w: "full", alignItems: "center", justifyContent: "center", children: /* @__PURE__ */ jsxDEV19(
  Flex6,
  {
    maxW: "sm",
    w: "full",
    mx: "auto",
    bg: useColorModeValue10("white", "gray.800"),
    shadow: "md",
    rounded: "lg",
    overflow: "hidden",
    children: [
      /* @__PURE__ */ jsxDEV19(Flex6, { justifyContent: "center", alignItems: "center", w: 12, bg: color, children: /* @__PURE__ */ jsxDEV19(Icon9, { as: IoMdCheckmarkCircle, color: "white", boxSize: 6 }, void 0, !1, {
        fileName: "app/hooks/useAppToast.tsx",
        lineNumber: 40,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/hooks/useAppToast.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV19(Box7, { mx: -3, py: 2, px: 4, children: /* @__PURE__ */ jsxDEV19(Box7, { mx: 3, children: [
        /* @__PURE__ */ jsxDEV19(chakra2.span, { color, fontWeight: "bold", children: title ?? toastType }, void 0, !1, {
          fileName: "app/hooks/useAppToast.tsx",
          lineNumber: 45,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV19(
          chakra2.p,
          {
            color: useColorModeValue10("gray.600", "gray.200"),
            fontSize: "sm",
            children: description
          },
          void 0,
          !1,
          {
            fileName: "app/hooks/useAppToast.tsx",
            lineNumber: 48,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/hooks/useAppToast.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/hooks/useAppToast.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/hooks/useAppToast.tsx",
    lineNumber: 30,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/hooks/useAppToast.tsx",
  lineNumber: 29,
  columnNumber: 5
}, this), ToastSuccess = ({ title, description }) => /* @__PURE__ */ jsxDEV19(
  ToastBody,
  {
    title,
    description,
    toastType: "Success",
    Icon: FaCheckCircle,
    color: "green.500"
  },
  void 0,
  !1,
  {
    fileName: "app/hooks/useAppToast.tsx",
    lineNumber: 68,
    columnNumber: 5
  },
  this
), ToastError = ({ title, description }) => {
  let { colorMode } = useColorMode2();
  return /* @__PURE__ */ jsxDEV19(
    ToastBody,
    {
      title,
      description,
      toastType: "Error",
      Icon: FaBan,
      color: "red.500"
    },
    void 0,
    !1,
    {
      fileName: "app/hooks/useAppToast.tsx",
      lineNumber: 82,
      columnNumber: 5
    },
    this
  );
}, ToastWarning = ({ title, description }) => {
  let { colorMode } = useColorMode2();
  return /* @__PURE__ */ jsxDEV19(
    ToastBody,
    {
      title,
      description,
      toastType: "Warning",
      Icon: FaExclamation,
      color: "orange.500"
    },
    void 0,
    !1,
    {
      fileName: "app/hooks/useAppToast.tsx",
      lineNumber: 96,
      columnNumber: 5
    },
    this
  );
}, useAppToast = () => {
  let toast = useToast();
  return { toastSuccess: (title, description, position) => {
    toast({
      position: position || "top",
      render: () => /* @__PURE__ */ jsxDEV19(ToastSuccess, { title, description }, void 0, !1, {
        fileName: "app/hooks/useAppToast.tsx",
        lineNumber: 116,
        columnNumber: 21
      }, this),
      duration: 5e3,
      isClosable: !0
    });
  }, toastError: (title, description, position) => {
    toast({
      position: position || "top",
      render: () => /* @__PURE__ */ jsxDEV19(ToastError, { title, description }, void 0, !1, {
        fileName: "app/hooks/useAppToast.tsx",
        lineNumber: 129,
        columnNumber: 21
      }, this),
      duration: 5e3,
      isClosable: !0
    });
  }, toastWarning: (title, description, position) => {
    toast({
      position: position || "top",
      render: () => /* @__PURE__ */ jsxDEV19(ToastWarning, { title, description }, void 0, !1, {
        fileName: "app/hooks/useAppToast.tsx",
        lineNumber: 142,
        columnNumber: 21
      }, this),
      duration: 5e3,
      isClosable: !0
    });
  }, ...toast };
};

// app/features/contact/ContactFormContainer.tsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var ContactFormContainer = () => {
  let { register, handleSubmit, formState: { errors } } = useForm(), { toastSuccess } = useAppToast(), handleFormSubmit = (values) => {
    toastSuccess("Success", "Opening your email client", "top-right"), window.location.href = `mailto:chrispauldillon@live.com?subject=${values.subject}&body=${values.body} Best regards, ${values.name}`;
  }, inputBg = useColorModeValue11("gray.100", "whiteAlpha.100"), borderColor = useColorModeValue11("purple.300", "purple.500"), hoverBorderColor = useColorModeValue11("purple.500", "purple.300");
  return /* @__PURE__ */ jsxDEV20(
    Box8,
    {
      bg: useColorModeValue11("white", "gray.800"),
      borderRadius: "xl",
      boxShadow: "xl",
      p: 8,
      m: { base: 5 },
      borderWidth: "1px",
      borderColor,
      _hover: { borderColor: hoverBorderColor },
      transition: "all 0.3s",
      children: /* @__PURE__ */ jsxDEV20("form", { onSubmit: handleSubmit(handleFormSubmit), children: /* @__PURE__ */ jsxDEV20(VStack4, { spacing: 5, children: [
        /* @__PURE__ */ jsxDEV20(FormControl, { isRequired: !0, children: [
          /* @__PURE__ */ jsxDEV20(FormLabel, { fontSize: "lg", fontWeight: "medium", children: "Your Name" }, void 0, !1, {
            fileName: "app/features/contact/ContactFormContainer.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV20(InputGroup, { children: [
            /* @__PURE__ */ jsxDEV20(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ jsxDEV20(BsPerson, { color: "gray.800" }, void 0, !1, {
              fileName: "app/features/contact/ContactFormContainer.tsx",
              lineNumber: 49,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/features/contact/ContactFormContainer.tsx",
              lineNumber: 48,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV20(
              Input,
              {
                type: "text",
                placeholder: "John Doe",
                bg: inputBg,
                borderRadius: "lg",
                size: "lg",
                _hover: { borderColor: hoverBorderColor },
                _focus: { borderColor: hoverBorderColor, boxShadow: "outline" },
                ...register("name", { required: !0 })
              },
              void 0,
              !1,
              {
                fileName: "app/features/contact/ContactFormContainer.tsx",
                lineNumber: 51,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/features/contact/ContactFormContainer.tsx",
            lineNumber: 47,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/features/contact/ContactFormContainer.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV20(FormControl, { isRequired: !0, children: [
          /* @__PURE__ */ jsxDEV20(FormLabel, { fontSize: "lg", fontWeight: "medium", children: "Subject" }, void 0, !1, {
            fileName: "app/features/contact/ContactFormContainer.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV20(InputGroup, { children: [
            /* @__PURE__ */ jsxDEV20(InputLeftElement, { pointerEvents: "none", children: /* @__PURE__ */ jsxDEV20(MdSubject, { color: "gray.800" }, void 0, !1, {
              fileName: "app/features/contact/ContactFormContainer.tsx",
              lineNumber: 68,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/features/contact/ContactFormContainer.tsx",
              lineNumber: 67,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV20(
              Input,
              {
                type: "text",
                placeholder: "What's this about?",
                bg: inputBg,
                borderRadius: "lg",
                size: "lg",
                _hover: { borderColor: hoverBorderColor },
                _focus: { borderColor: hoverBorderColor, boxShadow: "outline" },
                ...register("subject", { required: !0 })
              },
              void 0,
              !1,
              {
                fileName: "app/features/contact/ContactFormContainer.tsx",
                lineNumber: 70,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/features/contact/ContactFormContainer.tsx",
            lineNumber: 66,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/features/contact/ContactFormContainer.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV20(FormControl, { isRequired: !0, children: [
          /* @__PURE__ */ jsxDEV20(FormLabel, { fontSize: "lg", fontWeight: "medium", children: "Message" }, void 0, !1, {
            fileName: "app/features/contact/ContactFormContainer.tsx",
            lineNumber: 84,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV20(
            Textarea,
            {
              placeholder: "Your message...",
              bg: inputBg,
              borderRadius: "lg",
              size: "lg",
              minH: "200px",
              _hover: { borderColor: hoverBorderColor },
              _focus: { borderColor: hoverBorderColor, boxShadow: "outline" },
              ...register("body", { required: !0 })
            },
            void 0,
            !1,
            {
              fileName: "app/features/contact/ContactFormContainer.tsx",
              lineNumber: 85,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/features/contact/ContactFormContainer.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV20(
          Button2,
          {
            type: "submit",
            size: "lg",
            width: "full",
            colorScheme: "purple",
            borderRadius: "lg",
            _hover: {
              transform: "translateY(-2px)",
              boxShadow: "lg"
            },
            transition: "all 0.3s",
            children: "Send Message"
          },
          void 0,
          !1,
          {
            fileName: "app/features/contact/ContactFormContainer.tsx",
            lineNumber: 97,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/features/contact/ContactFormContainer.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/features/contact/ContactFormContainer.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/features/contact/ContactFormContainer.tsx",
      lineNumber: 32,
      columnNumber: 5
    },
    this
  );
};

// app/features/contact/ContactFormExtended.tsx
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var ContactFormExtended = () => {
  let bgColor = useColorModeValue12("whiteAlpha.500", "gray.800"), buttonBgColor = useColorModeValue12("gray.100", "whiteAlpha.200"), buttonHoverBgColor = useColorModeValue12("brand.50", "brand.900"), iconColor = useColorModeValue12("brand.500", "brand.300"), textColor = useColorModeValue12("gray.700", "gray.300"), contactBg = useColorModeValue12("white", "whiteAlpha.100"), contactHoverBg = useColorModeValue12("gray.50", "whiteAlpha.200");
  return /* @__PURE__ */ jsxDEV21(
    Box9,
    {
      bg: bgColor,
      borderRadius: "2xl",
      p: { sm: 5, md: 5, lg: 16 },
      w: "100%",
      boxShadow: "xl",
      children: /* @__PURE__ */ jsxDEV21(Flex7, { flexDir: { base: "column", lg: "row" }, gap: 8, children: [
        /* @__PURE__ */ jsxDEV21(Box9, { flex: "1", children: [
          /* @__PURE__ */ jsxDEV21(SectionHeading, { children: "Get in Touch" }, void 0, !1, {
            fileName: "app/features/contact/ContactFormExtended.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV21(
            HomeBodyText,
            {
              mt: 4,
              textAlign: { base: "center", lg: "left" },
              fontSize: "lg",
              color: useColorModeValue12("gray.600", "gray.300"),
              children: "I'm always interested in hearing about new projects and opportunities. Feel free to reach out!"
            },
            void 0,
            !1,
            {
              fileName: "app/features/contact/ContactFormExtended.tsx",
              lineNumber: 39,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ jsxDEV21(VStack5, { spacing: 4, mt: 8, align: { base: "center", lg: "flex-start" }, children: [
            /* @__PURE__ */ jsxDEV21(
              Flex7,
              {
                align: "center",
                gap: 3,
                p: 3,
                borderRadius: "lg",
                bg: contactBg,
                w: { base: "full", lg: "auto" },
                minW: "250px",
                transition: "all 0.2s",
                _hover: {
                  bg: contactHoverBg,
                  transform: "translateY(-2px)"
                },
                children: [
                  /* @__PURE__ */ jsxDEV21(Icon5, { as: MdEmail, color: iconColor, boxSize: 5 }, void 0, !1, {
                    fileName: "app/features/contact/ContactFormExtended.tsx",
                    lineNumber: 64,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV21(Text8, { fontSize: "md", color: textColor, fontWeight: "medium", children: "chrispauldillon@live.com" }, void 0, !1, {
                    fileName: "app/features/contact/ContactFormExtended.tsx",
                    lineNumber: 65,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/features/contact/ContactFormExtended.tsx",
                lineNumber: 50,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ jsxDEV21(
              Flex7,
              {
                align: "center",
                gap: 3,
                p: 3,
                borderRadius: "lg",
                bg: contactBg,
                w: { base: "full", lg: "auto" },
                minW: "250px",
                transition: "all 0.2s",
                _hover: {
                  bg: contactHoverBg,
                  transform: "translateY(-2px)"
                },
                children: [
                  /* @__PURE__ */ jsxDEV21(Icon5, { as: MdLocationOn, color: iconColor, boxSize: 5 }, void 0, !1, {
                    fileName: "app/features/contact/ContactFormExtended.tsx",
                    lineNumber: 84,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV21(Text8, { fontSize: "md", color: textColor, fontWeight: "medium", children: "Scotland, United Kingdom" }, void 0, !1, {
                    fileName: "app/features/contact/ContactFormExtended.tsx",
                    lineNumber: 85,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/features/contact/ContactFormExtended.tsx",
                lineNumber: 70,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/features/contact/ContactFormExtended.tsx",
            lineNumber: 49,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV21(
            HStack3,
            {
              mt: 8,
              spacing: 4,
              justify: { base: "center", lg: "flex-start" },
              children: [
                /* @__PURE__ */ jsxDEV21(Link5, { to: "https://www.linkedin.com/in/christopher-d-106005183/", children: /* @__PURE__ */ jsxDEV21(
                  IconButton3,
                  {
                    "aria-label": "linkedin",
                    icon: /* @__PURE__ */ jsxDEV21(FaLinkedin2, { size: "24px" }, void 0, !1, {
                      fileName: "app/features/contact/ContactFormExtended.tsx",
                      lineNumber: 99,
                      columnNumber: 23
                    }, this),
                    size: "lg",
                    borderRadius: "full",
                    bg: buttonBgColor,
                    color: iconColor,
                    _hover: {
                      bg: buttonHoverBgColor,
                      transform: "translateY(-2px)"
                    },
                    transition: "all 0.3s"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/features/contact/ContactFormExtended.tsx",
                    lineNumber: 97,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/features/contact/ContactFormExtended.tsx",
                  lineNumber: 96,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ jsxDEV21(Link5, { to: "https://github.com/ChrisPaulDillon", children: /* @__PURE__ */ jsxDEV21(
                  IconButton3,
                  {
                    "aria-label": "github",
                    icon: /* @__PURE__ */ jsxDEV21(BsGithub2, { size: "24px" }, void 0, !1, {
                      fileName: "app/features/contact/ContactFormExtended.tsx",
                      lineNumber: 114,
                      columnNumber: 23
                    }, this),
                    size: "lg",
                    borderRadius: "full",
                    bg: buttonBgColor,
                    color: iconColor,
                    _hover: {
                      bg: buttonHoverBgColor,
                      transform: "translateY(-2px)"
                    },
                    transition: "all 0.3s"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/features/contact/ContactFormExtended.tsx",
                    lineNumber: 112,
                    columnNumber: 15
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/features/contact/ContactFormExtended.tsx",
                  lineNumber: 111,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/features/contact/ContactFormExtended.tsx",
              lineNumber: 91,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/features/contact/ContactFormExtended.tsx",
          lineNumber: 37,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV21(Box9, { flex: "1", children: /* @__PURE__ */ jsxDEV21(ContactFormContainer, {}, void 0, !1, {
          fileName: "app/features/contact/ContactFormExtended.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/features/contact/ContactFormExtended.tsx",
          lineNumber: 129,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/features/contact/ContactFormExtended.tsx",
        lineNumber: 36,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/features/contact/ContactFormExtended.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
};

// app/routes/contact.tsx
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
var ContactPage = () => /* @__PURE__ */ jsxDEV22(PageContainer, { children: /* @__PURE__ */ jsxDEV22(ContactFormExtended, {}, void 0, !1, {
  fileName: "app/routes/contact.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/routes/contact.tsx",
  lineNumber: 5,
  columnNumber: 3
}, this), contact_default = ContactPage;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
import { Box as Box18, Container as Container5, Flex as Flex13, VStack as VStack7 } from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";

// app/features/home/AboutMeSection.tsx
import { Box as Box11, Flex as Flex8, Stack as Stack3 } from "@chakra-ui/react";

// app/features/shared/ProfileAvatar.tsx
import { Box as Box10, Image as Image4, useColorModeValue as useColorModeValue13 } from "@chakra-ui/react";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var ProfileAvatar = (props) => {
  let imageUrl = useAssetUrl("/images/chris.png");
  return /* @__PURE__ */ jsxDEV23(
    Box10,
    {
      display: "inline-block",
      borderStyle: "solid",
      borderWidth: 2,
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      borderColor: useColorModeValue13("gray.700", "navy.400"),
      ...props,
      children: /* @__PURE__ */ jsxDEV23(
        Image4,
        {
          src: imageUrl,
          alt: "Profile image",
          objectFit: "cover",
          width: 250,
          height: 350,
          loading: "lazy"
        },
        void 0,
        !1,
        {
          fileName: "app/features/shared/ProfileAvatar.tsx",
          lineNumber: 16,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/features/shared/ProfileAvatar.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  );
};

// app/features/home/AboutMeSection.tsx
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
var AboutMeSection = (props) => /* @__PURE__ */ jsxDEV24(Box11, { as: "section", children: [
  /* @__PURE__ */ jsxDEV24(SectionHeading, { children: "About Me" }, void 0, !1, {
    fileName: "app/features/home/AboutMeSection.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV24(Stack3, { direction: { base: "column", lg: "row" }, w: "100%", ...props, children: [
    /* @__PURE__ */ jsxDEV24(HomeBodyText, { children: [
      "Hello! My name is Chris and I have a passionate for designing and developing technology. I started programming at the young age of 14, creating scripts for the popular online MMORPG game called RuneScape. I am a Senior Software Engineer with my predominant languages being C#, Go, React & TypeScript.",
      /* @__PURE__ */ jsxDEV24("br", {}, void 0, !1, {
        fileName: "app/features/home/AboutMeSection.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      " ",
      /* @__PURE__ */ jsxDEV24("br", {}, void 0, !1, {
        fileName: "app/features/home/AboutMeSection.tsx",
        lineNumber: 17,
        columnNumber: 16
      }, this),
      "In my spare time, I enjoy keeping fit and going to the gym. I am also an avid reader and study many topics such as programming, neuroscience and psychology."
    ] }, void 0, !0, {
      fileName: "app/features/home/AboutMeSection.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24(Flex8, { justifyContent: "center", pb: { base: 4, sm: 4, lg: 0 }, w: "100%", children: /* @__PURE__ */ jsxDEV24(ProfileAvatar, {}, void 0, !1, {
      fileName: "app/features/home/AboutMeSection.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/features/home/AboutMeSection.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/home/AboutMeSection.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/features/home/AboutMeSection.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this);

// app/features/home/AcademicSection.tsx
import {
  Box as Box12,
  Card as Card3,
  CardBody as CardBody3,
  CardHeader as CardHeader3,
  Flex as Flex9,
  Heading as Heading6,
  Icon as Icon6,
  Stack as Stack4,
  Text as Text9,
  useColorModeValue as useColorModeValue14
} from "@chakra-ui/react";
import { HiAcademicCap } from "react-icons/hi";
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
var academicHistory = [
  {
    degree: "MSc Big Data Technologies",
    institution: "Glasgow Caledonian University",
    date: "2016 - 2017"
  },
  {
    degree: "BSc Computer Science",
    institution: "Glasgow Caledonian University",
    date: "2014 - 2016"
  },
  {
    degree: "HND Software Development",
    institution: "City of Glasgow College",
    date: "2012 - 2014"
  }
], AcademicSection = () => {
  let cardBg = useColorModeValue14("white", "gray.800"), borderColor = useColorModeValue14("red.100", "red.700"), iconBg = useColorModeValue14("red.50", "red.900"), iconColor = useColorModeValue14("red.500", "red.200"), institutionColor = useColorModeValue14("gray.600", "gray.400");
  return /* @__PURE__ */ jsxDEV25(Box12, { w: "100%", children: [
    /* @__PURE__ */ jsxDEV25(SectionHeading, { children: "Academic Achievements" }, void 0, !1, {
      fileName: "app/features/home/AcademicSection.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV25(Stack4, { spacing: 4, mt: 6, children: academicHistory.map((education, index) => /* @__PURE__ */ jsxDEV25(
      Card3,
      {
        bg: cardBg,
        borderWidth: "1px",
        borderColor,
        borderRadius: "xl",
        overflow: "hidden",
        transition: "all 0.3s",
        _hover: {
          transform: "translateY(-2px)",
          boxShadow: "lg",
          borderColor: useColorModeValue14("red.300", "red.500")
        },
        children: [
          /* @__PURE__ */ jsxDEV25(CardHeader3, { pb: 2, children: /* @__PURE__ */ jsxDEV25(Flex9, { align: "center", gap: 4, children: [
            /* @__PURE__ */ jsxDEV25(
              Box12,
              {
                p: 2,
                borderRadius: "lg",
                bg: iconBg,
                children: /* @__PURE__ */ jsxDEV25(
                  Icon6,
                  {
                    as: HiAcademicCap,
                    boxSize: 5,
                    color: iconColor
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/features/home/AcademicSection.tsx",
                    lineNumber: 67,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/features/home/AcademicSection.tsx",
                lineNumber: 62,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV25(Box12, { children: [
              /* @__PURE__ */ jsxDEV25(
                Heading6,
                {
                  size: "md",
                  bgGradient: useColorModeValue14(
                    "linear(to-r, red.600, purple.500)",
                    "linear(to-r, red.200, purple.200)"
                  ),
                  bgClip: "text",
                  children: education.degree
                },
                void 0,
                !1,
                {
                  fileName: "app/features/home/AcademicSection.tsx",
                  lineNumber: 74,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV25(
                Text9,
                {
                  fontSize: "sm",
                  color: institutionColor,
                  mt: 1,
                  children: education.date
                },
                void 0,
                !1,
                {
                  fileName: "app/features/home/AcademicSection.tsx",
                  lineNumber: 84,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/features/home/AcademicSection.tsx",
              lineNumber: 73,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/features/home/AcademicSection.tsx",
            lineNumber: 61,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/features/home/AcademicSection.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV25(CardBody3, { pt: 0, children: /* @__PURE__ */ jsxDEV25(
            Text9,
            {
              fontSize: "md",
              color: useColorModeValue14("gray.700", "gray.300"),
              children: education.institution
            },
            void 0,
            !1,
            {
              fileName: "app/features/home/AcademicSection.tsx",
              lineNumber: 95,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/features/home/AcademicSection.tsx",
            lineNumber: 94,
            columnNumber: 13
          }, this)
        ]
      },
      index,
      !0,
      {
        fileName: "app/features/home/AcademicSection.tsx",
        lineNumber: 46,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/features/home/AcademicSection.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/home/AcademicSection.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
};

// app/features/home/ContactMeSection.tsx
import { Box as Box13 } from "@chakra-ui/react";
import { forwardRef } from "react";
import { jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
var ContactMeSection = forwardRef(
  (props, ref) => /* @__PURE__ */ jsxDEV26(Box13, { as: "section", w: "100%", ref, ...props, children: /* @__PURE__ */ jsxDEV26(ContactFormExtended, {}, void 0, !1, {
    fileName: "app/features/home/ContactMeSection.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/features/home/ContactMeSection.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this)
);

// app/features/home/IntroSection.tsx
import {
  Box as Box15,
  Button as Button3,
  Flex as Flex10,
  Heading as Heading7,
  VStack as VStack6,
  useColorModeValue as useColorModeValue16
} from "@chakra-ui/react";
import { Link as Link6 } from "@remix-run/react";

// app/features/home/ProgrammingCard.tsx
import { HStack as HStack4, Icon as Icon7, useColorModeValue as useColorModeValue15 } from "@chakra-ui/react";
import { FaCode } from "react-icons/fa";
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
var ProgrammingCard = ({
  label,
  ...rest
}) => /* @__PURE__ */ jsxDEV27(
  HStack4,
  {
    justifyContent: "center",
    alignItems: "center",
    border: "1px",
    borderRadius: "full",
    borderColor: useColorModeValue15("red.200", "red.500"),
    bg: useColorModeValue15("whiteAlpha.800", "whiteAlpha.100"),
    px: 4,
    py: 2,
    m: 1,
    transition: "all 0.3s",
    _hover: {
      transform: "translateY(-2px)",
      borderColor: useColorModeValue15("red.400", "red.300"),
      boxShadow: "md"
    },
    ...rest,
    children: [
      /* @__PURE__ */ jsxDEV27(
        Icon7,
        {
          as: FaCode,
          color: useColorModeValue15("red.500", "red.300"),
          boxSize: 4
        },
        void 0,
        !1,
        {
          fileName: "app/features/home/ProgrammingCard.tsx",
          lineNumber: 32,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV27(
        HomeBodyText,
        {
          color: useColorModeValue15("gray.700", "gray.200"),
          fontSize: { base: "sm", md: "md" },
          fontWeight: "medium",
          m: 0,
          children: label
        },
        void 0,
        !1,
        {
          fileName: "app/features/home/ProgrammingCard.tsx",
          lineNumber: 37,
          columnNumber: 7
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/features/home/ProgrammingCard.tsx",
    lineNumber: 14,
    columnNumber: 5
  },
  this
);

// app/features/home/IntroSection.tsx
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
var IntroSection = (props) => /* @__PURE__ */ jsxDEV28(
  VStack6,
  {
    as: "section",
    spacing: { base: 4, md: 6 },
    alignItems: { base: "center", lg: "flex-start" },
    w: "full",
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV28(
        Heading7,
        {
          as: "h1",
          fontSize: { base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" },
          bgGradient: useColorModeValue16(
            "linear(to-r, purple.600, red.500)",
            "linear(to-r, purple.200, red.200)"
          ),
          bgClip: "text",
          letterSpacing: "tight",
          lineHeight: { base: 1.3, md: 1.2 },
          children: "Chris Dillon"
        },
        void 0,
        !1,
        {
          fileName: "app/features/home/IntroSection.tsx",
          lineNumber: 23,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV28(
        Heading7,
        {
          as: "h2",
          fontSize: { base: "xl", sm: "2xl", md: "3xl", lg: "4xl" },
          fontWeight: "bold",
          color: useColorModeValue16("gray.700", "gray.300"),
          lineHeight: { base: 1.4, md: 1.2 },
          children: "Full Stack Software Engineer"
        },
        void 0,
        !1,
        {
          fileName: "app/features/home/IntroSection.tsx",
          lineNumber: 37,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV28(
        HomeBodyText,
        {
          fontSize: { base: "md", sm: "lg", md: "xl" },
          textAlign: { base: "center", lg: "left" },
          maxW: { base: "full", md: "600px" },
          color: useColorModeValue16("gray.600", "gray.400"),
          children: "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences."
        },
        void 0,
        !1,
        {
          fileName: "app/features/home/IntroSection.tsx",
          lineNumber: 47,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV28(
        Flex10,
        {
          direction: { base: "column", sm: "row" },
          gap: 4,
          w: "full",
          justify: { base: "center", lg: "flex-start" },
          align: "center",
          mt: { base: 4, md: 6 },
          children: /* @__PURE__ */ jsxDEV28(Box15, { display: "flex", gap: 2, flexWrap: "wrap", justifyContent: { base: "center", lg: "flex-start" }, children: [
            /* @__PURE__ */ jsxDEV28(ProgrammingCard, { label: "C#" }, void 0, !1, {
              fileName: "app/features/home/IntroSection.tsx",
              lineNumber: 66,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV28(ProgrammingCard, { label: "TypeScript" }, void 0, !1, {
              fileName: "app/features/home/IntroSection.tsx",
              lineNumber: 67,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ jsxDEV28(ProgrammingCard, { label: "React" }, void 0, !1, {
              fileName: "app/features/home/IntroSection.tsx",
              lineNumber: 68,
              columnNumber: 9
            }, this)
          ] }, void 0, !0, {
            fileName: "app/features/home/IntroSection.tsx",
            lineNumber: 65,
            columnNumber: 7
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/features/home/IntroSection.tsx",
          lineNumber: 57,
          columnNumber: 5
        },
        this
      ),
      /* @__PURE__ */ jsxDEV28(Box15, { w: "full", pt: { base: 4, md: 6 }, textAlign: { base: "center", lg: "left" }, children: /* @__PURE__ */ jsxDEV28(Link6, { to: "/portfolio", children: /* @__PURE__ */ jsxDEV28(
        Button3,
        {
          colorScheme: "purple",
          size: { base: "md", md: "lg" },
          px: { base: 6, md: 8 },
          fontSize: { base: "sm", md: "md" },
          _hover: {
            transform: "translateY(-2px)",
            boxShadow: "lg"
          },
          transition: "all 0.3s",
          children: "View My Portfolio"
        },
        void 0,
        !1,
        {
          fileName: "app/features/home/IntroSection.tsx",
          lineNumber: 74,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/features/home/IntroSection.tsx",
        lineNumber: 73,
        columnNumber: 7
      }, this) }, void 0, !1, {
        fileName: "app/features/home/IntroSection.tsx",
        lineNumber: 72,
        columnNumber: 5
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/features/home/IntroSection.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  this
);

// app/features/home/PortfolioSection.tsx
import { Box as Box16, Flex as Flex11 } from "@chakra-ui/react";
import { forwardRef as forwardRef2 } from "react";
import { jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
var PortfolioSection = forwardRef2(
  (props, ref) => /* @__PURE__ */ jsxDEV29(Box16, { as: "section", ref, ...props, children: [
    /* @__PURE__ */ jsxDEV29(SectionHeading, { children: "Portfolio" }, void 0, !1, {
      fileName: "app/features/home/PortfolioSection.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV29(HomeBodyText, { children: "Here is just some of the cool projects I've worked on" }, void 0, !1, {
      fileName: "app/features/home/PortfolioSection.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV29(
      Flex11,
      {
        flexDir: "row",
        flexWrap: "wrap",
        justifyContent: { base: "center", lg: "left" },
        children: PORTFOLIO_ITEMS.map((item) => /* @__PURE__ */ jsxDEV29(PortfolioCard, { ...item }, item.title, !1, {
          fileName: "app/features/home/PortfolioSection.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/features/home/PortfolioSection.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/features/home/PortfolioSection.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this)
);

// app/features/home/WorkExperienceSection.tsx
import {
  Box as Box17,
  Card as Card4,
  CardBody as CardBody4,
  CardHeader as CardHeader4,
  Flex as Flex12,
  Heading as Heading8,
  Icon as Icon8,
  Stack as Stack5,
  Text as Text10,
  useColorModeValue as useColorModeValue17
} from "@chakra-ui/react";
import { MdWork as MdWork3 } from "react-icons/md";
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
var WorkExperienceSection = () => {
  let cardBg = useColorModeValue17("white", "gray.800"), borderColor = useColorModeValue17("purple.100", "purple.700"), iconBg = useColorModeValue17("purple.50", "purple.900"), iconColor = useColorModeValue17("purple.500", "purple.200"), dateColor = useColorModeValue17("gray.600", "gray.400");
  return /* @__PURE__ */ jsxDEV30(Box17, { w: "100%", children: [
    /* @__PURE__ */ jsxDEV30(SectionHeading, { children: "Work Experience" }, void 0, !1, {
      fileName: "app/features/home/WorkExperienceSection.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV30(Stack5, { spacing: 4, mt: 6, children: WORK_EXPERIENCE_DATA.map((experience, index) => /* @__PURE__ */ jsxDEV30(
      Card4,
      {
        bg: cardBg,
        borderWidth: "1px",
        borderColor,
        borderRadius: "xl",
        overflow: "hidden",
        transition: "all 0.3s",
        _hover: {
          transform: "translateY(-2px)",
          boxShadow: "lg",
          borderColor: useColorModeValue17("purple.300", "purple.500")
        },
        children: [
          /* @__PURE__ */ jsxDEV30(CardHeader4, { pb: 2, children: /* @__PURE__ */ jsxDEV30(Flex12, { align: "center", gap: 4, children: [
            /* @__PURE__ */ jsxDEV30(
              Box17,
              {
                p: 2,
                borderRadius: "lg",
                bg: iconBg,
                children: /* @__PURE__ */ jsxDEV30(
                  Icon8,
                  {
                    as: MdWork3,
                    boxSize: 5,
                    color: iconColor
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/features/home/WorkExperienceSection.tsx",
                    lineNumber: 50,
                    columnNumber: 19
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/features/home/WorkExperienceSection.tsx",
                lineNumber: 45,
                columnNumber: 17
              },
              this
            ),
            /* @__PURE__ */ jsxDEV30(Box17, { children: [
              /* @__PURE__ */ jsxDEV30(
                Heading8,
                {
                  size: "md",
                  bgGradient: useColorModeValue17(
                    "linear(to-r, purple.600, red.500)",
                    "linear(to-r, purple.200, red.200)"
                  ),
                  bgClip: "text",
                  children: experience.companyName
                },
                void 0,
                !1,
                {
                  fileName: "app/features/home/WorkExperienceSection.tsx",
                  lineNumber: 57,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ jsxDEV30(
                Text10,
                {
                  fontSize: "sm",
                  color: dateColor,
                  mt: 1,
                  children: experience.date
                },
                void 0,
                !1,
                {
                  fileName: "app/features/home/WorkExperienceSection.tsx",
                  lineNumber: 67,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/features/home/WorkExperienceSection.tsx",
              lineNumber: 56,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/features/home/WorkExperienceSection.tsx",
            lineNumber: 44,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/features/home/WorkExperienceSection.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV30(CardBody4, { pt: 0, children: /* @__PURE__ */ jsxDEV30(
            Text10,
            {
              fontSize: "md",
              fontWeight: "medium",
              color: useColorModeValue17("gray.700", "gray.300"),
              children: experience.role
            },
            void 0,
            !1,
            {
              fileName: "app/features/home/WorkExperienceSection.tsx",
              lineNumber: 78,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/features/home/WorkExperienceSection.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this)
        ]
      },
      index,
      !0,
      {
        fileName: "app/features/home/WorkExperienceSection.tsx",
        lineNumber: 29,
        columnNumber: 11
      },
      this
    )) }, void 0, !1, {
      fileName: "app/features/home/WorkExperienceSection.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/features/home/WorkExperienceSection.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};

// app/routes/_index.tsx
import { jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
var Index = () => {
  let contactMeRef = useRef(null), { enterCount: contactMeEnterCount } = useInViewport(contactMeRef, {
    threshold: 0.5
  });
  return /* @__PURE__ */ jsxDEV31(Container5, { maxW: "full", px: 0, children: /* @__PURE__ */ jsxDEV31(
    VStack7,
    {
      spacing: { base: 10, md: 14 },
      pt: { base: "80px", md: "100px" },
      px: { base: 4, sm: 6, md: 8, lg: 10 },
      children: [
        /* @__PURE__ */ jsxDEV31(IntroSection, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV31(Box18, { w: "full", px: { base: 2, md: 4 }, children: /* @__PURE__ */ jsxDEV31(AboutMeSection, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 27,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV31(Box18, { w: "full", children: /* @__PURE__ */ jsxDEV31(
          Flex13,
          {
            direction: { base: "column", lg: "row" },
            gap: { base: 8, lg: 12 },
            px: { base: 2, md: 4 },
            children: [
              /* @__PURE__ */ jsxDEV31(Box18, { flex: "1", children: /* @__PURE__ */ jsxDEV31(WorkExperienceSection, {}, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 37,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 36,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV31(Box18, { flex: "1", children: /* @__PURE__ */ jsxDEV31(AcademicSection, {}, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 40,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 39,
                columnNumber: 13
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 31,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV31(Box18, { w: "full", px: { base: 2, md: 4 }, children: /* @__PURE__ */ jsxDEV31(PortfolioSection, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 46,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV31(Box18, { w: "full", px: { base: 2, md: 4 }, pb: { base: 8, md: 10 }, children: /* @__PURE__ */ jsxDEV31(ContactMeSection, { ref: contactMeRef }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}, index_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DE2JL6VM.js", imports: ["/build/_shared/chunk-H2LOK4OR.js", "/build/_shared/chunk-F5BHF6F2.js", "/build/_shared/chunk-ACVXT7VY.js", "/build/_shared/chunk-S5NB2QQZ.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CTMXZJKK.js", imports: ["/build/_shared/chunk-36WVHAX4.js", "/build/_shared/chunk-HX55Y547.js", "/build/_shared/chunk-F3LLVCX4.js", "/build/_shared/chunk-VLS5E2A2.js", "/build/_shared/chunk-U2FGD5UM.js", "/build/_shared/chunk-2AKUTJQ7.js", "/build/_shared/chunk-NMZL6IDN.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-WUBOR5MI.js", imports: ["/build/_shared/chunk-WPLKF6AP.js", "/build/_shared/chunk-IQHKTUZW.js", "/build/_shared/chunk-EFBJUPQZ.js", "/build/_shared/chunk-NW6Y7R7V.js", "/build/_shared/chunk-YD4IA2WW.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/aboutme": { id: "routes/aboutme", parentId: "root", path: "aboutme", index: void 0, caseSensitive: void 0, module: "/build/routes/aboutme-3WUYOUXJ.js", imports: ["/build/_shared/chunk-Q2MTDVLK.js", "/build/_shared/chunk-YD4IA2WW.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-257NRK4V.js", imports: ["/build/_shared/chunk-Q2MTDVLK.js", "/build/_shared/chunk-EFBJUPQZ.js", "/build/_shared/chunk-NW6Y7R7V.js", "/build/_shared/chunk-YD4IA2WW.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/experience": { id: "routes/experience", parentId: "root", path: "experience", index: void 0, caseSensitive: void 0, module: "/build/routes/experience-2DB6W7XJ.js", imports: ["/build/_shared/chunk-Q2MTDVLK.js", "/build/_shared/chunk-WPLKF6AP.js", "/build/_shared/chunk-YD4IA2WW.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/portfolio": { id: "routes/portfolio", parentId: "root", path: "portfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/portfolio-TRDUJOTN.js", imports: ["/build/_shared/chunk-Q2MTDVLK.js", "/build/_shared/chunk-IQHKTUZW.js", "/build/_shared/chunk-NW6Y7R7V.js", "/build/_shared/chunk-YD4IA2WW.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/technology": { id: "routes/technology", parentId: "root", path: "technology", index: void 0, caseSensitive: void 0, module: "/build/routes/technology-PWB35PNI.js", imports: ["/build/_shared/chunk-Q2MTDVLK.js", "/build/_shared/chunk-YD4IA2WW.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "efbff02b", hmr: { runtime: "/build/_shared\\chunk-S5NB2QQZ.js", timestamp: 1744812475742 }, url: "/build/manifest-EFBFF02B.js" };

// server-entry-module:@remix-run/dev/server-build
var mode3 = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/experience": {
    id: "routes/experience",
    parentId: "root",
    path: "experience",
    index: void 0,
    caseSensitive: void 0,
    module: experience_exports
  },
  "routes/technology": {
    id: "routes/technology",
    parentId: "root",
    path: "technology",
    index: void 0,
    caseSensitive: void 0,
    module: technology_exports
  },
  "routes/portfolio": {
    id: "routes/portfolio",
    parentId: "root",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: portfolio_exports
  },
  "routes/aboutme": {
    id: "routes/aboutme",
    parentId: "root",
    path: "aboutme",
    index: void 0,
    caseSensitive: void 0,
    module: aboutme_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode3 as mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
