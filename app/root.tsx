import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { withEmotionCache } from '@emotion/react'
import { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import React, { useContext, useEffect } from 'react'
import { ClientStyleContext, ServerStyleContext } from './context'
import { AppBody } from './features/layout/AppBody'
import theme from './theme/theme'

export const meta: MetaFunction = () => [
  { charset: 'utf-8' },
  { title: 'Chris Dillon - Senior Full Stack Engineer in Scotland' },
  { name: 'viewport', content: 'width=device-width,initial-scale=1' },
  {
    name: 'description',
    content:
      'Senior Full Stack Engineer based in Scotland with expertise in C#, TypeScript, React, and modern web technologies. Specializing in building exceptional digital experiences.'
  },
  { name: 'theme-color', content: '#1a1b1e' },
  { name: 'robots', content: 'index, follow' },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:title',
    content: 'Chris Dillon - Senior Full Stack Engineer in Scotland'
  },
  {
    property: 'og:description',
    content:
      'Senior Full Stack Engineer based in Scotland with expertise in C#, TypeScript, React, and modern web technologies. Specializing in building exceptional digital experiences.'
  },
  { property: 'og:site_name', content: 'Chris Dillon Portfolio' },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:title',
    content: 'Chris Dillon - Senior Full Stack Engineer in Scotland'
  },
  {
    name: 'twitter:description',
    content:
      'Senior Full Stack Engineer based in Scotland with expertise in C#, TypeScript, React, and modern web technologies. Specializing in building exceptional digital experiences.'
  },
  {
    name: 'keywords',
    content:
      'Senior Full Stack Engineer, Software Engineer Scotland, C#, TypeScript, React, .NET Developer, Web Development, Software Development Edinburgh, Glasgow Developer'
  }
]

export const links: LinksFunction = () => {
  return [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap'
    },
    { rel: 'canonical', href: 'https://chrispauldillon.com' }
  ]
}

interface DocumentProps {
  children: React.ReactNode
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext)
    const clientStyleData = useContext(ClientStyleContext)

    useEffect(() => {
      emotionCache.sheet.container = document.head
      const tags = emotionCache.sheet.tags
      emotionCache.sheet.flush()
      tags.forEach(tag => {
        ;(emotionCache.sheet as any)._insertTag(tag)
      })
      clientStyleData?.reset()
    }, [])

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(' ')}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Chris Dillon',
                jobTitle: 'Senior Full Stack Engineer',
                url: 'https://chrispauldillon.com',
                sameAs: [
                  'https://www.linkedin.com/in/christopher-d-106005183/',
                  'https://github.com/ChrisPaulDillon'
                ],
                address: {
                  '@type': 'PostalAddress',
                  addressRegion: 'Scotland',
                  addressCountry: 'United Kingdom'
                },
                alumniOf: {
                  '@type': 'CollegeOrUniversity',
                  name: 'Glasgow Caledonian University'
                },
                knowsAbout: [
                  'Full Stack Development',
                  'C#',
                  'TypeScript',
                  'React',
                  'Software Architecture',
                  'Web Development'
                ]
              })
            }}
          />
        </head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  }
)

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={theme}>
        <AppBody>
          <Outlet />
        </AppBody>
      </ChakraProvider>
    </Document>
  )
}
