import PropTypes from "prop-types";
import { Item, Title } from "./BenefitItem.styled";

const BenefitItem = ({ item }) => {
  return (
    <Item>
      <img src={item.img} alt="" />
      <div>
        <Title>{item.benefit}</Title>
        <p>{item.text}</p>
      </div>
    </Item>
  );
};

BenefitItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default BenefitItem;
