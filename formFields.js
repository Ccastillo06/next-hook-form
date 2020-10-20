export default [
  {
    type: 'text',
    name: 'name',
    label: "What's your name?",
    placeholder: 'Duck',
    config: {
      required: true,
      minLength: 2
    },
    errors: {
      required: 'This field is required',
      minLength: 'La longitud mínima de este campo es de dos caracteres'
    }
  },
  {
    type: 'text',
    name: 'surname',
    label: 'And your surname?',
    placeholder: 'McRubber',
    config: {
      required: true,
      minLength: 2
    },
    errors: {
      required: 'This field is required',
      minLength: 'This field cant have less than 2 characters'
    }
  },
  {
    type: 'number',
    name: 'age',
    label: 'How old are you?',
    placeholder: '9999',
    config: {
      required: true,
      min: 0
    },
    errors: {
      required: 'This field is required',
      min: "We think you can't have less than 0 years 🤔"
    }
  },
  {
    type: 'date',
    name: 'birthdate',
    label: 'When were you born?',
    config: {
      required: true,
      max: new Date().toJSON().split('T')[0]
    },
    errors: {
      required: 'This field is required',
      max: 'Are you really from the future?'
    }
  },
  {
    type: 'color',
    name: 'color',
    label: 'Whats your favorite color?',
    defaultValue: '#CBD5E0',
    config: {},
    errors: {}
  },
  {
    type: 'file',
    name: 'avatar',
    label: 'Upload an avatar',
    config: {},
    errors: {}
  },
  {
    type: 'checkbox',
    label: 'Techs you know',
    name: 'tech',
    options: [
      {
        name: 'HTML',
        value: 'tech-html'
      },
      {
        name: 'CSS',
        value: 'tech-css'
      },
      {
        name: 'JavaScript',
        value: 'tech-js'
      }
    ],
    config: {
      required: true
    },
    errors: {
      required: 'This field is required'
    }
  },
  {
    type: 'radio',
    label: 'Which one do you prefer?',
    name: 'pokemon',
    options: [
      {
        name: 'Bulbasur',
        value: 'bulbasur'
      },
      {
        name: 'Charmander',
        value: 'charmander'
      },
      {
        name: 'Squirtle',
        value: 'squirtle'
      }
    ],
    config: {
      required: true
    },
    errors: {
      required: 'This field is required'
    }
  },
  {
    type: 'submit',
    label: 'Send my data'
  }
]
