import React from 'react';
import './App.css';
import FormBuilder from './components/FormBuilder'

function App() {
  return (
    <div className="App">

      <h3>Form component</h3>

      <FormBuilder formData={form1}/>

    </div>
  );
}

export default App;


// test data
const form1 = [
{
  "label": "Name",
  "name": "name",
  "type": "text",
  "pattern": "^[A-Za-z]*\\s[A-Za-z]*$"
},
{
  "label": "Date of Birth",
  "name": "dob",
  "type": "date",
  "pattern": "required, should be older than 18"
},
{
  "label": "Gender",
  "name": "gender",
  "type": "select",
  "options": ["Male","Female"],
  "required": false
},
{
  "label": "Contact number",
  "name": 'contact',
  "type": "text",
  "required": false,
  "options": ["Mobile", "Home", "Other"]
},
{
  "label": "Required Guardian Consent",
  "name": "guardianNeeded",
  "type": "checkbox",
  "required":  false,
},
{
  "label": "guardian details (name, contact)",
  "name": "guardian",
  "type": "text",
  "action": "if (guardianNeeded) {field required}"
},
{
  "label": "Submit",
  "type": "submit"
}
]