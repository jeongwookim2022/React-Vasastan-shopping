import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function SizeCompo({
  product,
  size,
  sizeVisible,
  setSizeVisible,
  setSizeIcon,
  sizeIcon,
  setSize,
}) {
  return (
    <div className="size">
      <div className="content">
        <p>size</p>
        <p>
          {size}{" "}
          <FontAwesomeIcon
            icon={sizeIcon}
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              setSizeVisible(true);
              setSizeIcon(faChevronUp);
              if (sizeIcon === faChevronUp) {
                setSizeIcon(faChevronDown);
                setSizeVisible(false);
              }
            }}
          />
        </p>
        <div className="size-group">
          {sizeVisible && (
            <ul>
              {product.size &&
                product.size.map((eachSize, i) => (
                  <li
                    key={i}
                    onClick={(e) => {
                      setSize(product.size[i]);
                      setSizeVisible(false);
                    }}
                  >
                    <em>{product.size[i]}</em>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
export default SizeCompo;
