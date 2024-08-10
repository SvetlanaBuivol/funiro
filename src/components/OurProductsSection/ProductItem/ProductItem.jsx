import PropTypes from "prop-types";
import {
  Box,
  Button,
  CardOverlay,
  Price,
  StyledItem,
  Text,
  Title,
} from "./ProductItem.styled";

const ProductItem = ({ item }) => {
  return (
    <StyledItem>
      <img src={item.img} alt="" />
      <Box>
        <Title>{item.title}</Title>
        <Text>{item.descr}</Text>
        <Price>{item.price}</Price>
      </Box>
      <CardOverlay>
        <Button>Add to cart</Button>
      </CardOverlay>
    </StyledItem>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductItem;
