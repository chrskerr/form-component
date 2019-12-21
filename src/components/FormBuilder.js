import React, {Component} from 'react';
import './Form.css'

class FormBuilder extends Component {

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const jsonData = {};
        for (let [key, value] of formData.entries()) {
            jsonData[key] = value;
        }

        console.log(jsonData)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.props.formData.map((f) => { 
                    
                    switch (f.type) {
                        case "submit": 
                            return <button key={f.name} type='submit'>
                                {f.label}
                            </button>
                        
                        case "select":
                            return <label key={f.name}>
                                {f.label}
                                <select required>
                                    {f.options.map((opt) => {
                                        return <option key={opt}>{opt}</option>
                                    })}                        
                                </select>
                            </label>
                        
                        default: 
                            return <label key={f.name}>
                                {f.label}
                                {f.options ? 
                                f.options.map((opt) => {
                                    return <label>
                                        {opt}
                                        <input key={opt} type={f.type} name={opt.toLowerCase()} />
                                    </label>
                                })
                                : 
                                <input type={f.type} name={f.name} pattern={f.pattern} required></input>}
                            </label>
                    }


                })}
            </form>
        )
    }
}

export default FormBuilder