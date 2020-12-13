
import { Link } from 'react-router-dom';


export default function HomePage(props) {
    return (
        <main className="Page">
            <h1>
                <img src="/favicon.png" alt="hero" className="headerlogo" />
            </h1>
            <p>
                Welcome True Believer to Marvel Assemble!
                <br />
                Here you can create your Super Hero (or Villain) dream team. You need to create an account in order to save your team but you don't need an account to get started.
                <br />
                <Link to="/search">Click Here</Link> Or hit the Search at top of the page.
         </p>
        </main>
    );
}

