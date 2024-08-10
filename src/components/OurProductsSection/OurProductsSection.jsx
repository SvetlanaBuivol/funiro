import Container from "../Container/Container";
import { products } from "../../data";
import ProductItem from "./ProductItem/ProductItem";
import { List, Title } from "./OurProductsSection.styled";

const OurProductsSection = () => {
  return (
    <section>
      <Container>
        <Title>Our Products</Title>
        <List>
          {products.map((item) => (
            <ProductItem key={item.img} item={item} />
          ))}
        </List>
      </Container>
    </section>
  );
};

export default OurProductsSection;
