import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function QuantityCompo({ count, setCount }) {
  return (
    <div className="size">
      <div className="content">
        <p>count</p>
        <p>
          {count}{" "}
          <FontAwesomeIcon
            icon={faChevronUp}
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();

              setCount(count + 1);
            }}
          />
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              if (count > 1) {
                setCount(count - 1);
              }
            }}
          />
        </p>
      </div>
    </div>
  );
}
export default QuantityCompo;
