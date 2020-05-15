interface ProviderState<Values extends object> {
  cachedValues: { [key in keyof Values]?: Values[key] }
  errors: { [key in keyof Values]?: string }
  touched: { [key in keyof Values]?: true }
  visible: { [key in keyof Values]?: true }
}

interface FormContext<Values extends object> extends ProviderState<Values> {
  values: Values
  setValue: <Field extends keyof Values>(name: Field, value: Values[Field]) => void
  register: (name: keyof Values) => void
  unregister: (name: keyof Values) => void
}

type FieldMetaInfo<FieldValue, Values> = {
  validate?: (value: FieldValue, values: Values) => boolean | string
}

interface FormProps<Values> {
  children: React.ReactNode
  values: Values
  setValue: <Field extends keyof Values>(name: Field, value: Values[Field]) => void
}
