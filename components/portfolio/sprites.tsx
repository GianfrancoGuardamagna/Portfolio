type SpriteProps = {
  className?: string
  color?: string
}

// Pixel-art sprites drawn on a 16x16 grid using <rect> blocks.
// crispEdges keeps them sharp/pixelated at any scale.

export function ShipSprite({ className, color = '#00ff9f' }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
      fill={color}
    >
      <rect x="7" y="1" width="2" height="2" />
      <rect x="6" y="3" width="4" height="2" />
      <rect x="5" y="5" width="6" height="2" />
      <rect x="2" y="7" width="12" height="3" />
      <rect x="1" y="10" width="3" height="2" />
      <rect x="12" y="10" width="3" height="2" />
      <rect x="6" y="10" width="4" height="2" />
      <rect x="5" y="12" width="2" height="2" fill="#ff3e6c" />
      <rect x="9" y="12" width="2" height="2" fill="#ff3e6c" />
    </svg>
  )
}

export function AlienSprite({ className, color = '#ff3e6c' }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
      fill={color}
    >
      <rect x="3" y="2" width="2" height="2" />
      <rect x="11" y="2" width="2" height="2" />
      <rect x="5" y="4" width="6" height="2" />
      <rect x="3" y="6" width="10" height="2" />
      <rect x="2" y="8" width="12" height="2" />
      <rect x="5" y="6" width="2" height="2" fill="#0a0a0f" />
      <rect x="9" y="6" width="2" height="2" fill="#0a0a0f" />
      <rect x="2" y="10" width="2" height="2" />
      <rect x="6" y="10" width="4" height="2" />
      <rect x="12" y="10" width="2" height="2" />
      <rect x="3" y="12" width="2" height="2" />
      <rect x="11" y="12" width="2" height="2" />
    </svg>
  )
}

export function StarCluster({ className, color = '#ffe566' }: SpriteProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
      fill={color}
    >
      <rect x="3" y="2" width="2" height="2" />
      <rect x="10" y="4" width="2" height="2" />
      <rect x="6" y="7" width="2" height="2" />
      <rect x="12" y="9" width="2" height="2" />
      <rect x="2" y="10" width="2" height="2" />
      <rect x="8" y="12" width="2" height="2" />
    </svg>
  )
}
