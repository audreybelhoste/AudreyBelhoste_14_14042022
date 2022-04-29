const Input = ({ label, type, name, value, handleInputChange }) => {

    return (
        <label>
            {label}
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleInputChange}
            />
        </label>
    );
};

export default Input