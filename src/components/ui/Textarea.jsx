export default function Textarea({
  label,
  name,
  placeholder,
  register,
  error,
  required = false,
  rows = 4,
  className = '',
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-text-on-light mb-1">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        {...register(name, {required: required ? `${label || name} is required` : false})}
        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none ${
          error ? 'border-accent' : 'border-border-line'
        }`}
      />
      {error && <p className="mt-1 text-sm text-accent">{error.message}</p>}
    </div>
  )
}
