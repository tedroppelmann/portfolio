import './Home.css'
import Typewriter from 'typewriter-effect';


function Home() {
  return (
    <div className="Writer">
        <Typewriter
            options={{
                delay: 80,
                deleteSpeed: 20
            }}
            onInit={(typewriter) => {
                typewriter.typeString("<code>console.log(</code><samp>&quot;Welcome to my cript!&quot;</samp><code>);</code>")
                .pauseFor(400)
                .deleteChars(9)
                .typeString("<samp>webpage!&quot;</samp><code>);</code>")
                .start();
            }}
        />
    </div>
  )
}

export default Home