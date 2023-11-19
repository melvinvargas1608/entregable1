//  crear el componente con abreviatura rafce
import "./styles/QuoteBox.css";

const QuoteBox = ({ quote, handleChangeQuote }) => {
    const { phrase, author } = quote;
    return (
      <article className="quotebox">
        <h1 className="quotebox__title">INFOGALAXY</h1>
        <div className="quotebox__phrase">
          <p>{phrase}</p>
        </div>
        <button className="quotebox__btn" onClick={handleChangeQuote}>Change</button>
        <span className="quotebox__author">{author}</span>
        <span className="quotebox__by"> By Melvin Vargas</span>
        <image src="/entregable1/public/image/planet1.svg" />
      </article>
  )
}
export default QuoteBox
