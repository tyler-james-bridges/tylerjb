import * as React from 'react';
import { cn } from '@/lib/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      className={cn(
        'flex min-h-32 w-full resize-y bg-background px-3 py-2 font-body text-base text-foreground shadow-[0_0_0_1px_var(--rule)]',
        'placeholder:text-muted-foreground',
        'focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_hsl(var(--ring))]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'transition-[box-shadow,background-color] duration-150',
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = 'Textarea';

export { Textarea };
