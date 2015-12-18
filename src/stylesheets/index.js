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
    windows: {
      background: 'linear-gradient(to bottom,#f4f4f4,#cdcdcd), #f4f4f4',
      boxShadow: '0 1px 2px rgba(0,0,0,.5)',
    },
  },

  closeButton: {
    all: {
      fontSize: '0',
      lineHeight: '0',
      fontFamily: 'serif',
      textShadow: 'none',
      color: 'transparent',
      cursor: 'pointer',
      textDecoration: 'none',
      border: '0',
      display: 'inline-block',
    },
    android: {
      width: '17px',
      height: '17px',
      marginRight: '7px',
      background: '#1c1e21',
      boxShadow: '0 1px 2px rgba(0,0,0,.8)inset,0 1px 1px rgba(255,255,255,.3)',
      borderRadius: '17px',
    },
    windows: {
      width: '17px',
      height: '17px',
      marginRight: '7px',
    },
    ios: {
      width: '18px',
      height: '18px',
      marginRight: '7px',
    },
  },

  icon: {
    all: {
      backgroundColor: '#ffffff',
      backgroundImage: 'url(data:image/gif;base64,R0lGODlhCAAIAIABAFVVVf///yH5BAEHAAEALAAAAAAIAAgAAAINRG4XudroGJBRsYcxKAA7)',
      backgroundSize: 'cover',
      margin: '0 7px 0 0',
      width: '50px',
      height: '50px',
      borderRadius: '15%',
    },
    ios: {
      margin: '0 10px 0 0',
    },
    windows: {
      boxShadow: '0 1px 3px rgba(0,0,0,.3)',
    }
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
        fontSize: '0.8rem',
      },
      subtitle: {
        margin: '0',
        fontSize: '0.7rem',
        lineHeight: '0.9rem',
      }
    },
    android: {
      title: {
        color: '#fff',
        fontWeight: '400',
      },
      subtitle: {
        fontWeight: '400',
      },
    },
    windows: {
      title: {
        fontWeight: '700',
        color: '#4d4d4d',
        textShadow: '0 1px 0 rgba(255,255,255,.8)',
      },
      subtitle: {
        fontWeight: '700',
        color: '#6a6a6a',
        textShadow: '0 1px 0 rgba(255,255,255,.8)',
      },
    },
    ios: {
      title: {
        color: '#4d4d4d',
        fontWeight: '500',
        textShadow: '0 1px 0 rgba(255,255,255,.8)',
      },
      subtitle: {
        color: '#6a6a6a',
        textShadow: '0 1px 0 rgba(255,255,255,.8)',
        fontWeight: '300',
      },
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
      ':active': {
        background: '#2ac7e1',
      },
    },
    ios: {
      color: '#0C71FD',
      textTransform: 'uppercase',
      padding: '1rem 1.5rem',
      ':hover': {
        opacity: '0.8',
      },
      ':active': {
        opacity: '0.8',
      }
    },
    windows: {
      color: '#6a6a6a',
      textTransform: 'uppercase',
      padding: '0.3rem 1.5rem',
      fontSize: '0.9rem',
      fontWeight: '500',
      background: 'linear-gradient(to bottom,#efefef,#dcdcdc)',
      borderRadius: '3px',
      boxShadow: 'inset 0 0 0 1px #bfbfbf,0 1px 0 rgba(255,255,255,.6),0 2px 0 rgba(255,255,255,.7)inset',
      ':hover': {
        background: 'linear-gradient(to bottom, #dcdcdc, #efefef)',
      },
      ':active': {
        background: 'linear-gradient(to bottom, #dcdcdc, #efefef)',
      },
    },
  },
}
