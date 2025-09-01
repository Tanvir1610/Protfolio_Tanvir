import type { PropsWithChildren } from "react"

export function SectionHeader({ children }: PropsWithChildren) {
  return <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl mb-4">{children}</h2>
}
