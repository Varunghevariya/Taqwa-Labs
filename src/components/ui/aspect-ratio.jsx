"use client";

import * as React from "react";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

/**
 * AspectRatio component for maintaining consistent aspect ratios
 * @param {Object} props - Component props
 * @param {number} props.ratio - Aspect ratio (width/height)
 */
function AspectRatio({
  ...props
}) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
