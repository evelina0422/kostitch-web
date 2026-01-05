import {motion} from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-accent text-text-on-dark hover:bg-accent-hover focus:ring-accent',
    secondary: 'bg-beige text-text-on-light hover:bg-border-line focus:ring-border-line',
    outline: 'border-2 border-accent text-accent hover:bg-accent/10 focus:ring-accent',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{scale: disabled ? 1 : 1.02}}
      whileTap={{scale: disabled ? 1 : 0.98}}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  )
}
