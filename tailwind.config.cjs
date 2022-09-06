/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      'gray-one': '#212529',
      'gray-two': '#343A40',
      'gray-third': '#495057',
      'gray-fourth': '#868E96',
      'gray-fifth': '#ADB5BD',
      'gray-sixth': '#CED4DA',
      'gray-seventh': '#DEE2E6',
      'gray-eight': '#E9ECEF',
      'gray-ninth': '#F8F9FA',
      'red-negative': '#E03131', //situações de cancelado, erros e tudo que for negativo
      'orange-pending': '#F59F00', //tudo que estiver pendente de algum resultado, usar essa cor
      'green-approved': '#82C91E' //tudo que for aprovado ou graficos positivos
    },
    extend: {},
  },
  plugins: [],
}
