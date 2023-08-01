import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function ColorCompo({
  product,
  color,
  colorVisible,
  setColorVisible,
  setColorIcon,
  colorIcon,
  setColor,
}) {
  console.log(color);
  return (
    <div className="size">
      <div className="content">
        <p>color</p>
        <p>
          {color}{" "}
          <FontAwesomeIcon
            icon={colorIcon}
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              setColorVisible(true);
              setColorIcon(faChevronUp);
              if (colorIcon === faChevronUp) {
                setColorIcon(faChevronDown);
                setColorVisible(false);
              }
            }}
          />
        </p>
        <div className="size-group">
          {colorVisible && (
            <ul>
              {product.color &&
                product.color.map((eachColor, i) => (
                  <li
                    key={i}
                    onClick={(e) => {
                      setColor(product.color[i]);
                      // console.log(product.color[i]);
                      setColorVisible(false);
                    }}
                  >
                    <em>{product.color[i]}</em>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
export default ColorCompo;
