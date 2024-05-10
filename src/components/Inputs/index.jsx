export function Input ({id,value, name, onChange}) {
    return (
        <label htmlFor={id}>
            <input value={value} name={name} onChange={onChange} className={id} id={id} type="number"/>
        </label>
    )
}