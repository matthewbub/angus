import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({ children, client, className }) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className
      )}
    >
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            {client.logo ? (
              <figcaption className="mt-10">
                <Image src={client.logo} alt={client.name} unoptimized />
              </figcaption>
            ) : (
              <figcaption className="mt-10 text-lg font-medium text-neutral-950">
                - {client.name}
              </figcaption>
            )}
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
