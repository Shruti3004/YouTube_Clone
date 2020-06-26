import React,{useState} from 'react'

function SearchBar({onFormSubmit}) {
    const [input, setInput] = useState('');
    const handleSubmit = (e) => {
        onFormSubmit(input);
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group p-5">
                <input className="form-control" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search"/>
            </div>

        </form>
    )
}

export default SearchBar
