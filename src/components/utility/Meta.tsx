import { Helmet } from 'react-helmet'

const appName = process.env.REACT_APP_NAME || 'My Weather'

export interface MetaProps {
  title?: string
  description?: string
  ogSrc?: string
  keyWord?: string
}

const Meta: React.FC<MetaProps> = ({ title, description, ogSrc, keyWord }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Helmet>
        {keyWord && <meta name="keyword" content={keyWord} />}
        {ogSrc && <meta name="og" content={ogSrc} />}
      </Helmet>
    </>
  )
}

interface TitleProps {
  suffix?: string
  children: React.ReactNode
}

export function Title({ suffix = appName, children }: TitleProps) {
  let title = children + (suffix ? ` - ${suffix}` : '')

  return (
    <>
      <Helmet>
        <title key="title">{title}</title>
      </Helmet>
      <OgTitle suffix={suffix}>{children}</OgTitle>
    </>
  )
}

interface OgTitleProps {
  suffix?: string
  children: React.ReactNode
}

export function OgTitle({ suffix = appName, children }: OgTitleProps) {
  let title = children + (suffix ? ` - ${suffix}` : '')

  return (
    <Helmet>
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="og:title" property="og:title" content={title} />
    </Helmet>
  )
}

interface DescriptionProps {
  children: React.ReactNode
}

export function Description({ children }: DescriptionProps) {
  return (
    <>
      <Helmet>
        <meta name="description" content={children as string} />
      </Helmet>
      <OgDescription>{children}</OgDescription>
    </>
  )
}

interface OgDescriptionProps {
  children: React.ReactNode
}

export function OgDescription({ children }: OgDescriptionProps) {
  return (
    <Helmet>
      <meta key="og:description" property="og:description" content={children as string} />
      <meta key="twitter:description" name="twitter:description" content={children as string} />
    </Helmet>
  )
}

export default Meta
