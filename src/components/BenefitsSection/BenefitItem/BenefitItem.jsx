import PropTypes from "prop-types";
import { Item, Text, Title } from "./BenefitItem.styled";

const BenefitItem = ({ item }) => {
  return (
    <Item>
      <img src={item.img} alt="" />
      <div>
        <Title>{item.benefit}</Title>
        <Text>{item.text}</Text>
      </div>
    </Item>
  );
};

BenefitItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default BenefitItem;
