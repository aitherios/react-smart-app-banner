export const BaseStyle = {
  smartAppBanner: {
    all: {
      overflow: 'auto',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      alignContent: 'center',
      padding: '2% 1%',
    },
    android: {
      background: '#3d3d3d url(data:image/gif;base64,R0lGODlhCAAIAIABAFVVVf///yH5BAEHAAEALAAAAAAIAAgAAAINRG4XudroGJBRsYcxKAA7)',
      boxShadow: 'inset 0 4px 0 #88b131',
    },
    ios: {
      background: '#f2f2f2',
      boxShadow: '0 1px 1px rgba(0,0,0,.2)',
    },
  },
  closeButton: {
    all: {
      fontSize: '0',
      lineHeight: '0',
      fontFamily: 'serif',
      textShadow: 'none',
      color: 'transparent',
    },
    android: {
      border: '0',
      width: '17px',
      height: '17px',
      marginRight: '7px',
      background: '#1c1e21',
      textShadow: '0 1px 1px #000',
      textDecoration: 'none',
      boxShadow: '0 1px 2px rgba(0,0,0,.8)inset,0 1px 1px rgba(255,255,255,.3)',
      cursor: 'pointer',
      borderRadius: '17px',
    },
    windows: {

    },
    ios: {
      width: '18px',
      height: '18px',
      marginRight: '7px',
    },
  },
  viewButton: {
    all: {
      marginLeft: 'auto',
      fontFamily: "'Helvetica Neue', sans-serif",
      textDecoration: 'none',
    },

    android: {
      textAlign: 'center',
      display: 'block',
      padding: '0 10px',
      background: 'linear-gradient(to bottom,#42b6c9,#39a9bb), #42b6c9',
      textTransform: 'none',
      textShadow: 'none',
      boxShadow: 'none',
      color: '#d1d1d1',
      fontWeight: '400',
      fontSize: '0.9rem',
      lineHeight: '1.6rem',
      padding: '0 1.8rem',
      border: '1px solid #333',
      outline: '1px solid #d1d1d1',
      ':hover': {
        background: '#2ac7e1',
      },
    },

    ios: {
      color: '#0C71FD',
      textTransform: 'uppercase',
      padding: '1rem 1.5rem',
      ':hover': {
        opacity: '0.8',
      }
    },
  },
  icon: {
    all: {
      backgroundColor: '#ffffff',
      backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAYAAAB1h9JkAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wwLEgQGr+B5dQAAIABJREFUeNrtXft/VEWW/97bnaTzIBBQCEICKCjgyEsECSADMurO4JMRZ5xxdHf/r50ZXR0FFN+rOyq4wvhGoqOCKI8EeQghkFfn0X3v/lDfQ1dubqfr9r3VASfn8+lPSNPpW3XqW+dV55xyYI/qATQBmM5XI4Ba/szwMz4Az3XdnOd5nvzOn77+GQAugBoAwwBGADjaZ+KSfI98Zx2fOai9nwTJ91cDqAKQ5fuu9gwHgOO6rqtYApef1T8zCKAPQD+AHgAX+erme4mTk+B3NQCYC6AVQDN/zzqOc9H3/V4AvQCGuABZLnaevw/xdy8AEKERADMAbAfwBoBTZJ5ngScegEcAnAewj89JilzOdRmA1QB28vdUyJo4Gkhq+O8Uf6/VNs4UbsrrANQ6jtPr+/45AB1NTU2nuru7+5IYeDqBv78RwK0AbgBwAcA5AJ8TGL2+7/dzoePSIJk3rIHLFnkEMRIae5BGuBGyfE7cZ1QRLFN8358C4HoAy7u7u+8GcBrA1wCOAchVGig1AJbz1QfgOIAvuAsHLC1eyoIUNKI1a9bgk08+SUqieNocXA2QcYF3iS+hOgKmGcDtADYBaOdrqBJAWQHgTgBnAXwIoJN60jZ5mCBKCCT6HMLUa9I0AOAkX98CaAGwEMAqAB8BOGQLKNMA3Mfd8DGAI5oxJrvDxoK6mjGLwG60CR7XwnN0ieJYlo76evRo6ucWAEsALAbwVkAKxQbKfABbCY4viljWnmVJIuJyuAISxtf0uWdhLmKjjFicQ9i4s5QkRwGsTKfTj+Zyub8DOJGE17OM4sqlLdJLq9u3LDqDC5eh6DwJ4DJB7o8zH1lsv8jnHM2z0F8OgHk0nk9pTNfd9mLflw4ZQ/BzOdoOs7jx8hW0u2ScWXqlC2kIfw7gkzhAWQigjYbRBU6qjpOtpFHp05itp+7NBdxIaDs0x0WtpetYx7hFShP9eUqmIc1Nz2vfIxtBXNeU5qYGv0s8sAFuoiz/L82/cULsEvmePv5eaV66Ac8xQ6nyUTmqZz6AzWSgfPkbWhCq0jQVwB84hjNFbIcMgJmM5dRzAXoogS4xIHWZi5nVgBV0G7dzY7yvSZq0FsOo5XiaaLtN1YJilwB0APgphFcy5iV0CF6M47Im5dQBWEtenQfwQxSgTANwLz2b6QDeA3AHgIcB7LasW6Pq4FoC4ybGcsAJf8+YzsUyXXYvoHZyXPjekM/WkU+zGHRczPdPp1KpH/L5fAeB6U2Ui1+EVnNdj3PsWwB0hRm4xYByH/XnES1KuQfA4wB+y39XWrKIFS8qYgGAxa7rzvc8b5hu+ruUNpUe2wBfp6jvMwBmA1iUz+c3OI5T7fv+CfLzGApHEM4Eg2QLNz4IlB8B3E1JVxIoy/nzoGbs1VBk7yJQHq4gWERcj9CuuI2TagJwzPO8twiSHK4eGuQuPQ4g7ft+C6XMv2kSbkgDvW1XPwwkmwG8RuAuIX/bqRJX0rsds0uFagCsI/J7uTM8bRK9BEuGYMlUSMU0cHJpBo6+A/BnAP/DxbiaQBKkHMf4PxzzUYK8AcBG/pwIkLzOQJxuwJ/m+O4kFsKB4jjOCtolR4r44i4t9d0EyUPBL0yYMmTmkzSuAeB/AXwGe0cFtlXUZwxYOrRnnuIcMxUCyRYNJG5gQ6a49mc1zTIGKGnf95fRCMyWMPBEstRSsiQNFhfqqOApqEPHNykmdTfTvQaB4gbU025KmgWc6wqL89LVzbchgsCn5zZMz2e5bprog7qR0qLT8MF9ATWUFFjm0g2+E8ABAM9o6sUtEXm82skLgCbPRflvzvVOzn2uBZD8MgCS8egk1/fGMKDcygWJcsAnaigJyVJDsfhbgvXPAL7SmHstSpBSgS9HA9BXnHMnebAloc0nIHkdwGGDMYEYOE5MjGJ+PWMQZ8tYlL4E1FArgCcAzAHwAlTC0NA4u/HnBBadhjj3F8iLJ8ibSoAkSGeJiXodEC1QkcjzZQ4ojmRZD2AHJ/Is4yD/6nSGvDhM3qyP6d0cLuPvzxMTLTpQWqGimAMxdm8vwVLHIF0psNRChcqXA3gewP6fqdSIY8/sJ2+Wk1e1hhJfN1wPl/n8AWKiVX9gM9ETl0y9oZkA/kR37C8onNJO0lg6RR6lyLOZJTZUXEmi0wViAy51UAOSy1LTwfIQxiYnz4M6CvgOKrl4YBILRrt7J3n2OHkYRneEuMBx3PgeYqPehYoSZpFsmn8xNbSSFv1+AHsn1z8y7SXvHkUgIEaQbALwagKSxAOA6urqfmKjKQ116nkB4aeiSYDlUahDxtM0yl6FChNPUnn0GdTprqj2T6BSBe6iJDmS1IOGh4d7iY3paUqUpEoqguJLwPIYVK7mKwRJpQ/Bfm70Pfl6N9Qp9UzaJEcSfs4IsdHkQiXd2KguEyAs4r/PQJ1SZiZBkggdhzr5XQYVST1s6Tn9AKa6UCWeWUsPWU7UvwOVlnA97B8k/qvQWqjUhfegQu0rLT0nC6BRvJ4kd7ireTe/AvASCmcHz9PADfOGJsmc7qBNsg/qjOhdbsh5hnGWqJqh3oVK8h1I+Itn0tjaR32q2yy7CM6Hr3KwuBaYngStoXfzGoBv+N5R8vphgzhLOa55tTAhycQfCba100IP2iwCloarGCy26nqSAIl4N4dDvKF28rQ2wWfmgEJtTD7BL/41VLb73hKu8y66zpJWWemE7VpKNinpqKV0dfmeQxtrmAZdL9XnyASCZKPmORaLs1zPNXgxoefmAfhpjK7cj0vrofJZ/2IYZxGwPEJbxuYiNEKdhs4hMxugwuIjfA2h0CnB4f/fQi+tWvvsZagzkB+hTlizFZQk44FE6HWoJKj1tF+SAIqX5uSTSJJuhcq3fT6CzRMEy8tItp3FVHoEN0MFFrNc5MNQZQmX+bzgMx+BqsvZTwlTTakzDaoPyQ30OFJ0+7+DKqAatAiS12AWqByACmr+Diq3pSPm8wcBjCSlemoA3ANVaRb1gE/AsoPeUBKSpZXuYgvUeYUYexcM56qXUkjnpUGoDPpj2pyboaopN0LlfXxHO6ErYcP1VUQLpp3iWtwDlSEYZ/N5onr8BAy29RzMP8r8+0RsllQqtSCfz6+lajlK0J21ZJAOodBWYj/BuQIqlfF7qATqrgkAidA/0un0jblcbj1jLbFsFAmlxyk2nwsVHXwn5oL0QJ2QBr0ht4T7CrqE2/P5/Daqgr9CtXQ4XSGvZYjA3MU5pAmYuwMeiBsBJHfFAAkAeOxUsAzxcnBVn72YIHGhjrUPIZnMNN11lqDclYV2HCcoEtMANgD4PXXz01D1wpVo7FNY1TVr9F/PcoH3EMBPQR1dmLraazXDNe7ZzRmuzeYo8aCurjGC0BeglAuWZXQxP0yQ7wKWKRid/OT6/qhhzgbwRxqqe6DKHi5PhN9apCNTJ4C/UR3/CsA2GsRA8VLStQS+iXdjSh9yjZaZ/sGMGTOCEsWPE3XMoFBSkXTjPR0sD3E36AGwxRTtJ6lmOnD1UjvHWA9VyDaDbniw9ngtgI0NDQ2vIdk0jCEUSkHKLjIrpnrccX7Kv++gu/m1BebqKQrTCJYpDHzdRWv+DQaY8rATZk8qhO9S0r0AlXX2ewBLA650Gw3X1/r6+r6zMJ+vuVZ3lDm3K8bscIhLJGh0NIkhdcgNUMXie2Gv1yvI4Ke5EzYzblELlaH+bcjnk6IkQ/j63+8D8HfGYRxtw60ikI5Ymo/HtboNo2ud5afMNczTHAbgOQD+g1FG6WIkhUnStWgO/z+rRSenoVAsrv+djV09RGkyj8/ohDoiaID5GZWjzWkEYyv29LZc4NyGOG8E7DhpwZXS5u0bjkEY30reXiBoBhiwS2nPS4pkjGnac51QGXJpDSzTqBI7MLqblfzdHOk5Ji29Hdd1wdbavuai1mpfXMVAUycjlrVIvr2UfF8eKvQ+B+qcBVDF6vX8/cq4x/kOaWKc4+dnQkVsU5o01dtQ5DXJdSOfleH8pZ3VeYJVbDUdMM44cxJbS3qozeeineGYYJmXnXSV0yi0HctrDkOQnzJmJ01d+brsToJEaDpUKHgvo5Kg+GqkjVCJdhO/5GLtp32S55jfhnlEuYoG8BIy4igX5ye60gMBg1xvzSWHhjO4QWYTROeo+38qY04boc7EPgXwC0Z7K5FHnIaqPvwOqoRVaBFtpNdD1jQNYEe6hLsWNHpSUF2Qv6wQSFbzef/FhcwA+IAR0O0GEdwqfnYVP/dPqKJwk4ipnhbRS2B8wzHM4QI/xl36EQrluCZxkjUMBh6gRHkQwHN8zybluHa3cy55bV3lZy5MZZoG3PSKwjrEqxkxpVaifA/FvIj/s1Ch+akYP59lEVTB1DJKo6ehMtbjnsMMEmyv0AAdJmCCUdgwauMiHeEC1FAqfQrgAS3OYpO+5XOiRGuN4yiyu5ZAJfXaLtrKQLWx+hCFQzi5iaOGOn4nVWAQLFVQ5SG/oQT5KxfDhgT8Cap3yy4apU+ieFH5OgbTJOlITzJ/n5thSwWAMsA1XFrsA4FIs7EfLYZQFY2vwxWYzCaK+38UseDFdRawbKe0me667p9oSzwDdTBXCRV5ms/7CuoU/I4iIHlFcwKC3s1bNJ6XVGC8h+lFNkQNKpUCSo4uo3RftEnzaHi+U2KMLg3RXQTxAwC2eZ7XCdWYpguVpwMcz3pNOqyj8foyRp/d+CFBufdpvNdaHmcnbba5JWzUSEARF2mh5mfbIjlk/FzzJrxx1KEw+CPGCNJkdg6jL0uqJJ2EOuNpoe2ylHbWUY3ffhHV3k7jtq0CRu1JrqlR3MYEKMMU77NRyKi3Rb+gDfKZIagk438r1cwAJUsVks0DjkrnuBCL6IZHcX33Q3U6mmF5jD/Qe3Nh0LLeNViMEYIEsNvkJk238SOYpRRK5PhBLsReGpZTCZb0BAJlPRf7LRq5KyKqhRN0o22SrOVMGJyXmXo98xmNtJlILFb4NxH+5l4avWLPSPJTEyauFGQd1EmttDndT4nXDPMznE+oFmxKlUGuaYvJuFyDXZuCSi380bJtspLBoFIpkCIiV3CSbwb+X8AydQLAso7SRM8nOQzVBfo+bSyljMez3PHLK2DU3kAvLBdXokhQ7rzFAc+lq/atAUhyZPhGqFzQnpB5iDfUiAqVr7qu20YX+OUQW+59jmFVhK88RAPdZqPis+RRYymbzgQoaRqJlywOeDGNv1I9WiQRfC3d36/H8Yykd38lbJY2z/Pa6N18X8TL2MdxZyg1S/G+g4s33+K45WDzOhQucigLKHKh0iXYi8bWQEUzDxtItkEa1oup+0vRZc1medASWNqocl4u4RUehTpoXG5oqwxBRaVvtgiUPm7OZt1FDkvtNJEoKcvSpJnPMKkH8ii+z8M8/bHHIlhMQaIbqUvpaQwb2Crfo3BabYsuUfX4cVWPo4koGzSfutLEJZbGP19FfIbYLEmCRUCyB0VuzQqhY9zFt7iua6J+zlL9NFtWPykTxptQr8WBzjaUDh4Nwu4yPbDLAbBUJQSSYxH+zqOUmOZ5nsmp/RDV1RyL/O+BQbKUayBN8rB3gVMdVGKQaS5HNUFVbta/gGV6DG+oja+XI4JEN1KHYd7H7jRUkpMtCl7mWRZQREQPWxrkVG0BS5GvMS4OiYE7rbq6+qGIakgHyQ9lPr8bKlvQFKQXULjc0hZQhhEzMlsLux2HmiitTDwqyU3tS+C5lwHsHB4enhbBZtFBEufMy4M68EzBLGnsEkHSYGkNRjTD2i8XKCnYy7AHVPa3qf3T6LpuVYJj0V3nYJzFD/BmvWaTJHEwehGjs/5L7fi8ZaCMxFU91bBLUyIAZUog8TspsIjNokuWNAqRyg1QZzdRvJtSNEzepg0/O2wRKHnafGWpHjcAFFvXrmY0Q7kUaMf4+mEpexHJDQFLiguTgspUK8e7KcVvKbA3sTukpCQT0VONCpaSAw9rpONF/aIySe9IWUpcSF3NlcOrIsXhUe0FkSx/467dxvcWQUVRX0gIJPrzcppaN6FBbdPaqMwUrydXBES+VAoGm81IVZ1cKS+XTsdtkxEkqZLrQqHxYDGaSXda+qYlORapSJzB50hxVJYxm6qA51UuCV+nQJ2vmPDVZ6xpmHxKeg1A97sK4f1kXADNUiko6HYCk9LretKWVJDDQbolXGPH8lhqUbh2JM3d1cWxiTRzEpqvXkdTai56xWPKgurReRvEwahKwQGonI4wkbYSKiNeygmSph1Qh2VfGHx2K1Sq5AGUV51nQuugMuF7aLM4UFlqSdMiqHKSfYZ8fQgqvfJDS/PeRkn6VlD91NbWprLZ7KNuAOHFgly2YikjEYw0ORuxNZYNdIPfZuyig2DZrnknST1ban5Nbb9q2G2tKmp/DA6y2awLwCk18WHYpUENKKWMtB6L3tcGqFyRl2i41lNq7aYt8YCmfpKyiXIRFl+K3mxR7ENB20Dp46KYuLq9ruvaAskaDSRi6degcEXbDCSb/FSNQocFE5BUwV4+UIrjiZVmMILk2zAEpcQUQ1e3x/O8kYTHIpJkD1SZZVhIoNsCWKbDvBunAMXWCX4VgeLFAcoQ7Lbf7KZEMbm/Z5CMbagASMKCcjuhkszj5rO4KJRImIB+Kj/bbxko4wqEUkDJaaLSBl2i6Jti6FZK7CUJkEhYvlQwTQ/K7QzYLOVQEyWKqX0ygyralo1Sl4REEUvYVia4MGCm4eelrVVNApLkJUSPuOpq6H6UV7baqi2MidE1G3YrIOpQOthp7O5NsTRIDyrS2mIoske4I+fEAMmaMkGig0X3hqKARWq4LxmqnRRU1NRmTVUjDDIETIvUmywO9CQXPm0IrMtQ7cHKBUkpm8QmWG6kjXUEga7cReg6qIixzU5MTTA8FCxFeajzHlv0Iwo3VZiM9yCNytYJAkkxsJgAfQ1UyexPJi4pgXURdlu2TzOJUZnkzOb4ZbbaRvVBHY7dbCBNMvzsYS6+CW009G7igGWmAVgWEVTtMK/QXATVmM+mfSI5y1eAUm7HpTwKlxrZosMAbkLp/Aw5qPyYBuWtJeaxUbNJjlsae7fmOhcDSxqqQc7HdPNN1E4z7YdjFvkuRfAXOKayUyFlJztkhC06QT2/0MBeklvLPoDqatRYhOkbLagbE7Do3pDwdxPHfDDCdy6DKiK3eRHELKqdnlJ2lkl/lDzdM5u1JYNQjflMLnkW1B8iI39dQpIcQ2VIwKKrIbngYSXUyexIYA7jeSKLYHaqHodaaCgPl7Kx3Ag7/nrYLW1sZyBqQYS/eZs6dqv23iaoFMaXKiBJioGlGap3SwvUFSzv0A4w5fdKRCubLYcyBHWnybhM+qNUodCdZ7bFgfcSLOsixCSyUL1IlvLv1kH1cd0zASDRwfIsQb+DUuGQxs9SNJVq52PL45S1lNIRL65EqaYOO2NgQ8Slz+jXLzW0nVxOdBdUl+s1UPf9HsfE3oAu199mKfGi5LO0UR3YBvpNDE1IonciRepSM9sKu31GslAZbHdpam68SgHZBQugjuF7yYAUJu4G9HlQHbN/gErMnoeQfBbXdZ2QdWhlmOADy2NMc1zfa2scO+AmnoY00m2xPIlDlGB3lRDXnma4roe6B2cPQfME7HdVDKP1UDetfsBXl2bg3q+5/26gSF1aoG3F6NapNo3YKhRajfhJAUXu6TlBK942vQPVwXlhyFicEO9mNw2/bqie92cJlrWoTHfIG/i82wiMTzX+XuR7swgWILzWdxMB81EFxisdrozLc92In/uWO9Z2c/+foBK6f41CIXtKU4NgACvMuxmhK/oGVDL2kwzM2QDMTI7xUdoVwfsNZawXNW/oPvIvr41pMVTzwjHJzRaojmtYtPtmsY5LTgTAdNIWqES/9i+o57fPmjUrpcUgHHo3qzXDNYyOUrp8CRXuf5LSJ65KylDSPQh1l1E1bZF3UTxnRCTL85Q+bSjczj4LKgteXGjbtIRreCqCkHAE0cVQnA/8f45idQ1tCdvdod8A8Oi5c+fugWprNUCQTCPTS012hOP9AsAt3Lm/oO1wGsUvdtIp7GKnNEX3c1DhbxMPTSTLboKsGqob5q+gLof4sgIgSdH1/iSwdvlxcJCT3fmfUDUjEqrX7xTMMNB2noz0UbjY6AQKHY9t3Sc4QtXTSleulr9fIkiqSxhjUswkFfsZLvQ0FNpOyFVxWRSueqnXFliuipPPDzJU0I3CnTumdwvqOTXTBECpVOrHfD7vw17nCEczmOeTl4Oa5ziFfD2D8KviZqW1N4If8DH6Nku5a6+Xu3EBVHjcNPczKuW4cy9y197E37/lwjYaSDRf20niMp/A2PLZoAqu48Y4F+J5SR1UTYQgmi5Zcld2qaPKZfL5vFzZl7IEFAHJAoKkF4UsO0+bQxgOHPGnh2hEhU24CcDjdPW6A+L4j1DnM5W4nLoNhRNXl6Laptp7hGppv4XvnkqbZMD3/f+Duk0kB9US3Sa1MnbyDsZm9C+kcxCGgxSA30nlXXURL0cQXqW9L5dX/5OTtHk5NfiM22lrDHCyf8TorLukxzBe9WScudzEsVehcBXKK9zpD2PsqXOS/NzMNevF2Lsi9Rtog1QFwC3W9ccr8rsupj6lzXCrJVEpsYVV9G6+ob3wNu2TP2lxFpuXdCf1PW2UVPsYK8lQfXVDtdyY5TjO/bATVb6Va/VpyHoabZw4yB3khNcjXlZ8Mfol1CnqbtpENWTiAF3R/RTh98L+jVlxYy2Pa8G4rzUjO6/HWXzfF1c5SYlSwzUyvd6muI8cwxj9EqowaZ0FkKxgMO1kQJqJeP4c6kq4GYyRLL3KAJJh/Ob3dMf/qs0l6N1InGUXvbJyS0HCaB3XyNj97urqGuM5uojnsXhQFyqtQHIpCDpIOgK7S2ewS2/oOe6Wzdy5CyYYIFVQnZqepGp8mepyEEWuiluzZk0wgpsUWGaTl3ujqLMZM8bEJJ00zLsTFqNTROtWqDwMLyZIVqFwdjOeHtXfPwRVArEaqu/IRQbZvofddhHBwNwSBrQA1cvkn4Fxhs4lEDIXsDxGsLxWpofnck2+jBCFLWbYu1FD+MXoAHVhW8IgiUJZuvFy3rIJwFNQebVzUeSsZ5wuCq6BByLh/G00rpcw6vkXLlC5m+Yi1LFAHMnSxjU5EHNtUyJRknAFhxgH2MGA1qkyQfJiAnGZXhq6nzEKuZjMHmKwqZMxkl4AQ0W6KPgohLP1xa5jHKSZcYlm7vYO7vxTCXosApbHCMTXI0iWuVC11TtRfjv4UXastLDMIH62dwfF7QPcUQMRQLIihiQZzys7zFcD1LHDPKqnWhQ6BPTy5yAKPUtqCYK1VCkN/JnRwHiGKu9sAotRCiw7CJbXDIBYxzX4MCF+ZgBUiY2SlIV9gAzeRjRHNVxtUR9tmCOcbwPUWUsT1FGA/C5NBzNUVc0E0E9QhVjd3FADqByJzbJDs1nGA8s2qKOHAwk9PwXATUr16PQm9fVmWtulQPIi7N/OHjSCpZalGDi3Exwf4OqgUWBZtWrV6wcPHgxTQ5sJ/qcTfHZKD7glmdSThUpJXE4xfzWB5FqmK67zwYMHt2FsuH81eb4HyfZSSctDhpFsxppkxu8hIBaGoH4SJPHAcgPVkCRsL6KXt4e8TzKyWwdg2KUhl+QXi/48CZXw/LAWBLsbKiz/0iRIYoNFkp4WEjTvYnQUO8mN35+mrrZ1VtIOdTK9Beq8ppWo75hc71gL1wUV3HwQ6sBvHwpFZklTLYAeaWRXb3Fin9KdvB0qWnp8cq0TkdhTAKRd1+2HOu+yVfBWD+Cyi0JnRltXkW3hpA7Q4Fo0udaxaSFUYvfnnufthMpzud8CWKqIjW45tbwOdvq0bYY6+/g7XeUPKS5XT6512bQaqjf+25TQXSiE+5NOUZBbQC6KRKm1oH42013Tw/JfQB2lb+D/T1J0nm4gD9sDNssuqOiz7jrHsYNE7dSKROmHilw2WgJJ0LuRMoeboQJIdZPrb+Si7iDPntO8G91m6dK8obhgke9sJDb6BTlnKWKSsklWjhMnkTjL01DnLU9xcpMUTnPJozx5Nl6cRNTQnITU0HXExpUv6oCqWKsLiJ5yQCIHfJ0l0JolmNppmG3AxLaquBrd4A3kTTt5lTWIkyQFljpiokMHRCfRc31MSbKMujJKnOQAReZiAH+A3WY91wrNJi8WkzdRD/iSAMv1xESnDpR+qIBYswFii4HkthKSZDzqAPAMVL7IY1Ch/5oiBtbPiYKZhTWc+2PkxTMoPzgpNsscqEL6qPxrJib6g8z/GirU3lgmSF5EvJS7IQDvEWwtAP6d3+uWCd5rASR6/u9tnHMLefAe4ue5CFhaDMHiaEbsAmJizC49BpWX0TIBINHpFFR4WkpBnuCggzdwXYsSxg3YaikUisKkpOLZBHmpg6U1gjc0j1i40lFTTy/I0WhayA9ki0zUC9gkuxOemDDxEFR22h3cDf0B1F+LEkYfcwbAb6HyR9qhjjoGLT1XbJbHoJLP30ChwYCn8XUE6mzuJo4pV2xXtlM33VLk/72Ad/OiBZDoNIhCwvQJvncPVHTyWoy/1HHsa6l2TkGljX5gESRhaug3AZBI14I8174ZhYAeECKG8kTRYhpReQLiG21H65KkEqkCcnn1Bagir5MUjetolecZFEpSwizlfJM45U5r491CsEiR+Bucm63WIUEagDqUXQdVwfgDnzuLv5+HCpR+FRQAYZlthwiUVVA5pvq1q1uhjrV3W5YkYVJMrjRrJ2gWcJz3UmSe5MTPVGB3liLpw3ITQVLF8b3JhVoE1X9O6owrqUYvBNTQqwSrFK4BIR2zi6VAvsUvmorC9fObKEl2EiRuhSYYFJHSeeE4X3U01BYSyBL57YRKMu6C/WRo6cg0i6JdbjT7kTGQjsAYqiokQYrxU9TQ76jKT9E1n01zAqZAuQR1OrmV0uTzA8r6AAACkElEQVQuguZZhDeXqYREkRtKcyHiVMoyUlykuXwt5YL0cE6SRZ/lSzoxBROVg4uY4uJWQR2SSecn6Zwkt2j1kOkfEazF6nDy2pwmyqC+wDjNQ4y1XILqln3JJOATpEV02xoo0s+QSZX2OPJ87jwuRF/AvpKYhFw67XOHNDLC2IhCKYanfW7QcZyc7/tDfE/UwHTN9qnid6WpUqr4b/muEQLkPH8OcTzyuWBBeo621Qx6lx7sXRccRr5mE/UTJPUc+6umkcFiht1qMquXr1oU2nc5FZpcmru4Fyoh3An8vxPiPotxHuyvJh0cpDGQE/i/Jv7dZW2hBUTFvitN8AYL0YM88qiqainhKslDGWuWm38m7bkOel4D41nkpegbfsEWqp0vYPcOmWLUyMDU+7DfZtN2Xc9ieh6vwH5nzTCaCnXCXw+VUFYyPTXKNSwvEYH30jrOVHhyTgQpeLWTE5H/SXpjy7mGMxHhFpIohV+X6FatgCqAXkB39CTsXo44SclI43l012fR2I6UtV9OheAhqBaeyxlhvJVgOU2DzpYr+nM4PXYraLzW0ZC/AYWzm3bGciIfNpZbSjoE1QfkINSVq7dS512gHXNeM3z7E3ID80Vc12uJvMAckvIeJVt+Cl/XU3Jcxw38OT2ssvvsx605zkFV+X/HgbYQvbcTwVmCR9pLDJE5WS1+4fH9Ec2rCAJCuk5LwM2F2U2f5S6m3uGhKmGJIlFQh57PUIirD80rE/fc1eI5tfy9hsCoR+Ey7T5u1nYGHfuTNKpsUD3dzOl8NWqor9HA4GkgQYgL6muLV0PXeATJtQP3Q+IxdXzmYMJ8cjSwV6FwQu8GXG0n4MJXBdz4QQKin/bhRb66kwJGkP4fOfNPZjgj9bQAAAAASUVORK5CYII=)',
      backgroundSize: 'cover',
      margin: '0 7px 0 0',
      width: '50px',
      height: '50px',
      borderRadius: '15%',
    },
    ios: {
      margin: '0 10px 0 0',
    },
  },
  header: {
    all: {
      color: '#ccc',
      textShadow: '0 1px 2px #000',
      width: '44%',
      fontSize: '1rem',
      lineHeight: '1.2rem',
      fontWeight: '700',
      fontFamily: "'Helvetica Neue', sans-serif",
      title: {
        margin: '0',
      },
      subtitle: {
        margin: '0',
      }
    },
    android: {
      title: {
        color: '#fff',
        fontSize: '0.8rem',
        fontWeight: '400',
      },
      subtitle: {
        fontSize: '0.7rem',
        lineHeight: '0.9rem',
        fontWeight: '400',
      },
    },
    windows: {
      title: {
      },
      subtitle: {
      },
    },
    ios: {
      title: {
        color: '#4d4d4d',
        fontWeight: '500',
        fontSize: '0.8rem',
        textShadow: '0 1px 0 rgba(255,255,255,.8)',
      },
      subtitle: {
        color: '#6a6a6a',
        textShadow: '0 1px 0 rgba(255,255,255,.8)',
        fontSize: '0.7rem',
        lineHeight: '0.9rem',
        fontWeight: '300',
      },
    },
  }
}
