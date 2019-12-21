import React, {Component} from 'react';
import './Form.css'

class FormBuilder extends Component {
    constructor() {
        super();
        this.state = {
            errors: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        this.setState({errors: ''})
        e.preventDefault();
        const formData = new FormData(e.target)
        const jsonData = {};
        for (let [key, value] of formData.entries()) {
            jsonData[key] = value;
            let field = this.props.formData.find( obj => {
                return obj.name === key
            })
            // to do, clean up form structure to give consistent data. Add checks here for "required", "age limits", "guardian need if checkbox ticked", etc
        }

        console.log(jsonData)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <p>{this.state.errors}</p>

                {this.props.formData.map((f) => { 
                    
                    switch (f.type) {
                        case "submit": 
                            return <button key={f.name} type='submit'>
                                {f.label}
                            </button>
                        
                        case "select":
                            return <label>
                                {f.label}
                                <select name={f.name} required defaultValue="default">
                                    <option value='default' disabled >Please select</option>
                                    {f.options.map((opt) => {
                                        return <option key={opt} value={opt.toLowerCase()}>{opt}</option>
                                    })}                        
                                </select>
                            </label>
                        
                        default: 
                            
                            if (f.options) {
                                return <fieldset name={f.name} key={f.name}>
                                    <legend>{f.label}</legend>
                                        {f.options.map((opt) => {
                                            return <label>
                                                {opt}
                                                <input key={opt} type={f.type} name={opt.toLowerCase()} />
                                            </label>
                                        })}
                                </fieldset>

                            
                            } else {                             
                                return <label key={f.name}>
                                    {f.label}
                                    
                                    <input type={f.type} name={f.name} pattern={f.pattern ? f.pattern : ".*" } ></input>
                                </label>
                            }

                    }


                })}
            </form>
        )
    }
}

export default FormBuilder