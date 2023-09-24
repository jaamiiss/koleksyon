type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ( {value, handleChange}: InputProps) => {
    // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event);
    // }
    return (
        <div>
            <input placeholder="text here"  type='text' value={value} onChange={handleChange}/>
        </div>
    )
}