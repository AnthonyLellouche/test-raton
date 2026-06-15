import './Avatar.css'

type AvatarSize = 'sm' | 'md' | 'lg'
type AvatarColor = 'blue' | 'green' | 'pink' | 'red' | 'orange' | 'violet'
type AvatarContent = 'letters' | 'icon' | 'image'

interface AvatarProps {
  size?: AvatarSize
  color?: AvatarColor
  content?: AvatarContent
  initials?: string
  src?: string
  alt?: string
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="avatar-icon-svg">
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" fill="currentColor" />
    </svg>
  )
}

export function Avatar({
  size = 'md',
  color = 'blue',
  content = 'letters',
  initials = 'AB',
  src,
  alt = '',
}: AvatarProps) {
  return (
    <div className={`avatar avatar--${size} avatar--${color}`}>
      {content === 'image' && src ? (
        <img src={src} alt={alt} className="avatar-img" />
      ) : content === 'icon' ? (
        <UserIcon />
      ) : (
        <span className="avatar-initials">
          {initials.slice(0, 2).toUpperCase()}
        </span>
      )}
    </div>
  )
}

interface AvatarGroupProps {
  avatars: Pick<AvatarProps, 'color' | 'initials' | 'src' | 'content'>[]
  size?: AvatarSize
}

export function AvatarGroup({ avatars, size = 'md' }: AvatarGroupProps) {
  return (
    <div className={`avatar-group avatar-group--${size}`}>
      {avatars.map((props, i) => (
        <Avatar key={i} size={size} {...props} />
      ))}
    </div>
  )
}
