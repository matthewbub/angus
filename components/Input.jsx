import clsx from 'clsx'
import FieldWrapper from './FieldWrapper'
import { baseClassNames } from '../helpers/constants'

/**
 * Input component for form fields.
 *
 * @param {Object} props - The component props.
 * @param {string} [props.type='text'] - The type of the input field.
 * @param {string} props.name - The name attribute for the input field.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {Function} props.register - The register function from a form library to bind the input field.
 * @param {...*} props.rest - Additional props for the input field.
 * @returns {JSX.Element} The rendered Input component.
 */
export default function Input({
  type = 'text',
  name,
  label,
  placeholder,
  register,
  className,
  error,
  defaultValue,
  ...rest
}) {
  return (
    <FieldWrapper
      label={label}
      name={name}
      className={className}
    >
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className={clsx(
          'text-gray-900 placeholder:text-gray-900/50',
          "block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        )}
        defaultValue={defaultValue}
        {...rest}
      />
      <div className='h-3'>
        {error && error.length > 0 && <p className="text-sm text-red-400 leading-none p-0.5">{error}</p>}
      </div>
    </FieldWrapper>
  )
}