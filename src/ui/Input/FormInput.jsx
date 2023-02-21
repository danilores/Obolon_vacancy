const FormInput = ({ title = 'untitled', type = 'txt', required = false, value, setValue, children = null }) => {
    return (
      <div className="input-container">
        <label>{title}</label>
        <input value={value} onChange={e => setValue(e.target.value)} type={type} required={required} />
        {children}
      </div>
    )
}

export default FormInput;