/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            primary: '#6366f1',
            neutral: {
              50: '#fafafa',
              100: '#f4f4f5',
              200: '#e4e4e7',
              300: '#d4d4d8',
              400: '#a1a1aa',
              500: '#71717a',
              600: '#52525b',
              700: '#3f3f46',
              800: '#27272a',
              900: '#18181b',
              950: '#09090b'
            },
            danger: {
              500: '#e11d48'
            },
            success: {
              500: '#10b981'
            },
            warning: {
              500: '#f97316'
            },
            info: {
              500: '#0ea5e9'
            },
            text: {
              regular: {
                200: '#e4e4e7'
              },
              important: {
                50: '#fafafa'
              }
            }
          }
        }
      },
      plugins: [],
    }
