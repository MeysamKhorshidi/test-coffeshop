/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      colors : {
        "brown" : {
          100: "#ECE0D1",
          300:"#9CA3AF",
          600:"#967259",
          900:"#634832"
        }
      },
      boxShadow: {
        "normal" : "0px 1px 10px rgba(0,0,0,0.05)"
        
      },
      borderRadius:{
        "4xl":  "2rem"
      },
      fontFamily: {
        "Dana" : "Dana",
        "DanaMedium" : "Dana Medium",
        "DanaDemiBold" : "Dana DemiBold",
        "MorabbaMedium" : "Morabba Medium",
        "MorabbaLight" : "Morabba Light",
        "MorabbaBold" : "Morabba Bold",
      },
      letterSpacing: {
        "tightest" : "-0.065em"
      },
      spacing: {
        "30" :" 7.5rem"
      }
    },
  },
  plugins: [
    function ({addVariant}){
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover')
    }
  ],
}
