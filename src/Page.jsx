import Article from "./Article";

export default function Page({ content }) {
    return (
        <div>
            {(() => {
                return content.map((item, index) => (
                    <Article
                        key={index}
                        {...item}
                        mynum={index + 1}
                    />
                ));
            })()}
        </div>
    );
}