import React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import Label from "../typography/Label"

import UIStateLayer from "./UIStateLayer"
import { cn } from "../../lib/cn"

interface SliderThumbProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb> {
  value: number
  showLabel: boolean
}

const SliderThumb = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Thumb>,
  SliderThumbProps
>(({ value, showLabel }, forwardedRef) => {
  return (
    <SliderPrimitive.Thumb ref={forwardedRef} asChild>
      <div className="group block relative w-px h-px">
        <UIStateLayer className="group/pin left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute rounded-full w-10 h-10 flex justify-center items-center bg-primary overflow-hidden hover:overflow-visible group-focus-visible:overflow-visible group-focus-visible:bg-opacity-[0.12]">
          <div className="relative block w-5 h-5 shadow-elevation1 bg-primary rounded-full">
            {showLabel && (
              <>
                <PinIcon className="absolute -top-[40px] left-1/2 -translate-x-1/2 opacity-0 group-hover/pin:opacity-100 group-focus-visible:opacity-100 text-primary" />
                <Label
                  size="medium"
                  className="absolute opacity-0 group-hover/pin:opacity-100 group-focus-visible:opacity-100 text-onPrimary -top-[34px] left-1/2 -translate-x-1/2"
                >
                  {value}
                </Label>
              </>
            )}
          </div>
        </UIStateLayer>
      </div>
    </SliderPrimitive.Thumb>
  )
})
SliderThumb.displayName = "SliderThumb"

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showLabel?: boolean
  withMarks?: boolean
}

export const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    {
      showLabel = true,
      withMarks = false,
      min = 0,
      max = 100,
      step = 1,
      className,
      ...props
    },
    forwardedRef
  ) => {
    const value = props.value || props.defaultValue

    let totalMarks = 0
    let activeMarkIndex = 0
    let activeMarkRange = {
      start: 0,
      end: 0,
    }

    if (value === undefined)
      throw new Error(
        'You must provide a "value" or "defaultValue" prop for Slider component'
      )

    if (withMarks) {
      totalMarks = (max - min) / step + 1
      if (value.length === 1) {
        activeMarkIndex = (value[0] - min) / step
      } else if (value.length === 2) {
        const [start, end] = value
        activeMarkRange.start = (start - min) / step
        activeMarkRange.end = (end - min) / step
      }
    }

    return (
      <SliderPrimitive.Root
        className={cn(
          "hover:cursor-pointer relative flex items-center select-none touch-none w-[200px] h-5",
          className
        )}
        min={min}
        max={max}
        step={step}
        {...props}
        ref={forwardedRef}
      >
        <SliderPrimitive.Track className="bg-surfaceContainerHighest relative grow rounded-full h-1">
          <SliderPrimitive.Range className="absolute bg-primary rounded-full h-full" />
          {withMarks && (
            <div className="absolute left-0 top-0 w-full flex items-center justify-between">
              {new Array(totalMarks).fill(null).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "w-1 h-1 bg-opacity-[0.38] rounded-full cursor-pointer",
                    value.length === 1
                      ? i <= activeMarkIndex
                        ? "bg-onPrimary"
                        : "bg-onSurfaceVariant"
                      : i >= activeMarkRange.start && i <= activeMarkRange.end
                      ? "bg-onPrimary"
                      : "bg-onSurfaceVariant"
                  )}
                />
              ))}
            </div>
          )}
        </SliderPrimitive.Track>
        {value.map((value, i) => (
          <SliderThumb key={i} value={value} showLabel={showLabel} />
        ))}
      </SliderPrimitive.Root>
    )
  }
)
Slider.displayName = "Slider"

const PinIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="34"
    viewBox="0 0 28 34"
    fill="currentColor"
    className={cn(className)}
  >
    <path d="M28 14C28 22 26 24 14 34C2 24 0 21 0 14C0 6 6 0 14 0C21.732 0 28 6 28 14Z" />
  </svg>
)
