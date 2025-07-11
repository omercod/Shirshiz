import { forwardRef } from "react";
import PropTypes from "prop-types";

const RecipePrint = forwardRef(({ recipe }, ref) => {
  return (
    <div
      ref={ref}
      dir="rtl"
      className="min-h-screen"
      style={{ fontFamily: "inherit" }}
    >
      <style>{`
        @page {
          size: A4;
          margin: 1cm;
        }
        html, body {
          width: 21cm;
          max-width: 21cm;
          min-height: 29.7cm;
          margin: 0 auto;
          box-sizing: border-box;
          font-size: 12pt;
          line-height: 1.4;
          overflow-wrap: break-word;
          word-break: break-word;
          color: black;
        }
        .recipe-content, .ingredients-section, .instructions-section,
        .instruction-item, .ingredient-item {
          page-break-inside: avoid;
          break-inside: avoid;
        }
        .print-header, .print-footer {
          position: relative;
          page-break-inside: avoid;
        }
        .print-header {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80px;
          border-bottom: 2px solid #f2b1ad;
        }
        .print-logo {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .print-logo-image {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #f2b1ad;
        }
        .print-logo-text h1 {
          font-size: 24pt;
          font-weight: bold;
          margin: 0;
        }
        .print-logo-text p {
          font-size: 12pt;
          margin: 0;
        }
        .recipe-title {
          font-size: 45pt;
          font-weight: bold;
          text-align: center;
          margin: 15px 0;
        }
        .recipe-image {
          display: block;
          width: 100%;
          max-width: 400px;
          height: 300px;
          object-fit: cover;
          margin: 0 auto 30px;
          border-radius: 10px;
        }
        .recipe-description {
          text-align: center;
          font-size: 15pt;
          margin-bottom: 30px;
          color: #555;
        }
        .recipe-info {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
          border: 2px solid #f2b1ad;
          padding: 20px;
          border-radius: 10px;
          background: #fef7f6;
        }
        .recipe-info-label {
          font-size: 16pt;
          font-weight: bold;
          color: #666;
          margin-bottom: 5px;
        }
        .recipe-info-value {
          font-size: 14pt;
          color: #333;
        }
        .ingredient-category {
          font-size: 18pt;
          font-weight: bold;
          margin: 20px 0 12px;
          color: #f2b1ad;
        }
        .ingredient-item {
          font-size: 16pt;
          line-height: 1.4;
          padding-right: 20px;
          margin-bottom: 8px;
        }
        .instruction-item {
          display: flex;
          background: #fef7f6;
          border-right: 4px solid #f2b1ad;
          border-radius: 5px;
          margin-bottom: 20px;
          font-size: 16pt;
          line-height: 1.6;
          padding: 10px 12px;
        }
        .instruction-number-cell {
          margin-left: 10px;
          font-size: 16pt;
          font-weight: bold;
          color: #f2b1ad;
        }
        .instruction-text {
          flex-grow: 1;
          text-align: right;
        }
        .print-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          border-top: 2px solid #f2b1ad;
          margin-top: 40px;
        }
        .social-links {
          display: flex;
          gap: 30px;
        }
        .social-item {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 17pt;
        }
      `}</style>

      <div className="print-header">
        <div className="print-logo">
          <img
            src="/assets/images/home/shirProflie.webp"
            alt=""
            className="print-logo-image"
           loading="lazy" />
          <div className="print-logo-text">
            <h1>SHIRSHIZ</h1>
            <p>By Shir Azaria</p>
          </div>
        </div>
      </div>

      <div className="recipe-content">
        <h1 className="recipe-title">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="recipe-image"  loading="lazy" />
        <p className="recipe-description">{recipe.descriptionLong[0]}</p>

        <div className="recipe-info">
          <div>
            <div className="recipe-info-label">זמן הכנה</div>
            <div className="recipe-info-value">{recipe.prepTime}</div>
          </div>
          <div>
            <div className="recipe-info-label">זמן אפייה</div>
            <div className="recipe-info-value">{recipe.cookTime}</div>
          </div>
          <div>
            <div className="recipe-info-label">מספר מנות</div>
            <div className="recipe-info-value">{recipe.servings}</div>
          </div>
        </div>

        <div className="ingredients-section">
          <h2 className="ingredient-category">מצרכים</h2>
          {recipe.ingredients.map((group, idx) => (
            <div key={idx}>
              <h3 className="ingredient-category">{group.category}</h3>
              {group.items.map((item, i) => (
                <div key={i} className="ingredient-item">
                  • {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="instructions-section">
          <h2 className="ingredient-category">אופן ההכנה</h2>
          {recipe.instructions.map((step, idx) => (
            <div key={idx} className="instruction-item">
              <div className="instruction-number-cell">{idx + 1}.</div>
              <div className="instruction-text">{step}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="print-footer">
        <div className="social-links">
          <div className="social-item">_shirshiz</div>
          <div className="social-item">shirshiz</div>
          <div className="social-item">Shirshiz - עוגות מעוצבות וסדנאות</div>
        </div>
      </div>
    </div>
  );
});

RecipePrint.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    descriptionLong: PropTypes.array,
    prepTime: PropTypes.string,
    cookTime: PropTypes.string,
    servings: PropTypes.string,
    ingredients: PropTypes.array,
    instructions: PropTypes.array,
  }),
};

RecipePrint.displayName = "RecipePrint";

export default RecipePrint;
