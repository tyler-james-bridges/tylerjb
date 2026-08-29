import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap border px-4 py-2 font-body text-sm font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground',
        destructive:
          'border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border-input bg-background text-foreground hover:border-accent hover:text-accent',
        secondary:
          'border-input bg-secondary text-secondary-foreground hover:border-accent',
        ghost:
          'border-transparent hover:border-input hover:bg-secondary hover:text-foreground',
        link: 'min-h-10 border-0 px-0 text-accent underline underline-offset-4 hover:text-foreground',
        accent:
          'border-accent bg-accent text-accent-foreground hover:bg-accent/90',
      },
      size: {
        default: 'min-h-11 px-4',
        sm: 'min-h-10 px-3',
        lg: 'min-h-12 px-6',
        icon: 'h-11 w-11 px-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
