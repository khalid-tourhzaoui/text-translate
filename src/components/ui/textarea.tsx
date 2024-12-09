import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg bg-transparent dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
