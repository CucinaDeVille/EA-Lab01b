import Article from './Article'

function App() {
    return (
        <div>

            {/*Article aufrufen und drei Attribute übergeben */}
            <Article
                imageSrc="https://i.imgur.com/U1QeBwO.jpeg"
                mytext="New banana found in Offenburg"
                mynum="1"
            />

            {/*Article aufrufen und drei Attribute übergeben */}
            <Article
                imageSrc="https://i.imgur.com/n2fP4fH.jpg"
                mytext="Biggest banana ever!"
                mynum="2"
            />
        </div>
    );
}

export default App;