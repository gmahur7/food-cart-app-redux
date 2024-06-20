"use client";
import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { Cross2Icon } from "@radix-ui/react-icons"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = SheetPrimitive.Portal

const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref} />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-primary p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
)

const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      {children}
      <SheetPrimitive.Close
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary text-[#216BE8]">
          <svg className="h4 w-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
          <path fill="currentColor" d="m5.318 13.47l.776-.776A6.04 6.04 0 0 0 8 13c1.999 0 3.74-.956 5.225-2.587A12.097 12.097 0 0 0 14.926 8a12.097 12.097 0 0 0-1.701-2.413l-.011-.012l.707-.708c1.359 1.476 2.045 2.976 2.058 3.006c.014.03.021.064.021.098v.06a.24.24 0 0 1-.02.097C15.952 8.188 13.291 14 8 14a7.03 7.03 0 0 1-2.682-.53M2.04 11.092C.707 9.629.034 8.158.02 8.128A.24.24 0 0 1 0 8.03v-.059c0-.034.007-.068.02-.098C.048 7.813 2.709 2 8 2c.962 0 1.837.192 2.625.507l-.78.78A6.039 6.039 0 0 0 8 3c-2 0-3.74.956-5.225 2.587a12.098 12.098 0 0 0-1.701 2.414a12.11 12.11 0 0 0 1.674 2.383zM8.362 4.77L7.255 5.877a2.262 2.262 0 0 0-1.378 1.378L4.77 8.362A3.252 3.252 0 0 1 8.362 4.77m2.86 2.797a3.254 3.254 0 0 1-3.654 3.654l1.06-1.06a2.262 2.262 0 0 0 1.533-1.533zm-9.368 7.287a.5.5 0 0 1-.708-.708l13-13a.5.5 0 0 1 .708.708z"></path>
        </svg>
        <span className="sr-only"></span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props} />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props} />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props} />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props} />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
