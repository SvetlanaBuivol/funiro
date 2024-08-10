import PropTypes from "prop-types";
import {
  ActionsBox,
  Box,
  Button,
  CardOverlay,
  Discount,
  IconWrapper,
  New,
  OldPrice,
  Price,
  PriceWrapper,
  StyledItem,
  Text,
  Title,
} from "./ProductItem.styled";
import { ReactComponent as ShareIcon } from "../../../assets/svg/share.svg";
import { ReactComponent as FavIcon } from "../../../assets/svg/whiteHeart.svg";
import { calculateDiscount } from "../../../helpers/calculateDiscount";

const ProductItem = ({ item }) => {
  const handleShare = async () => {
    const shareData = {
      title: "Заголовок страницы",
      text: "Интересный контент!",
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        console.log("Ссылка успешно отправлена!");
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        alert("Ссылка скопирована в буфер обмена!");
      } else {
        alert("Ваш браузер не поддерживает эту функцию.");
      }
    } catch (err) {
      console.error("Ошибка при отправке ссылки:", err);
    }
  };

  const itemFeatures = (item) => {
    if (item.discount > 0) {
      return <Discount>-{item.discount}%</Discount>
    } else if (item.isNew){
      return <New>New</New>
    } else {
      return null
    }
  }

  return (
    <StyledItem>
      <img src={item.img} alt="" />
      <Box>
        <Title>{item.title}</Title>
        <Text>{item.descr}</Text>
        {item?.discount > 0 ? (
          <PriceWrapper>
            <Price>Rp {calculateDiscount(item.price, item.discount)}</Price>
            <OldPrice>Rp {item.price}</OldPrice>
          </PriceWrapper>
        ) : (
          <Price>Rp {item.price}</Price>
        )}
      </Box>
      <CardOverlay>
        <Button>Add to cart</Button>
        <ActionsBox>
          <IconWrapper onClick={handleShare}>
            <ShareIcon />
            <p>Share</p>
          </IconWrapper>
          <IconWrapper>
            <FavIcon />
            <p>Like</p>
          </IconWrapper>
        </ActionsBox>
      </CardOverlay>
{itemFeatures(item)}
      {/* <Discount>-{item.discount}%</Discount> */}
    </StyledItem>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ProductItem;
