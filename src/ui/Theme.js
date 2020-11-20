import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const arcBlue = "#0B72B9"
const arcOrange= "#FFBA60"
const theme = createMuiTheme({
    palette: {
      primary: {
        main: `${arcBlue}`
      },
      secondary: {
        main: `${arcOrange}`,
      },
      common:{
          arcBlue: "#0B72B9",
          arcOrange: "#FFBA60"
      }
    },
    typography: {
        h4:{
            fontWeight: 200
        },
        tab: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize : "1rem",
        }

    }
  });

  export default theme