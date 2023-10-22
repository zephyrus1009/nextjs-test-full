import '@styles/globals.css';
// import css to entire app

//import components
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Promptopia', description: 'Web tao prompt'
}
const RootLayout = ({children}) => {
  return (
    <html lang='en'>
      <body>
        
        <Provider>
        <div className='main'>
<div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
        </Provider>
      
      </body>
    </html>
  )
}

export default RootLayout