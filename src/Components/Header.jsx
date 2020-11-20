import React, {useState} from 'react';
import {Link,} from 'react-router-dom'


import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import {makeStyles} from "@material-ui/styles"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from "@material-ui/core/Button"

let pelicanLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAABd1BMVEU+BAIREiTEABT///+ZmZk9AAA/BAA2AAA5AAANEyU2CA4zAADeOgzZJw36/Ls6BADQMxX/igAwAAD/lgDUQxUrAACTk5P/9Jj/jwDNKBT/mgA0BAD77I5mZmb/oQBqAgr/pwDrpBaNiIglAAL/fgBNBAXmUAtaBAb/zQD69KthYWsnKDZBQUxubm64ARKwARHW1ta2traPAw2LIQsAABvr6a/yZgb/wwCvWwFLGAEAABVDExBgR0abAw7p6emCAwtSNDJkUlHIyMjJwZCbUQP73Hh2Z2fjhgHkdgCZIghbJgOSaQIAAACzNxKUgmBzV0Ldz4K1p3yATAtNIxtVFQLXqQByOgH8uDXFcwN2IwqNdEpoPgOCcFv8wlMZAABpKAPBsXHz4Zapfw7IlwR1VTTSiwClZAOMQwPQaAKmSQK6exGehU54MQLPVQT82lXx1aHJLCuMajHlxGf/73liNx+5jUOQaVLaYk7ioXyANSvnj3HevkW6VkeBLwfFAAAXh0lEQVR4nO2diUMbR7LGB5ienn2NkWkYgTgkmEEW6AAJCYQkThshI3MYhDE2hx07NrZj53CS3WT3/fGvqnsuEZI9XiwJdirGgMAwP1XVV9XVPYqiBBZYYIEFFlhggQUWWGCBBRZYYIEFFlhggQUWWGCB/RcY0dt9BV/GSOVn3u5r+CJGz6p12u6L+BJmLVTfWO2+iC9geqOvWjy+hS4zDvqqE5O3z2VE6wOwiUvW7gv5s43t9fV9NTExSUm7r+TPNcIWBNitcxk96+vrO3sDLjNulcuIBQ5bsA7BZce3qv/ADOs7Y9bkxMSJ0e6L+RONVPrQYQp7Cy4jtycWifEAwPapopdQPm5PkTYwEB9gB8xuVSzyfQxEEYH87UT01pQyhlwYiGD0eCIard8OXeT7oPR9e4aCLiOlaHTiVnTCxMDK3HcAXJUKfM4no9G3t6D50NmB5CIK3VoHl1m1aPTmqwcxGgsOF2G5Dcgt4yQard3wCQFhRLir7wzbQ67mtnSUxehI7UaHIuHannDXQgMdRJdXVQRjmwB2c/We6EblQGD1HVAUd1pZzapb9GaDEZ2z/QeCqu9Bg4u6vL7ao6qmA2Zxqt80NqCi+7az+h7sW+guYmz19GTDNtjIyMDJ5nFdMwx2YzwHVIZLBVgGVmLCWK6nBxwmcowvjQyAjQwP15Y2P2qWwTq+DSEUItClWjhocOEtamytAlcuLMFA7pFsWFr/w6XLI85ZBwemzomTV0i1bzG8VoDdygJWzypwqVjH9BeXm0u1msSSNvXu/QvN4B0Zl9Ty+2qfGOgCTec2Vs+qqt4Pq9h5QC/CDIsdfbxcqj2UbFNT8Ofd+4+k0xoSQq0zP5V87gkzGupqjzQ1vJpTVd/SmVDGDeXo49JDBLPtU7x9ENcYpXsLXgQKKk1nfN3M9jiWU1dXpSg2GYFItawX799JrnuznQQGQWhjHexzIReQbpafCrhyyCa04xrTmUVfXL5bvNM929Ir/yODILQVY2GvwjGv0AfrbgTaXFkpHphiodDoaCj0m58DcGvd3bOj7YC4xiizvbUgRBADsLGVAypIqPsul6AETTSFw+ZX5tdicY0y2uy/0fnu7rnOANMNB2sPCzFhEIACJ6uGr/hMVLFlQRLvBot0z63kY3HGPbrRlQ4B0y0XS2GgApamZj0INZe772MDqbcdpoRigkzY3e18wiFDsJX2gxHecHLLACxGt5zQWwV3mRsVnVaWcw5XFlEhw0QZ4CsuF1hv3pZKBJtvOxivHNhYDHJL51uud6ASh5ehudU31Gwu6+PaotAKy87J5hJgg88csLn2g+mWXbj2CK5J6Lon7cBlVnjpWNddF4o4hEDEVniDavD9az6uwWd2LI7Odnev/UYuW2nE0YwDgQVL4x4/1xbl9eElrm84ThQpZzLhVSkgWrcPLG53IyHIvFg7wZhyYK8gcUCD2w2rfq4NZlwOT11Spnopp4a3ZGmDYoZdFZv3uAaduQ6qZaJ9YMTuChf2DV2hvEQUrvq5lqmxNDz1ntENKYvZMFgua7MDGHYfoYQNBly7NpgQy/ZhsYrUQihchPD6m0NKmE83wuu0VOv/dASrx4aJhToHsu9QQaFGFdFwYOU5zBVFaDy629XdE7FpIucYhJc+TE6e6oS41w2yoWtLl8RaF93HVctmsV9UNzAWVxyHedrRxjJGZOlaOIMo1PnbSbBDqvCsw7VFcCpKibZsNlVnJwxXe6Tsg97kXTC3Ps+2T+3Zqx+FFjIFoxC5Jj8YCt2Q2meuyyJFCHS0nNNGU38PgphzdB/AYg6Xk2KglO0TRfZqerq6b4Fb+OWkbXWq0AZc7XIFugro7A1o8TUc6RjcsCq+jjFnroK2IBj4VY/ZGTa4baeY0I52rcbYo+npJ1C6CPngcE3ivglhHLoqgGnsHTxYsO1gb59YFjVXnWKWExnmAxtsSjHs7dsl9ghWBLUgb1yuD/YAhnDuzTz6Zsa+Evb5m58MqS33w+FV0VghmOID0+yfjQ1V21pgAQZcRy7XCXe4JNXMWPX86cSIGBwODE8t7iZ0hyu7KrnEfIDmba5dZ3ci3s6+A8GmK0Svu/4Ss04ILQOakZnq+cREVNgI2PBi792EpWftZjEnE8wewbFtJxL9Kda2voNeAfuA/oL1S4Wd9X0FVGg218Cn3t48o9zhUu87XGoD/pFhc7mNIlax9s0F6CGAlYh+bOsG6iPTDhb4+ldPJ1wudNdUb++gBsuU+24THHa4MBJDcScSnVYj1MYqBil/6gc7NMT+8kLfHh4jmph8WyfHNYE1sNh7bxfW/IbqcnmGAx03xRxNDCXa2trrdQCr6wLsTR3KNFOgFZlZPylKb9V0XkPhuNfbuw3U3PRzQZqpdt+hsF07EpnNgmLf3b5FJikB2KmOOfYBuirC8ThA9c2mxJqYLDFrU3LlgUtf93GF1axoO8KKFPvBZk3EfqqN8w5CAOyQAtghngFAd0FyndhcJ8yonxxL2cA+SSSYoEGsVUkohveuw446IxJhLSbASL3O7WV01dOMS8O6HBipjSzaXPpyj73FooazPbbYi/WznnCkw5l4i0hsGxYsKx9NF6cfMbyRQ+dYuYouVk0zDLGh53ARhg4TWDl7moOrUPw5zNH6vDvKb2ckEqP+ZLpYnH6FeSHCsOpVrk3DqNdGBoahKvdui35dOAzCT0xO7USTA1Oet7kGNWfa0c7qTA1o7YvT06/gakQYzjyNPj0XXBMnJeNiU+xRQv2S6xCiqyIQ0V02l9kQXDTmOMxdsYjq3B4uYpw+gfyafnKKAxxcR49NnI/JFmry2LLdhVyDUugITuRy0CH2OOlljxRD2t2rXYfoE9szeGOl14hVfMWxgcXTNtXqTBWUELjecoMtyS1liMO7mhQ6HL6tijCUXOFlexkAiug4zOk6hHRov/Orv6TpFvaI4K46uovj4agZ0HmBBVFoHddGxIYy6HxvXHIRkgGpV1cd2TArtrBzp/sFrXccNtrdFukgvC6icPoR7qjocpwzcy66+JO6ZZRkFA73Q13udQoTWQ9DJLp1zHEXCsfd3xTntbZIB9NfCazXJU7cGbCIwokaJJdmR2E/hGFvb8LRb2LvR8ghR8MZ2LC1uy6Y6zDsf1u+fUSsw6LIrkM8YEP5gQ/r0jCMTQfrXhOXQsazbj+14R7hoAmPy5VEofUt7jpgTSKj8BVj7jYfYk2AtwDrUkah9BbEoce1Pu5whdddrlA84oFp7qNzLdd6wv2iYeBQccbGurQMJrH6p+5JLEcPJVjG5try3zvgzhKh6XAyrA0Oo5ojGtjI437YzLnAegNBaDnewuMniLbtP1ajb6gyvzZ8jxorHpc7JlWM2VYvnfmpFA2NQSOPWmivkv1BKLhEID7zn4UllfH7qPMQhuLzUDwOwhHzOcwZdbTBYYYIw+KpZWuhjMHoyQvLIr/B2m4+wAYpJo6rOMUrBG0FJJiXYa5yCElsqcMk12sCzyxuNo9VhbuwbumbNhZyCTXcjV85ukyWzVU5GJUXHwMw3zaEr5kSNayVDuOHTnbpFlbkKk41PkCXQZcGRpwjeRJrO86vHFrTyLia87gUPpsIhWI+h3nKgQP7VtYwKvILl8msYa9Pom91yyp9GHGwpGTsPjOEt0KUaW63B5EY9nEBkxbis57DvEDEtr6VTQfRnwh/QUSeLYiucPKtZlj1kxH7BGX/1OK9wd38EfS/lFLGaSI2N+eBLQNYxXXj6HwkpPuVw+m75ESglV0iLr2mXxnQdxxId73VLB/W1D1w1uB2/hlaPr+9HbkD5j3xZDxjrymF0dlInPsy7Jl75h7n9W5bT7787S46DqOeWFC8IAxBND4wXHC5510dzRB2x7GEv+0wt3xXGe+OxLiXYe5qRSrHmnAYYbzx1y9+vtR4LcaHeJPeDJTjumW9OIk6yWWfdZ1CtjuexTwSsjFuNryLxI30fMJzmPuNIVxf4s4RoUZl70Hf37703ROEotAbuNEAXJuGoZ1E/e7qd0+ELi4u9l71F1bncb/DEGzOS7Ejr+cQyqHrhnGGO8C/RL60iIgJ/alO94Frsg4d/IjA8rjcg65TNtdsyFefQToyDX9UQWWOuN2UL8EwEOcvnAPS30W6vzQYbsgWCd5n/rSmGCXnMLmPpxkrstZUn8n4eKZJB9icd6hj22s5MBAj3mbh991fHAxT7IkBDjuvUePFiMPVP+VKxr1799wMi6wpTRggHRk8o0L8dczhyntpBKuVyPfeAelfIy0Ae4Ipxg+Gatw4RtFwTsdjFC42a+GduZgWCvlPwoLDzGXoLyve+V+2JiVxN858xa078nfvxgMDe+HWgLGFp0fG8cgwKMQ9xxYXRQA2ySH4bHZ2xfUEZNh4GFJMX5ZjekkWh2KXj/teYmA0Fvn+O/vYN54zCLUOjD7eNOrDU5+ESS47DiEi7zRbJO5cE0riOHYduqmann+g42q6PQeU8m/4ygMP9ok89t0SMC5z7GdK372PQ7/EGCNH+d1BtyRf8ZiPC2sYtB0NQqg8efk7v4JEfsE7eqh700dLwMTZgBLR9JLmPuc65QZ5tn33ahiirWge1/o4gq0T0hDDX+X6W3Ho/3734IwakorgWq4lYGJD9vCaZxvg4rHtSKQJay426nFhIALYhk6W7fmvTvFcSPPP0n/9a8OholbpVZ20BsxOMvEhnv4f9d8AoDOmx2PzK1ibZudWYpqHpRBlXIKZVN+wd5zDWxvrlUqjmYxQ59AVefQEm4EWgfFX08XpEt7UMBqPrc2vzM/HYnHNwwuF8H4bw4Dsa7rlQQQigqmKvvWbDfUrBg1iqSQOjvz4davAdDJdLL62QJOxm7NtdmU+pl1384bvWjccsC224cMyK9dxHb6efm09+nZsZma/VWDYexSLp9yH5dDNx669M0WYZoPBKlOt+MC2rlEQ0WhP/8N4PjMzM9Q6MFIqFouTc5Jlbm5udtYHNzefiIeuhXPATHDSusu13CxDupB4wqa//XFmpvF8CKx1YAp/VCxOINVaXKhHKJ5YW5nzwa3EEs0bWsQBM0Usqk6Omev+wRzhxunrJ3gQkA6hr563GozwJwg252oetINAF5v3ua7pgBDBNBJgmbCIRScMm5Se0FdFUSPhI8AaGnopwFomHgpOB4qT3SujV35VaBQK2YoD5z8OSvBIG/aJ0FCpZsbRem/CLQBx+PXtj+gh8Jiw50NjYy0Fg2AcXrn2F0FoJmLzc+60wr7ucVB0KfemcyDMXFacbUBm1bF8sJ9/xAh8zlywb8bAWgpG6Hvye78IwlIs6/2LlY1xPME9Ll0mqCo6sZsLg0EZfoQz5ZcyADk8ODaETI9bDgbP8h/9HjER9GUZWc5sEDsWoa/fUKiTXJQ8EhvzP3NFsx4LNz3Gu83GHKu2rkD/KyZmuJ4wYhQu67KnWl53Xh+BMkgr3BGFMvwYXzFHxt+Q3gRWrXcS2BWXESUDRERfXm44La/OrcNHrFREqpmZx8+pou8DFKAM/aQjWBWpziej0eNOApMu84RRSP26r5HXTyECX1s//CiodHFA5PmQdNI3DMCq1fOn4thm9EVHgV2Zu5P1jfWmmsWgbf/2s7WHdbgk92P4S4ASb5wwPOstTqMOjHQUmEas+Yh/p8T2FSFMjjbYP0DaX1qiAturFuMzegtdZRGGUCdiujzQQWAg4crZg1++j8xe2fLTeelV8RDLF3sMrmoCIwTE/fNPGH+Aj0O9Tbkj1SlgOGo/s8e3f//VN9tmVD99Aks5GwwrliVaCxuscf50okYxr44pE0T9w/DfVEeAEZ3zswfuoHPPWRsDLXl0aEDzXB36WpxnlmDfoF7Ib9JxSHmyg9PyTQZg/cP1dziEvZPoADDK9g/6PCrOnOaCPnpdnP5g/YAt09fSY6gS1vMxF4xtjgyMLO3gK5QsGQynry/yd+ydtXaD0UPf68ZYzsvBUO3wNSzgit8+xoWj6NY9MLzXRR6bMk4GhgcuS7Xh/v6HnC7eAyKtU8D40tMZOb7l8gAE0Sks8gXVGIggcZYhEqz6s7UZHRiJ2mDoq4f9Yp83TgWRFekYsIGBzwf7VLy+hci3+iHhb4vYXLx8TjhzliEA9vl8InoizuGP2GDD3vQ/xsRuIV/pXonh19oPNjLw8EJGoM7Z6Qdw1ZuLb4awCFuw9pK9hQDjNcgoAMNCJcD0ur1fg0h5jhPkRCjEZa/dCWA1fJFwXGG9nQSsp9XHAIa1SrwMGoBVq6cSDNQPwFDWj3SdcZoXp0JicTFm5XNrCeqShEbbDjYgwEjJpgJfCTCoVTrlCv3hPIpVSoABEYL19w+XjKPtXWsbnLVr0VDkTmQ+EaIuFixd42tznQFmTAqqhceggQiGRbh0+IHRS0ypjzZYf/876704EoJHXS7ugqe2KUSdYvigQnF3etlesGEBdl6FFVbj4uWQDVY9r41EBwx2OQIpJcEe9iNY3t58ElkVmcPe0h0oj45qcshgDy07AUw0ggZ/CTH4+ALjT5ywAjBMKRsMXLVr5Z0N0Fh8PqG4q3LcE0j4oLpX1hJKW8GGbbChr4ZecliHVM/fXGzKQwU1aJQuMaU+Mso1JuLPeCaoItsxPeSLPyXun57PzSdwvNzOjgrBHkownMkYb6OQcxeiSd8sWUxhl6JTOsoP7loCjIe2IytrcYP5lcKb4InRa3z06piv9eaBjX1+esLF/UcAhg2tOJjCLiH+RFZtG3fBVxFg5d4mLVDFmuIvhsPydgI55oJhkapZF0vYJF2gpPdDreI6dbSiF09Pbcd8h4iAILHmj7+1BP/DvZuWmg9seKD2YgkzasnaxMM6ce3Z7q6RtzUwooW0P4g/3JHqGCg0DwyPH4kTSA81/h7jbxBCUIrgnTnvtaYEVMg/85/tjKS6YgDWL8HsAy3vLrnOtp2zEnmev7udgKRytzJGlSui3oFQaC4YVt+ppY8EX/ANwOxbChIhvampSFyJv1BnUikI1i/B3kFWfbqQ62e6jVS7+Tj3NbWG5ofqzPjzmQv2CbPKnlDR/N18nHnxNzqqXBF1raOh0BwwDlLhginUr3/KVVHveCg0H5h7N6Zr14h6Z8efzzwwPHLv211G/fNDYfxdvwPfmeaA6fmYwd37bkKjWmLNt/zoWFH/fXPAFPd1LHH5sfabpqKd1/gfGYBNPXT/x2hC/5pFXeuQpvbfNQ8M469p+QuVyriZUGh8aQrAQrJT91wFy9+bpBTXmPDYRXNT0XGd+n9i6LFPTfGnGe1d0/9JBiuUKU/Ub0ZT8S8ZgEWkqCduQfz5jC/1YlL98XnMm2j6s5vT/v1bptHb5qrAAgsssMACCyywwAILLLDAAgsssMACCyywwAILLLDAAgsssMACCyywwAL7c0y7laZoyv/cUlP+cktN6bqlFoDdNPtDsEKh6TP77WaYDZaGt5T9kPO+q5xMllNp91vTha5UMvWXFl7c/8ckWCGZLJTD5XK5q1DeMeGvcgE+yIFl1J3yzk5XYWcnld3ZSZvpf/LzOsZsj6XC5ZSZCZs7ZjhjqqlwOJNW09n0zk5yNRnOZlPpbDZ9Pw3vWwxWuObDq/lRgIwRf5q+YIOVw13JTKacySR3dsxCuGsHPwIaM6Om7u8kc/fTO6nVbKG1KVZIpjOFVCHVlS6nCl1JM50upMqpLhO+Ao/CtaQgWcJpuHAzDc5ImsmUmUyqZT8YxKKZDCeTmXShbP5FLZfhx0D4FbKmms7tpHP3y2UAS7VYO1IZM5ODK8klM8kcpIGaQYb7yR0THsiEVTMNIZaGD81MJpXLJM1UOA3PhR+sq6BmUuFCKqWCQIB1ASQ8FMbwy2ZymXAug6FYbi1YGb2AQGYSnuBkOAyfIyZcP35FBWb4uhpOCX/BN4F7TPvfumAZ8K6ZwbdycgfYU6lCMmwWysl0IZwslzPhVGYn02rpSHUVIPzgUtIyILsgI8DShXQZNRrEPJ1Ml7tS4iP4xjJ+XzOYrFLwVxnSEGRRPFQWqdkl3pXx4RZz/StWaHrn2X9n53GTLQC7afZ/1uRie1+GOxMAAAAASUVORK5CYII="

const useStyles = makeStyles(theme =>({
  ToolBarMargin: {
    ...theme.mixins.toolBar,
    marginBottom : "3em"
  },
  logo: {
    height: "9em"
  },
  logoConatainer:{ 
    padding: 0,

  },
  tabContainer: { marginLeft: "auto"
  },
  tab:{
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "65px"
  },
  button: {
    marginRight: "auto",
    borderRadius : "50px",
    fontFamily : "pacifico",
    fontSize : "1.20rem",
    marginRight : "100px",
    marginLeft: "50px",
    textTransform : "none",
    height : "65px",
    color : "white",
    marginBottom :"1em",
    marginTop : "1px",
    // justify: "center",

  }
}))
const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, value) => {
    setValue(value) 
  }


  return (
    <> 
     <AppBar position='static' color="primary"> 
     <ToolBar disableGutters>
       <Typography variant="h4" color="secondary">
          <header className="App-header">
      <Button component ={Link} to="/" className={classes.logoConatainer} ><img src={"http://www.pelicanpublishers.com/images/pelican-publishers-logo.png"} className={classes.logo} alt="logo" />
      </Button>
      
     
       {/* <img src={"http://www.pelicanpublishers.com/images/pelican-publishers-logo.png"} className={classes.logo} alt="logo" />
     <img src={"http://www.pelicanpublishers.com/images/pelican-publishers-logo.png"} className={classes.logo} alt="logo" />  */}
      <Button variant="contained" color="secondary" className={classes.button}>
        Get Published
      </Button>
       <Tabs value={value} onChange ={handleChange} className={classes.tabContainer}>
        <Tab className={classes.tab} component={Link} to="/" label="Home"/>
        <Tab className={classes.tab} component={Link} to="/authors" label="authors"/>
        <Tab className={classes.tab} component={Link} to="/authors/new" label="Add to Pelican's Authors"/>
        <Tab className={classes.tab} component={Link} to="/publications" label="Pelican Published"/>
        <Tab className={classes.tab} component={Link} to="/new_pub" label="Add to Pelicans Published"/>
        <Tab className={classes.tab} component={Link} to="/genres" label="The Genres"/> 
      </Tabs> 
     
      {/* <h1>Welcome to the World of books</h1>  */}
      {/* <Link className="nav" to="/"> Pelican A reader's Home!</Link> <br></br>
      <Link className="nav" to="/authors">Meet Pelican's Authors!</Link> <br></br>
      <Link className="nav" to="/authors/new">Add to Pelican's Authors!</Link> <br></br>
      <Link className="nav" to="/publications"> Pelican Published!</Link> <br></br>
      <Link className="nav" to="/new_pub"> Add to Pelicans Published!</Link> 
      <Link className="nav" to="/genres"> the genres</Link>  */}
    </header> 
    
         </Typography>
          </ToolBar>
          </AppBar>
          <div className= {classes.toolBarMargin} />
         </>
          )
  
};

export default Header;


