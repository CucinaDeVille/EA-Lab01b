import Page from "./Page";

const articles = [
    { mytext: "New Banana found in Offenburg", imageSrc: "https://i.imgur.com/U1QeBwO.jpeg" },
    { mytext: "Biggest Banana ever!", imageSrc: "https://i.imgur.com/n2fP4fH.jpg" },
    { mytext: "Banana for scale!", imageSrc: "https://i.imgur.com/fxNl7Ca.png" }
];

function App() {
    return (
        <>
            <Page content={articles} />
        </>
    );
}

export default App;